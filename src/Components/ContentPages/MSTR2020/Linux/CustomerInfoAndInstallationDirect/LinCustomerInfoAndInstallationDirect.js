/**
 * @file The Component combines the input for Customer information and Installation Directory together
 * @author Haonan Yu(haoyu@microStrategy.com)
 */

import React from 'react';
import { Form, Input, Button, Row, Col, Divider } from 'antd';
//components
import Navigation from '../../../../Navigation/Navigation';
import ReferencePicture from '../../../../ReferencePicture/ReferencePicture';
//data & funcs
import { setFormFieldValue } from '../../../../Utils/CommonFunc';
import pageObjects from '../../../../../assets/MSTR2020/LINUX/Lin20PageObjects.json';
//css
import 'antd/dist/antd.css';
import '../../../../Utils/CommonCss.css';

const PAGE_NUMBER = 0;
class CustomerInfoAndInstallationDirect extends React.Component {
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
                            onChange={e => this.onChange(e, section)}
                        />
                    ) : (
                        <Input onChange={e => this.onChange(e, section)} />
                    )
                )}
            </Form.Item>
        ));
    };

    onChange = (e, section) => {
        this.props.setOriginState(section.state, e.target.value);

        /*
        This is only for 'suiteInstallDirectory' in Customer and Installation Page so far,
        it will affect the default value of 'xxxDirectory' states in Feature Selection Page
        */
        if (section.sideEffects !== undefined) {
            for (let i = 0; i < section.sideEffects.length; i++) {
                this.props.setOriginState(
                    section.sideEffects[i].state,
                    e.target.value + section.sideEffects[i].addValue
                );
            }
        }
    };

    /**
     * Change the state of initialPage to go back to License Agreement page
     */
    backToLicensePage = () => {
        this.props.setBasicState('initialPage', true);
    };

    componentDidMount() {
        for (let formInfo of pageObjects[PAGE_NUMBER].formSections
            .customerInfos) {
            setFormFieldValue(formInfo.fieldName, formInfo.state, this.props);
        }

        for (let formInfo of pageObjects[PAGE_NUMBER].formSections.installDir) {
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
                            'LinCustomerNavHeight'
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
                            Customer Information
                        </p>
                        {this.generateFormContent(
                            pageObjects[PAGE_NUMBER].formSections.customerInfos
                        )}
                        <p className="headlineSub">
                            Install Destination
                        </p>
                        {this.generateFormContent(
                            pageObjects[PAGE_NUMBER].formSections.installDir
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
                <div className="buttonBar">
                    <div className="description">
                        You are creating a configuration file for
                        <img
                            src={require('../../../../../assets/Icons/Linux.png')}
                            alt="Operating System"
                        />
                    </div>
                    <div className="buttons">
                        <Button
                            className="buttonBack"
                            type="default"
                            onClick={this.backToLicensePage}
                        >
                            Back
                        </Button>
                        <Button
                            className="buttonNext"
                            type="primary"
                            onClick={this.nextStep}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </Form>
        );
    }
}

const CustomerInfo = Form.create({ name: 'customerInfoAndInstallationDirect' })(
    CustomerInfoAndInstallationDirect
);

export default CustomerInfo;
