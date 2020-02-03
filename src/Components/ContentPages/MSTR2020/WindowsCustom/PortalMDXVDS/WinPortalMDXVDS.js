/**
 * @file The Component combines the input for Portal and MDX Virtual Directory Setting
 * @author Haonan Yu(haoyu@microStrategy.com)
 */
import React from 'react';
import { Form, Input, Row, Col, Divider } from 'antd';
//data & funcs
import { setFormFieldValue } from '../../../../Utils/CommonFunc';
import pageObjects from '../../../../../assets/MSTR2020/WINDOWS_CUSTOM/Win20CustomPageObjects.json';
//components
import Navigation from '../../../../Navigation/Navigation';
import ReferencePicture from '../../../../ReferencePicture/ReferencePicture';
import ButtonBar from '../../../../ButtonBar/MainButtonBar/MainButtonBar';
//css
import 'antd/dist/antd.css';

import '../../../../Utils/CommonCss.css';

const PAGE_NUMBER = 6;

class PortalMDXVDS extends React.Component {
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
        for (let formInfo of pageObjects[PAGE_NUMBER].formSections.portalVDS) {
            setFormFieldValue(formInfo.fieldName, formInfo.state, this.props);
        }

        for (let formInfo of pageObjects[PAGE_NUMBER].formSections.mdxVDS) {
            setFormFieldValue(formInfo.fieldName, formInfo.state, this.props);
        }
    }

    render() {
        //Blog for Subscription Portal Setting
        const portalSetting = this.generateFormContent(
            pageObjects[PAGE_NUMBER].formSections.portalVDS
        );

        //Blog for MDX Cube Provider Setting
        const mdxSetting = this.generateFormContent(
            pageObjects[PAGE_NUMBER].formSections.mdxVDS
        );

        return (
            // The blog is controlled by whether these product selected
            <Form className="form">
                <Row type="flex" align="top">
                    <Col
                        span={4}
                        className={[
                            'colNav',
                            'winPortalMDXNavHeight'
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
                            Subscription Portal & MDX Virtual Directory
                            Configuration
                        </p>
                        <div>
                            {this.props.getOriginState(
                                'subscriptionPortalSelect'
                            )
                                ? portalSetting
                                : null}
                            {this.props.getOriginState('mdxCubeProviderSelect')
                                ? mdxSetting
                                : null}
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

const PortalMDXVDSSetting = Form.create({
    name: 'portalMDXVDS'
})(PortalMDXVDS);
export default PortalMDXVDSSetting;
