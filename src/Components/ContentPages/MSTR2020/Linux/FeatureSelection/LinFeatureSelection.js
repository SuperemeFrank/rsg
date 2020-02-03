/**
 * @file The feature selection component. It returns a view that give user the opportunity to select the features they
 * want to install.
 * @author Haonan Yu(haoyu@microStrategy.com)
 */

import { Form, Divider, Row, Col, Tree, Input, Button } from 'antd';
import React from 'react';
//data & funcs
import featureDependencies from '../../../../../assets/MSTR2020/LINUX/Lin20FeatureDependencies.json';
import {
    featureDirectory2StateMap,
    featureKey2StateMap
} from '../../../../../assets/MSTR2020/LINUX/Lin20Maps';
import {
    createTree,
    initialMaps,
    checkNode,
    uncheckNode,
    getInitialCheckedKeys,
    selectAll,
    unselectAll
} from '../../../../Utils/CreateTree';
//component
import ButtonBar from '../../../../ButtonBar/MainButtonBar/MainButtonBar';
import SelectAllButtonBar from '../../../../ButtonBar/SelectAllButtonBar/SelectAllButtonBar';
import Navigation from '../../../../Navigation/Navigation';
import ReferencePicture from '../../../../ReferencePicture/ReferencePicture';
//css
import 'antd/dist/antd.css';
import '../../../../Utils/CommonCss.css';
/**
 * A view to display the input box for install directory configuration
 * @let
 * @type {Object}
 */

class FeatureSelection extends React.Component {
    /**
     * Contains 5 maps to control the checkbox tree
     * @type {Object}
     */
    maps = {
        /**
         * A map to mapping nodes and their children
         * key: nodeKey, value: [nodeKey, nodeKey, ...]
         * @type {Map}
         */
        childrenMap: new Map(),
        /**
         * A map to mapping nodes and their parents
         * key: nodeKey, value: [nodeKey, nodeKey, ...]
         * @type {Map}
         */
        parentMap: new Map(),

        /**
         * A map to mapping nodes and their dependencies
         * key: nodeKey, value: [nodeKey, nodeKey, ...]
         * @type {Map}
         */
        dependencyMap: new Map(),

        /**
         * A map to store the disable status of each node
         * key: nodeKey, value: boolean
         * if value is true, the node will be set as disSelectable,
         * false otherwise
         * @type {Map}
         */
        disSelectableMap: new Map(),

        /**
         *  Mapping the key of TreeNode to states in WindowsInstall.js
         * the key is the value of 'key' for each TreeNode in FeatureSelection Page
         * the value is the corresponding state of that TreeNode
         * @type {Map}
         */
        feature2StateMap: featureKey2StateMap
    };

    nextStep = () => {
        if (this.checkedKeys.checked.length > 0) {
            this.props.nextStep();
        } else {
            this.showErrorWarning();
            this.forceUpdate();
        }
    };

    backStep = () => {
        this.props.backStep();
    };

    /**
     * Show the Error Warning
     */
    showErrorWarning = () => {
        this.featureContainerStyle = [
            'featureScrollableContainer',
            'featureScrollableContainerError'
        ];
        this.btnBarStyle = 'selectBtnBarError';
        this.showErrorMsg = true;
    };

    /**
     * Remove the Error Warning
     */
    removeErrorWarning = () => {
        this.featureContainerStyle = 'featureScrollableContainer';
        this.btnBarStyle = 'selectBtnBar';
        this.showErrorMsg = false;
    };

    /**
     * To handle the special cases for the installation on Windows Platform when do the checking action
     * @param {String} nodeKey the unique id of the TreeNode
     * @param {Object} checkedKeys the object that 'antd' treeSelect use to control the UI
     */
    specialCheckingCaseHandler = (nodeKey, checkedKeys) => {
        // any 1.x is checked, 1.5 and 1.6 are required and should be set disSelectable
        if (nodeKey.match(/^1$|^1\..$/)) {
            if (!checkedKeys.checked.includes('1.5')) {
                // no corresponding state for this product
                checkedKeys.checked.push('1.5');
            }
            if (!checkedKeys.checked.includes('1.6')) {
                // no corresponding state for this product
                checkedKeys.checked.push('1.6');
            }
            this.maps.disSelectableMap.set('1.5', true);
            this.maps.disSelectableMap.set('1.6', true);

            // Identity Server and Identity Manager cannot be checked alone
        } else if (nodeKey.match(/^15$|^15\..$/)) {
            if (!checkedKeys.checked.includes('15.1')) {
                checkedKeys.checked.push('15.1');
                this.props.setOriginState(
                    featureKey2StateMap.get('15.1'),
                    true
                );
            }
            if (!checkedKeys.checked.includes('15.2')) {
                checkedKeys.checked.push('15.2');
                this.props.setOriginState(
                    featureKey2StateMap.get('15.2'),
                    true
                );
            }
            this.maps.disSelectableMap.set('15.1', true);
            this.maps.disSelectableMap.set('15.2', true);
        } else {
            /* the basic checkNode will set Web Universal disSelectable due to its internal 
                dependencies. Should always try to set it false unless 16 is checked*/
            this.maps.disSelectableMap.set('2', false);
        }
    };

    /**
     * To handle the special cases for the installation on Windows Platform when do the unChecking action
     * @param {String} nodeKey the unique id of the TreeNode
     * @param {Object} checkedKeys the array that 'antd' treeSelect use to control the UI
     */
    specialUnCheckingCaseHandler = (nodeKey, checkedKeys) => {
        if (nodeKey === '1') {
            this.maps.disSelectableMap.set('1.5', false);
            this.maps.disSelectableMap.set('1.6', false);
        } else if (nodeKey === '15') {
            this.maps.disSelectableMap.set('15.1', false);
            this.maps.disSelectableMap.set('15.2', false);
        }
    };

