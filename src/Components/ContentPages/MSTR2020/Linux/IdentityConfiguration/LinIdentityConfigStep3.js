/**
 * @file The Component contains the input for Identity Configuration Step 3
 * @author Haonan Yu(haoyu@microStrategy.com)
 */

import React from 'react';
import { Divider, Form, Input, Row, Col, Checkbox } from 'antd';
//data & funcs
import { setFormFieldValue } from '../../../../Utils/CommonFunc';
import pageObjects from '../../../../../assets/MSTR2020/LINUX/Lin20PageObjects.json';
//components
import Navigation from '../../../../Navigation/Navigation';
import ButtonBar from '../../../../ButtonBar/MainButtonBar/MainButtonBar';
import ReferencePicture from '../../../../ReferencePicture/ReferencePicture';
//css
import 'antd/dist/antd.css';
import '../../../../Utils/CommonCss.css';

const PAGE_NUMBER = 4;

class IdentityConfigStep3 extends React.Component {
    nextStep = () => {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.nextStep();
            }
        });
    };

    backStep = () => {
        this.props.backStep();
    };

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

    checkboxChange = e => {
        this.props.setOriginState(
            'identityServerGatewayUseSameCert',
            e.target.checked
        );
        if (e.target.checked) {
            this.props.setOriginState(
                'identityServerGatewaySslCert',
                this.props.getOriginState('identityServerServerSslCert')
            );
            this.props.setOriginState(
                'identityServerGatewaySslKey',
                this.props.getOriginState('identityServerServerSslKey')
            );
            this.props.setOriginState(
                'identityServerGatewayCaCert',
                this.props.getOriginState('identityServerServerCaCert')
            );
        }
    };

    componentDidMount() {
        for (let formInfo of pageObjects[PAGE_NUMBER].formSections
            .gatewayPort) {
            setFormFieldValue(formInfo.fieldName, formInfo.state, this.props);
        }

        for (let formInfo of pageObjects[PAGE_NUMBER].formSections
            .gatewayCertificate) {
            setFormFieldValue(formInfo.fieldName, formInfo.state, this.props);
        }

        // If 'identityServerGatewayUseSameCert' is true, then copy the value from Server to Gateway
        if (this.props.getOriginState('identityServerGatewayUseSameCert')) {
            this.props.setOriginState(
                'identityServerGatewaySslCert',
                this.props.getOriginState('identityServerServerSslCert')
            );
            this.props.setOriginState(
                'identityServerGatewaySslKey',
                this.props.getOriginState('identityServerServerSslKey')
            );
            this.props.setOriginState(
                'identityServerGatewayCaCert',
                this.props.getOriginState('identityServerServerCaCert')
            );
        }
    }

    render() {
        let diffServer = null;
        if (!this.props.getOriginState('identityServerGatewayUseSameCert')) {
            diffServer = this.generateFormContent(
                pageObjects[PAGE_NUMBER].formSections.gatewayCertificate
            );
        }

        return (
            <Form className="form">
                <Row type="flex" align="top">
                    <Col
                        span={4}
                        className={[
                            'colNav',
                            'linIdentity3NavHeight'
                        ].join(' ')}
                    >
                        <p className="headlineTop">Steps</p>
                        <Navigation
                            validateForm={
                                this.props.form.validateFieldsAndScroll
                            }
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
                            Agent Gateway Configuration
                        </p>
                        {this.generateFormContent(
                            pageObjects[PAGE_NUMBER].formSections.gatewayPort
                        )}
                        <Checkbox
                            onChange={this.checkboxChange}
                            checked={this.props.getOriginState(
                                'identityServerGatewayUseSameCert'
                            )}
                        >
                            Use the same SSL certificate as MicroStrategy
                            Identity Server
                        </Checkbox>
                        {diffServer}
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

const IdentityConfigurationStep3 = Form.create({
    name: 'identityConfigStep3'
})(IdentityConfigStep3);

export default IdentityConfigurationStep3;
