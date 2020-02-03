/**
 * @file The Component combines the input for Identity Manager Configuration
 * @author Haonan Yu(haoyu@microStrategy.com)
 */

import React from 'react';
import 'antd/dist/antd.css';

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

const PAGE_NUMBER = 5;

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
     *  when the checkbox checked, copy the value of these three state from another three states
     *  @event
     */
    checkboxChange = e => {
        this.props.setOriginState(
            'identityManagerUseSameDBSetting',
            e.target.checked
        );

        if (e.target.checked) {
            this.props.setOriginState(
                'identityManagerDBHost',
                this.props.getOriginState('identityServerServerDBHost')
            );
            this.props.setOriginState(
                'identityManagerDBPort',
                this.props.getOriginState('identityServerServerDBPort')
            );
            this.props.setOriginState(
                'identityManagerDBUser',
                this.props.getOriginState('identityServerServerDBUser')
            );

            this.props.setOriginState(
                'identityManagerDBPassword',
                this.props.getOriginState('identityServerServerDBPassword')
            );
        }
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

    /**
     * Set local fields value from the high-level state
     */
    componentDidMount() {
        for (let formInfo of pageObjects[PAGE_NUMBER].formSections
            .apacheHttpServer) {
            setFormFieldValue(formInfo.fieldName, formInfo.state, this.props);
        }

        for (let formInfo of pageObjects[PAGE_NUMBER].formSections
            .databaseConnection) {
            setFormFieldValue(formInfo.fieldName, formInfo.state, this.props);
        }
        for (let formInfo of pageObjects[PAGE_NUMBER].formSections.dbInstance) {
            setFormFieldValue(formInfo.fieldName, formInfo.state, this.props);
        }
    }

    render() {
        let managerDBConfig = null;
        if (!this.props.getOriginState('identityManagerUseSameDBSetting')) {
            managerDBConfig = this.generateFormContent(
                pageObjects[PAGE_NUMBER].formSections.databaseConnection
            );
        }
        return (
            <Form className="form">
                <Row type="flex" align="top">
                    <Col
                        span={4}
                        className={
                            this.props.getOriginState(
                                'identityManagerUseSameDBSetting'
                            )
                                ? [
                                      'colNav',
                                      'linIdentityManagerNavHeight2'
                                  ].join(' ')
                                : [
                                      'colNav',
                                      'linIdentityManagerNavHeight1'
                                  ].join(' ')
                        }
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
                            Apache HTTP Server Settings
                        </p>
                        {this.generateFormContent(
                            pageObjects[PAGE_NUMBER].formSections
                                .apacheHttpServer
                        )}

                        <p className="headlineSub">
                            Database Connection
                        </p>
                        <Checkbox
                            onChange={e => this.checkboxChange(e)}
                            checked={this.props.getOriginState(
                                'identityManagerUseSameDBSetting'
                            )}
                        >
                            Use the same connection as MicroStrategy Identity
                            Server
                        </Checkbox>
                        {managerDBConfig}
                        {this.generateFormContent(
                            pageObjects[PAGE_NUMBER].formSections.dbInstance
                        )}
                        <Checkbox
                            onChange={e => {
                                this.props.setOriginState(
                                    'identityManagerOverwriteDb',
                                    e.target.checked
                                );
                            }}
                            checked={this.props.getOriginState(
                                'identityManagerOverwriteDb'
                            )}
                        >
                            Overwrite the current database if exists.
                        </Checkbox>
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
