/**
 * @file The feature selection component. It returns a view that give user the opportunity to select the features they
 * want to install.
 * @author Haonan Yu(haoyu@microStrategy.com)
 */
import { Form, Divider, Row, Col, Tree, Checkbox } from 'antd';
import React from 'react';
//data & funcs
import featureDependencies from '../../../../../assets/MSTR2020/WINDOWS_CUSTOM/Win20CustomFeatureDependencies.json';
import { featureKey2StateMap } from '../../../../../assets/MSTR2020/WINDOWS_CUSTOM/Win20CustomMaps';
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

    /**
     * An Array to preset the initial checked keys for the checkboxes
     * @type {Array}
     */
    defaultCheckedKeys = null;

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
     * @param {Array} checkedKeys the array that 'antd' treeSelect use to control the UI
     */
    specialCheckingCaseHandler = (nodeKey, checkedKeys) => {
        // 1.1, 1.2, 1.7, 1.8 are required if any of 1.x checked
        if (nodeKey.match(/^1$|^1\..$/)) {
            if (!checkedKeys.checked.includes('1.1')) {
                // no corresponding state for this product
                checkedKeys.checked.push('1.1');
            }
            if (!checkedKeys.checked.includes('1.2')) {
                // no corresponding state for this product
                checkedKeys.checked.push('1.2');
            }
            if (!checkedKeys.checked.includes('1.7')) {
                // no corresponding state for this product
                checkedKeys.checked.push('1.7');
            }
            if (!checkedKeys.checked.includes('1.8')) {
                // no corresponding state for this product
                checkedKeys.checked.push('1.8');
            }
            this.maps.disSelectableMap.set('1.1', true);
            this.maps.disSelectableMap.set('1.2', true);
            this.maps.disSelectableMap.set('1.7', true);
            this.maps.disSelectableMap.set('1.8', true);
            //19.1 and 19.2 can't be checked alone
        } else if (nodeKey.match(/^19$|^19\..$/)) {
            if (!checkedKeys.checked.includes('19.1')) {
                checkedKeys.checked.push('19.1');
                this.props.setOriginState(
                    featureKey2StateMap.get('19.1'),
                    true
                );
            }
            if (!checkedKeys.checked.includes('19.2')) {
                checkedKeys.checked.push('19.2');
                this.props.setOriginState(
                    featureKey2StateMap.get('19.2'),
                    true
                );
            }

            this.maps.disSelectableMap.set('19.1', true);
            this.maps.disSelectableMap.set('19.2', true);
        } else if (nodeKey === '7.3') {
            if (checkedKeys.checked.includes('7.3.1')) {
                checkedKeys.checked.splice(
                    checkedKeys.checked.indexOf('7.3.1'),
                    1
                );
                this.props.setOriginState(
                    featureKey2StateMap.get('7.3.1'),
                    false
                );
            }
        }
        // 2, 7, 14 has internal dependencies, but no external dependency.
        this.maps.disSelectableMap.set('2', false);
        this.maps.disSelectableMap.set('7', false);
        this.maps.disSelectableMap.set('14', false);
    };

    /**
     * To handle the special cases for the installation on Windows Platform when do the unChecking action
     * @param {String} nodeKey the unique id of the TreeNode
     * @param {Object} checkedKeys the object that 'antd' treeSelect use to control the UI
     */
    specialUnCheckingCaseHandler = (nodeKey, checkedKeys) => {
        if (nodeKey === '1') {
            this.maps.disSelectableMap.set('1.1', false);
            this.maps.disSelectableMap.set('1.2', false);
            this.maps.disSelectableMap.set('1.7', false);
            this.maps.disSelectableMap.set('1.8', false);
        } else if (nodeKey === '19') {
            this.maps.disSelectableMap.set('19.1', false);
            this.maps.disSelectableMap.set('19.2', false);
        } else if (nodeKey === '7.3.1') {
            // Architect and Function Plugin Special
            if (!checkedKeys.checked.includes('7.3')) {
                checkedKeys.checked.push('7.3');
                this.props.setOriginState(featureKey2StateMap.get('7.3'), true);
            }
            if (!checkedKeys.checked.includes('7')) {
                // 7 has no corresponding state
                checkedKeys.checked.push('7');
            }
        }
    };

    /**
     * event triggered when checkbox is being checked or unchecked.
     * if the box is being checked, make all of its children and dependencies checked. The dependencies should be disSelectable unless the root node has been unchecked
     * if the box is being unchecked, uncheck all of its children. Set its dependencies selectable
     * @event
     * @param {Object} checkedKeys the object that 'antd' treeSelect use to control the UI
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

    constructor(props) {
        super(props);
        // An object to control the status of checkboxes in the tree
        this.checkedKeys = {};
        this.checkedKeys.checked = [];
        initialMaps(featureDependencies, '', this.maps); // default root key ''
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
        let downloadOpenSourceSoftware = this.props.getOriginState(
            'mySQLSelect'
        ) ? (
            <div>
                <br />
                <b>
                    Option1(Target Machine Internet Connection Required):
                </b>{' '}
                Check the box to agree to download the installation files on
                your target machine
                <br />
                <Checkbox
                    onChange={e => {
                        this.props.setOriginState(
                            'agreeToDownloadOpenSourceSoftware',
                            e.target.checked
                        );
                    }}
                    checked={this.props.getOriginState(
                        'agreeToDownloadOpenSourceSoftware'
                    )}
                >
                    Agree to download Open Source Software
                </Checkbox>
                <br />
                <br />
                <p>
                    <b>
                        Option2(Target Machine No Internet Connection Required):
                    </b>{' '}
                    Follow the instructions{' '}
                    <a
                        href="https://community.microstrategy.com/s/article/Download-Open-Source-Software-for-Windows-Installation"
                        target="_blank"
                    >
                        here
                    </a>{' '}
                    to manually download the installation files, and save them
                    to your 'C:\Users\[Username]\Downloads' folder.
                </p>
            </div>
        ) : null;

        return (
            <Form className="form">
                <Row type="flex" align="top">
                    <Col
                        span={4}
                        className={[
                            'colNav',
                            'winFeatureSelectNavHeight'
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
                        <div className="info-tag">
                            <img
                                className="info-icon"
                                alt="info icon"
                                src={require('../../../../../assets/Icons/info.svg')}
                            />
                            The Destination folder cannot be manipulated by
                            response file so far!
                        </div>
                        {downloadOpenSourceSoftware}
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
