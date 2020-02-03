/**
 * @file The Component contains the input for Narrowcast Server Configuration
 * @author Haonan Yu(haoyu@microStrategy.com)
 */

import React from 'react';
import { Form, Input, Checkbox, Row, Col, Divider } from 'antd';
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

const PAGE_NUMBER = 9;

class NarrowcastServerConfiguration extends React.Component {
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
     * To compare the password toward previous input password,
     * this is a function provided by 'antd' form validator
     * @param {Object} rule required parameter for the form validator
     * @param {String} value the current field value
     * @param {callback} callback function*
     */
    compareToNSPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('nsPassword')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
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

    componentDidMount() {
        for (let formInfo of pageObjects[PAGE_NUMBER].formSections
            .nsServerConfig) {
            setFormFieldValue(formInfo.fieldName, formInfo.state, this.props);
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        let nsSkipAccountSetting = this.props.getOriginState(
            'nsSkipAccountSetting'
        );
        let nsAccountSetting = null;

        if (!nsSkipAccountSetting) {
            nsAccountSetting = (
                <div>
                    {this.generateFormContent(
                        pageObjects[PAGE_NUMBER].formSections.nsServerConfig
                    )}
                    <Form.Item label="Confirmation:">
                        {getFieldDecorator('nsConfirmation', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Confirmation!',
                                    whitespace: true
                                },
                                {
                                    validator: this.compareToNSPassword
                                }
                            ]
                        })(<Input.Password />)}
                    </Form.Item>
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
                            'winNarrowcastNavHeight'
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
                            Narrowcast Server Configuration
                        </p>
                        <div>
                            <Checkbox
                                onChange={e => {
                                    this.props.setOriginState(
                                        'nsSkipAccountSetting',
                                        e.target.checked
                                    );
                                    // if unchecked, set all the nodes blank
                                    if (e.target.checked) {
                                        this.props.setOriginState(
                                            'nsLogin',
                                            ''
                                        );
                                        this.props.setOriginState(
                                            'nsDomain',
                                            ''
                                        );
                                        this.props.setOriginState(
                                            'nsPassword',
                                            ''
                                        );
                                    }
                                }}
                                checked={this.props.getOriginState(
                                    'nsSkipAccountSetting'
                                )}
                            >
                                Do not set the Narrowcast service account
                                (Default as System account)
                            </Checkbox>
                            {nsAccountSetting}
                        </div>
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

const NarrowcastServerSetting = Form.create({
    name: 'narrowcastServerConfiguration'
})(NarrowcastServerConfiguration);
export default NarrowcastServerSetting;
