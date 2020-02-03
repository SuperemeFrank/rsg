/**
 * @file The Component contains the whole Configuration information for user to review their choices
 * @author Haonan Yu(haoyu@microStrategy.com)
 */
import React from 'react';
import { Button, Row, Col, Icon, Form } from 'antd';

//data & funcs
import {generateLinuxFile} from '../../../../FileGenerator/FileGenerator';
import summaryInfo from '../../../../../assets/MSTR2020/LINUX//Lin20SummaryStructure.json';
import { generateSummary } from '../../../../Utils/CommonFunc';
//components
import Navigation from '../../../../Navigation/Navigation';
//css

import 'antd/dist/antd.css';
import '../../../../Utils/CommonCss.css';

class Summary extends React.Component {
    backStep = () => {
        this.props.backStep();
    };

    /**
     * check if a feature has already been added to the checked list
     * @param {String} feature the state name of that feature
     * @return {boolean} true if the feature has been selected, false otherwise
     */
    checkFeatureSelected = feature => {
        if (this.props.getOriginState(feature)) {
            return 'true';
        } else {
            return 'false';
        }
    };

    /**
     * To generate the Option.txt and download it locally
     */
    downloadTxtFile = () => {
        const element = document.createElement('a');
        let res = generateLinuxFile(this.props);
        const file = new Blob([res], {
            type: 'text/plain'
        });
        element.href = URL.createObjectURL(file);
        element.download = 'Option.txt';
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
                            'linSummaryNavHeight'
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

                    <Col span={18} className="colContent">
                        <p className="headlineTop">Summary</p>
                        <div className="summaryContainer">
                            {generateSummary(summaryInfo, this.props)}
                        </div>
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