    /**
     * event triggered when checkbox is being checked or unchecked.
     * if the box is being checked, make all of its children and dependencies checked. The dependencies should be disSelectable unless the root node has been unchecked
     * if the box is being unchecked, uncheck all of its children. Set its dependencies selectable
     * @event
     * @param {Object} checkedKeys the Object that 'antd' treeSelect use to control the UI
     * @param {string} info  the information of the node that trigger this event
     */
    onCheck = (checkedKeys, info) => {
        let nodeKey = info.node.props.eventKey;
        if (info.checked === true) {
            checkNode(nodeKey, checkedKeys, this.maps, this.props);
            this.specialCheckingCaseHandler(nodeKey, checkedKeys);
        } else {
            uncheckNode(nodeKey, checkedKeys, this.maps, this.props);
            this.specialUnCheckingCaseHandler(nodeKey, checkedKeys);
        }

        /*If none products checked and the error message showed, the next
          onCheck call must be the user checked something, so remove the error*/
        if (this.showErrorMsg) {
            this.removeErrorWarning();
        }
    };

    /**
     * event triggered when TreeNode is being Selected.
     * If a specific feature is selected, a input box will pop-up for user to modify the install directory of that feature
     * This function controls the content of 'featureDirectInput' which will rendered when changes
     * @event
     * @param {Object} selectedKeys the array that 'antd' treeSelect use to control the UI
     * @param {string} info  the information of the node that trigger this event
     */
    onSelectNode = (selectedKeys, info) => {
        let nodeKey = info.node.props.eventKey;
        this.setState({
            dirState: featureDirectory2StateMap.get(nodeKey)
        });
    };

    constructor(props) {
        super(props);
        /* A state to control the visibility of the input box for product install directory.
           When the onSelect product have option to change its install directory,
           this state will store the name of that state.
        */
        this.state = {
            dirState: null
        };
        // An object to control the status of checkboxes in the tree
        this.checkedKeys = {};
        this.checkedKeys.checked = [];
        // default root key ''
        initialMaps(featureDependencies, '', this.maps);
        // initiate the checkedKeys
        getInitialCheckedKeys(
            this.checkedKeys,
            this.maps,
            this.specialCheckingCaseHandler,
            this.props
        );

        // Control error message when non product selected and tried to go next
        this.featureContainerStyle = 'featureScrollableContainer';
        this.btnBarStyle = 'selectBtnBar';
        this.showErrorMsg = false;
    }

    render() {
        let featureDirectInput = null;

        if (this.state.dirState === undefined || this.state.dirState === null) {
            featureDirectInput = null;
        } else {
            featureDirectInput = (
                <div>
                    <p>Set the install directory of the selected feature:</p>
                    <Input
                        value={this.props.getOriginState(this.state.dirState)}
                        onChange={e => {
                            this.props.setOriginState(
                                this.state.dirState,
                                e.target.value
                            );
                        }}
                    />
                </div>
            );
        }
        return (
            <Form className="form">
                <Row type="flex" align="top">
                    <Col
                        span={4}
                        className={[
                            'colNav',
                            'linFeatureNavHeight'
                        ].join(' ')}
                    >
                        <p className="headlineTop">Steps</p>
                        <Navigation
                            setOriginState={this.props.setOriginState}
                            getOriginState={this.props.getOriginState}
                            steps={this.props.steps}
                            deepestStep={this.props.deepestStep}
                            useOs={this.props.useOs}
                            useMode={this.props.useMode}
                            useVersion={this.props.useVersion}
                        />
                    </Col>

                    <Col span={12} className="colContent">
                        <p className="headlineTop">
                            Feature Selection
                        </p>
                        <Tree
                            checkedKeys={this.checkedKeys}
                            className={this.featureContainerStyle}
                            checkable
                            checkStrictly
                            onCheck={(checkedKeys, e) =>
                                this.onCheck(this.checkedKeys, e)
                            }
                            onSelect={this.onSelectNode}
                        >
                            {createTree(
                                featureDependencies,
                                this.maps.disSelectableMap
                            )}
                        </Tree>
                        <SelectAllButtonBar
                            styleName={this.btnBarStyle}
                            showErrorMsg={this.showErrorMsg}
                            selectAll={() => {
                                selectAll(
                                    this.checkedKeys,
                                    this.maps,
                                    this.specialCheckingCaseHandler,
                                    this.props
                                );
                                // remove warning if exists
                                if (this.showErrorMsg) {
                                    this.removeErrorWarning();
                                }
                            }}
                            unselectAll={() => {
                                unselectAll(
                                    this.checkedKeys,
                                    this.maps,
                                    this.specialUnCheckingCaseHandler,
                                    this.props
                                );
                            }}
                        />
                        <br />
                        {featureDirectInput}
                    </Col>

                    <Divider
                        className="divider"
                        type="vertical"
                        orientation="right"
                    />
                    <Col span={7} className="colPics">
                        <p className="headlineTop">
                            Reference Pictures
                        </p>
                        <ReferencePicture
                            steps={this.props.steps}
                            useOs={this.props.useOs}
                            useVersion={this.props.useVersion}
                            useMode={this.props.useMode}
                            getOriginState={this.props.getOriginState}
                        />
                    </Col>
                </Row>
                <ButtonBar
                    useOs={this.props.useOs}
                    clickNext={this.nextStep}
                    clickBack={this.backStep}
                />
            </Form>
        );
    }
}

export default FeatureSelection;
