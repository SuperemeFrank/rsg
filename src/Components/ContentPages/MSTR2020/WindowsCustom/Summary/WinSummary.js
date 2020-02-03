/**
 * @file The Component contains the whole Configuration information for user to review their choices
 * @author Haonan Yu(haoyu@microStrategy.com)
 */
import React from 'react';
import { Button, Checkbox, Row, Col, Divider, Form, Icon } from 'antd';
//components
import Navigation from '../../../../Navigation/Navigation';
import ReferencePicture from '../../../../ReferencePicture/ReferencePicture';
//funcs & data
import {
    generateWinCustomFile,
    generateWinExpressFile
} from '../../../../FileGenerator/FileGenerator';
import { generateSummary } from '../../../../Utils/CommonFunc';
import customSummaryInfo from '../../../../../assets/MSTR2020/WINDOWS_CUSTOM/Win20CustomSummaryStructure.json';
import expressSummaryInfo from '../../../../../assets/MSTR2020/WINDOWS_EXPRESS/Win20ExpressSummaryStructure.json';

//css
import 'antd/dist/antd.css';

import '../../../../Utils/CommonCss.css';

class Summary extends React.Component {
    backStep = () => {
        this.props.backStep();
    };

    /**
     * To generate the Option.txt and download it locally
     */
    downloadTxtFile = () => {
        const element = document.createElement('a');
        let res = null;
        if (this.props.useMode === 'custom') {
            // custom install
            res = generateWinCustomFile(this.props);
        } else {
            res = generateWinExpressFile(this.props);
        }
        const file = new Blob([res], {
            type: 'text/plain'
        });
        element.href = URL.createObjectURL(file);
        element.download = this.props.useMode === 'custom' ? 'Response_Custom.ini' : 'Response_Express.ini';
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    render() {
        return (
            <Form className="form">
                <Row type="flex" align="top">
                    <Col
                        span={4}
                        className={[
                            'colNav',
                            'winSummaryNavHeight'
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
                        <p className="headlineTop">Summary</p>
                        <div>
                            <div className="summaryContainer">
                                {this.props.useMode === 'custom'
                                    ? generateSummary(
                                          customSummaryInfo,
                                          this.props
                                      )
                                    : generateSummary(
                                          expressSummaryInfo,
                                          this.props
                                      )}
                            </div>
                            <Checkbox
                                onChange={e => {
                                    this.props.setOriginState(
                                        'forceReboot',
                                        e.target.checked
                                    );
                                }}
                                checked={this.props.getOriginState(
                                    'forceReboot'
                                )}
                            >
                                Automatically restart this computer if needed
                                during installation
                            </Checkbox>
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
                <div className="buttonBar">
                    <div className="description">
                        You are creating a configuration file for
                        <img
                            src={require('../../../../../assets/Icons/Windows.png')}
                            alt="Operating System"
                        />
                    </div>
                    <div className="buttons">
                        <Button
                            className="buttonBack"
                            type="default"
                            onClick={this.backStep}
                        >
                            Back
                        </Button>
                        <Button
                            className="buttonNext"
                            type="primary"
                            onClick={this.downloadTxtFile}
                        >
                            <Icon type="vertical-align-bottom" />
                            Download File
                        </Button>
                    </div>
                </div>
            </Form>
        );
    }
}

export default Summary;
