/**
 * @file Component contains the input UI for Identity Configuration
 * @author Haonan Yu(haoyu@microStrategy.com)
 */
import React from 'react';
import { Divider, Form, Input, Checkbox, Row, Col } from 'antd';
//data & funcs
import { setFormFieldValue } from '../../../../Utils/CommonFunc';
import pageObjects from '../../../../../assets/MSTR2020/WINDOWS_CUSTOM/Win20CustomPageObjects.json';
//components
import Navigation from '../../../../Navigation/Navigation';
import ButtonBar from '../../../../ButtonBar/MainButtonBar/MainButtonBar';
import ReferencePicture from '../../../../ReferencePicture/ReferencePicture';
//css

import 'antd/dist/antd.css';
import '../../../../Utils/CommonCss.css';

const PAGE_NUMBER = 3;

class IdentityConfiguration extends React.Component {
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

    componentDidMount() {
        for (let formInfo of pageObjects[PAGE_NUMBER].formSections
            .sslCertificate) {
            setFormFieldValue(formInfo.fieldName, formInfo.state, this.props);
        }

        for (let formInfo of pageObjects[PAGE_NUMBER].formSections.smptServer) {
            setFormFieldValue(formInfo.fieldName, formInfo.state, this.props);
        }

        for (let formInfo of pageObjects[PAGE_NUMBER].formSections
            .authenticate) {
            setFormFieldValue(formInfo.fieldName, formInfo.state, this.props);
        }

        for (let formInfo of pageObjects[PAGE_NUMBER].formSections.fqdn) {
            setFormFieldValue(formInfo.fieldName, formInfo.state, this.props);
        }
    }

    render() {
        return (
            <Form className="form">
                <Row type="flex" align="top">
                    <Col
                        span={4}
                        className={[
                            'colNav',
                            'winIdentityNavHeight'
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
                            Identity Configuration
                        </p>
                        <p className="headlineSub">
                            SSL Certificate
                        </p>
                        {this.generateFormContent(
                            pageObjects[PAGE_NUMBER].formSections.sslCertificate
                        )}

                        <p className="headlineSub">
                            Email (SMTP Server)
                        </p>
                        {this.generateFormContent(
                            pageObjects[PAGE_NUMBER].formSections.smptServer
                        )}
                        <Checkbox
                            onChange={e => {
                                this.props.setOriginState(
                                    'smtpUseSSL',
                                    e.target.checked
                                );
                            }}
                            checked={this.props.getOriginState('smtpUseSSL')}
                        >
                            Use SSL
                        </Checkbox>
                        <p className="headlineSub">
                            SMTP Server Authentication [Optional]
                        </p>
                        {this.generateFormContent(
                            pageObjects[PAGE_NUMBER].formSections.authenticate
                        )}
                        <p className="headlineSub">
                            Fully Qualified Domain Name
                        </p>

                        {this.generateFormContent(
                            pageObjects[PAGE_NUMBER].formSections.fqdn
                        )}
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

const IdentitySetting = Form.create({
    name: 'identityConfiguration'
})(IdentityConfiguration);
export default IdentitySetting;
