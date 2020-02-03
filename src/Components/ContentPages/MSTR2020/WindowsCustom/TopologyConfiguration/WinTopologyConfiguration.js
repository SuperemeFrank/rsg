/**
 * @file The Component contains the input for Topology Configuration
 * @author Haonan Yu(haoyu@microStrategy.com)
 */
import React from 'react';
import { Form, Input, Icon, Button, Checkbox, Row, Col, Divider } from 'antd';
//components
import Navigation from '../../../../Navigation/Navigation';
import ButtonBar from '../../../../ButtonBar/MainButtonBar/MainButtonBar';
import ReferencePicture from '../../../../ReferencePicture/ReferencePicture';
//css
import 'antd/dist/antd.css';

import '../../../../Utils/CommonCss.css';

class TopologyConfiguration extends React.Component {
    constructor(props) {
        super(props);
        this.uuid = 0;
    }

    nextStep = () => {
        if (this.props.getOriginState('multipleMachineEnvironment')) {
            this.props.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    const { keys, domains } = values;
                    this.props.setOriginState(
                        'serversInCluster',
                        keys.map(key => domains[key])
                    );
                    this.props.nextStep();
                }
            });
        } else {
            this.props.nextStep();
        }
    };

    backStep = () => {
        this.props.backStep();
    };

    onChange = e => {
        this.props.setOriginState('multipleMachineEnvironment', e.target.value);
    };

    /**
     * Remove one field from the form
     * @param {number} k the key ID of the field you want to remove
     */
    remove = k => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys');
        if (keys.length === 1) {
            return;
        }
        form.setFieldsValue({
            keys: keys.filter(key => key !== k)
        });
    };

    /**
     * Add one field to the form
     */
    add = () => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(this.uuid++);
        form.setFieldsValue({
            keys: nextKeys
        });
    };

    /**
     * Get the initial keys from a state, and return the keys
     * @return the initial keys
     */
    getInitialKeys() {
        const serversInCluster = this.props.getOriginState('serversInCluster');
        let nextKeys = [];
        for (let i = 0; i < serversInCluster.length; i++) {
            nextKeys = nextKeys.concat(this.uuid);
            this.uuid = this.uuid + 1;
        }
        return nextKeys;
    }

    componentDidMount() {
        const { setFieldsValue } = this.props.form;
        const serversInCluster = this.props.getOriginState('serversInCluster');
        let domains = [];
        for (let i = 0; i < serversInCluster.length; i++) {
            domains = domains.concat(serversInCluster[i]);
        }

        setFieldsValue({
            domains
        });
    }

    render() {
        let clusterForm = null;
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const initKeys = getFieldValue('keys');
        const InitialKeys = initKeys || this.getInitialKeys();
        getFieldDecorator('keys', { initialValue: InitialKeys });
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => (
            <Form.Item
                label={
                    index === 0
                        ? 'Enter the fully qualified domain name for one Intelligence machine:'
                        : ''
                }
                required={false}
                key={k}
                className="form-input-box"
            >
                {getFieldDecorator(`domains[${k}]`, {
                    rules: [
                        {
                            required: true,
                            whitespace: true,
                            message:
                                'Please input domain name or IP address.',
                            pattern:
                                '^((\\*)|((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|((\\*\\.)?([a-zA-Z0-9-]+\\.){0,5}[a-zA-Z0-9-][a-zA-Z0-9-]+\\.[a-zA-Z]{2,63}?))$'
                        }
                    ]
                })(<Input style={{ width: '60%', marginRight: 8 }} />)}
                {keys.length > 1 ? (
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        onClick={() => this.remove(k)}
                    />
                ) : null}
            </Form.Item>
        ));
        if (this.props.getOriginState('multipleMachineEnvironment')) {
            clusterForm = (
                <div>
                    {formItems}
                    <Form.Item>
                        <Button
                            type="dashed"
                            onClick={this.add}
                            style={{ width: '60%' }}
                        >
                            <Icon type="plus" /> Add field
                        </Button>
                    </Form.Item>
                    <div className="info-tag">
                        <img
                            className="info-icon"
                            alt="info icon"
                            src={require('../../../../../assets/Icons/info.svg')}
                        />
                        The number of the cluster nodes must be odd.
                    </div>
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
                            'winTopoNavHeight'
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
                            Topology Configuration
                        </p>
                        <Checkbox
                            onChange={e => {
                                this.props.setOriginState(
                                    'multipleMachineEnvironment',
                                    e.target.checked
                                );
                                // if unchecked, set all the nodes blank
                                if (!e.target.checked) {
                                    this.props.setOriginState(
                                        'serversInCluster',
                                        ['']
                                    );
                                }
                            }}
                            checked={this.props.getOriginState(
                                'multipleMachineEnvironment'
                            )}
                        >
                            Enable Multiple Machine Environment
                        </Checkbox>
                        {clusterForm}
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
const TopologyConfig = Form.create({
    name: 'topologyConfiguration'
})(TopologyConfiguration);

export default TopologyConfig;
