/**
 * @file The Component contains the input for registering as a service section
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

const PAGE_NUMBER = 8;

class RegisteringAsService extends React.Component {
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

    componentDidMount() {
        for (let formInfo of pageObjects[PAGE_NUMBER].formSections
            .registerService) {
            setFormFieldValue(formInfo.fieldName, formInfo.state, this.props);
        }
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

    render() {
        return (
            <Form className="form">
                <Row type="flex" align="top">
                    <Col
                        span={4}
                        className={[
                            'colNav',
                            'linRegServiceNavHeight'
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
                            Registering as a service
                        </p>
                        <Checkbox
                            onChange={e => {
                                this.props.setOriginState(
                                    'registerServices',
                                    e.target.checked
                                );
                            }}
                            checked={this.props.getOriginState(
                                'registerServices'
                            )}
                        >
                            Register MicroStrategy processes as a service so
                            that processes automatically start after system
                            startup
                        </Checkbox>
                        {this.generateFormContent(
                            pageObjects[PAGE_NUMBER].formSections
                                .registerService
                        )}
                        <div className="info-tag">
                            <img
                                className="info-icon"
                                alt="info icon"
                                src={require('../../../../../assets/Icons/info.svg')}
                            />
                            Only root user can register this process as a
                            service. If not a root user, please skip this step.
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

const RegisteringAsServiceSetting = Form.create({
    name: 'RegisteringAsService'
})(RegisteringAsService);

export default RegisteringAsServiceSetting;
