/**
 * @file The Component contains the input for Telemetry Configuration
 * @author Haonan Yu(haoyu@microStrategy.com)
 */
import React from 'react';
import { Form, Input, Icon, Button, Checkbox, Row, Col, Divider } from 'antd';
//data & funcs
import { setFormFieldValue } from '../../../../Utils/CommonFunc';
import pageObjects from '../../../../../assets/MSTR2020/WINDOWS_CUSTOM/Win20CustomPageObjects.json';
//components
import ButtonBar from '../../../../ButtonBar/MainButtonBar/MainButtonBar';
import Navigation from '../../../../Navigation/Navigation';
import ReferencePicture from '../../../../ReferencePicture/ReferencePicture';
//css

import 'antd/dist/antd.css';
import '../../../../Utils/CommonCss.css';

const PAGE_NUMBER = 4;

class TelemetryConfiguration extends React.Component {
    constructor(props) {
        super(props);
        this.uuid = 0;
    }
    nextStep = () => {
        if (this.props.getOriginState('telemetryServerCluster')) {
            this.props.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    const { keys, domains } = values;
                    this.props.setOriginState(
                        'telemetryServerRemoteNodes',
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

    getInitialKeys() {
        const telemetryServerRemoteNodes = this.props.getOriginState(
            'telemetryServerRemoteNodes'
        );
        let nextKeys = [];
        for (let i = 0; i < telemetryServerRemoteNodes.length; i++) {
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
        const telemetryServerRemoteNodes = this.props.getOriginState(
            'telemetryServerRemoteNodes'
        );
        let domains = [];
        for (let i = 0; i < telemetryServerRemoteNodes.length; i++) {
            domains = domains.concat(telemetryServerRemoteNodes[i]);
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

        if (this.props.getOriginState('telemetryServerCluster')) {
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
                        className={[
                            'colNav',
                            'winTeleNavHeight'
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
                            Telemetry Configuration
                        </p>
                        <Checkbox
                            onChange={e => {
                                this.props.setOriginState(
                                    'telemetryServerCluster',
                                    e.target.checked
                                );
                                // if unchecked, set all the nodes blank
                                if (!e.target.checked) {
                                    this.props.setOriginState(
                                        'telemetryServerLocalNode',
                                        ''
                                    );

                                    this.props.setOriginState(
                                        'telemetryServerRemoteNodes',
                                        ['', '']
                                    );
                                }
                            }}
                            checked={this.props.getOriginState(
                                'telemetryServerCluster'
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
const TelemetryConfigurationSetting = Form.create({
    name: 'telemetryConfiguration'
})(TelemetryConfiguration);

export default TelemetryConfigurationSetting;
