/**
 * @file The Component contains the input for Telemetry Configuration
 * @author Haonan Yu(haoyu@microStrategy.com)
 */
import React from 'react';
import { Divider, Form, Input, Row, Col, Checkbox, Icon, Button } from 'antd';
//data & funcs
import pageObjects from '../../../../../assets/MSTR2020/LINUX/Lin20PageObjects.json';
import { setFormFieldValue } from '../../../../Utils/CommonFunc';
//components
import Navigation from '../../../../Navigation/Navigation';
import ButtonBar from '../../../../ButtonBar/MainButtonBar/MainButtonBar';
import ReferencePicture from '../../../../ReferencePicture/ReferencePicture';
//css

import 'antd/dist/antd.css';
import '../../../../Utils/CommonCss.css';

const PAGE_NUMBER = 6;

class TelemetryConfiguration extends React.Component {
    constructor(props) {
        super(props);
        this.uuid = 0;
    }
    nextStep = () => {
        if (this.props.getOriginState('telemetryServerClusterEnable')) {
            this.props.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    const { keys, domains } = values;
                    this.props.setOriginState(
                        'telemetryServerClusterRemotenodes',
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
     *Get the value of a state and set the value to a specific field in the current form page
     * @param {string} fieldName the field you want to set
     * @param {string} stateName the state that you want to get value from and put the value to the field
     */
    setFormFieldValue = (fieldName, stateName) => {
        const { setFieldsValue, getFieldValue } = this.props.form;
        if (getFieldValue(fieldName) !== this.props.getOriginState(stateName)) {
            setFieldsValue({
                [fieldName]: this.props.getOriginState(stateName)
            });
        }
    };

    /**
     * Get the initial keys from a state, and return the keys
     * @return the initial keys
     */
    getInitialKeys() {
        const telemetryServerClusterRemotenodes = this.props.getOriginState(
            'telemetryServerClusterRemotenodes'
        );
        let nextKeys = [];
        for (let i = 0; i < telemetryServerClusterRemotenodes.length; i++) {
            nextKeys = nextKeys.concat(this.uuid);
            this.uuid = this.uuid + 1;
        }
        return nextKeys;
    }

    /**
     *
     * Generate a list of form item based on given data
     * @param {Array} formInfo an array that contains necessary content for each form item
     * @return {Array} an array of form items that contain input boxes
     */
    generateFormContent = formInfo => {
        const { getFieldDecorator } = this.props.form;
        return formInfo.map((section, index) => (
            <Form.Item
                label={section.label}
                key={index}
                className={section.fieldName}
            >
                {getFieldDecorator(section.fieldName, {
                    rules: [
                        {
                            required: section.rules[0].required,
                            message: section.rules[0].message,
                            whitespace: section.rules[0].whitespace,
                            pattern: section.rules[0].pattern
                        }
                    ]
                })(
                    section.passwd ? (
                        <Input.Password
                            onChange={e => {
                                this.props.setOriginState(
                                    section.state,
                                    e.target.value
                                );
                            }}
                        />
                    ) : (
                        <Input
                            onChange={e => {
                                this.props.setOriginState(
                                    section.state,
                                    e.target.value
                                );
                            }}
                        />
                    )
                )}
            </Form.Item>
        ));
    };

    componentDidMount() {
        const { setFieldsValue } = this.props.form;
        const telemetryServerClusterRemotenodes = this.props.getOriginState(
            'telemetryServerClusterRemotenodes'
        );
        let domains = [];
        for (let i = 0; i < telemetryServerClusterRemotenodes.length; i++) {
            domains = domains.concat(telemetryServerClusterRemotenodes[i]);
        }
        setFieldsValue({
            domains
        });

        for (let formInfo of pageObjects[PAGE_NUMBER].formSections.localNode) {
            setFormFieldValue(formInfo.fieldName, formInfo.state, this.props);
        }
    }

    render() {
        let clusterForm = null;
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const initKeys = getFieldValue('keys');
        const InitialKeys = initKeys || this.getInitialKeys();
        getFieldDecorator('keys', { initialValue: InitialKeys });
        const keys = getFieldValue('keys');
        const remoteServers = keys.map((k, index) => (
            <Form.Item
                label={
                    index === 0
                        ? 'Enter the Fully Qualified Domain Name of all the remote Telemetry Servers'
                        : ''
                }
                required={false}
                key={k}
            >
                {getFieldDecorator(`domains[${k}]`, {
                    rules: [
                        {
                            required: true,
                            whitespace: true,
                            message: 'Please input domain name or IP address.',
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

        if (this.props.getOriginState('telemetryServerClusterEnable')) {
            clusterForm = (
                <Form>
                    {this.generateFormContent(
                        pageObjects[PAGE_NUMBER].formSections.localNode
                    )}
                    <Form.Item>
                        {remoteServers}
                        <Button
                            type="dashed"
                            onClick={this.add}
                            style={{ width: '60%' }}
                        >
                            <Icon type="plus" /> Add Remote Server
                        </Button>
                    </Form.Item>
                </Form>
            );
        }

        return (
            <Form className="form">
                <Row type="flex" align="top">
                    <Col
                        span={4}
                        className={['colNav', 'linTeleNavHeight'].join(' ')}
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
                        <p className="headlineTop">Telemetry Configuration</p>
                        <Checkbox
                            onChange={e => {
                                this.props.setOriginState(
                                    'telemetryServerClusterEnable',
                                    e.target.checked
                                );

                                if (!e.target.checked) {
                                    this.props.setOriginState(
                                        'telemetryServerClusterLocalnode',
                                        ''
                                    );
                                    this.props.setOriginState(
                                        'telemetryServerClusterRemotenodes',
                                        ['', '']
                                    );
                                }
                            }}
                            checked={this.props.getOriginState(
                                'telemetryServerClusterEnable'
                            )}
                        >
                            Create a cluster of three or more Telemetry Servers
                        </Checkbox>
                        {clusterForm}
                    </Col>

                    <Divider
                        className="divider"
                        type="vertical"
                        orientation="right"
                    />
                    <Col span={7} className="colPics">
                        <p className="headlineTop">Reference Pictures</p>
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
const TelemetryConfigurationSetting = Form.create({
    name: 'telemetryConfiguration'
})(TelemetryConfiguration);

export default TelemetryConfigurationSetting;
