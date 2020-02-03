import React from 'react';
import 'antd/dist/antd.css';
import { Select, Button, Checkbox } from 'antd';
import classes from './LicenseAgreePage.module.css';
import LicenseAgreementContent from '../../../assets/LicenseAgreementContent';

const { Option } = Select;

const licenseAgreePage = props => {
    let modeSelection =
        props.getOriginState('operateSystem') === 'windows' ? (
            <div
                className={[
                    'inputBox',
                    'licenseModeSelector'
                ].join(' ')}
            >
                Choose MicroStrategy Installation Mode:
                <br />
                <Select
                    style={{ width: 400 }}
                    defaultValue={props.getOriginState('mode')}
                    onChange={value => {
                        props.setOriginState('mode', value);
                    }}
                >
                    <Option value="custom">Custom</Option>
                    <Option value="Express">Express</Option>
                </Select>
            </div>
        ) : null;

    let res = (
        <div>
            <div className={classes.licensePage}>
                <div className={classes.licenseContainer}>
                    <LicenseAgreementContent />
                </div>
                <Checkbox
                    onChange={e => {
                        props.setOriginState('agreeLicense', e.target.checked);
                    }}
                    checked={props.getOriginState('agreeLicense')}
                >
                    I've read and agree with all the statement above
                </Checkbox>
                <div className={classes.inputBoxesContainer}>
                    <div className={classes.operationSys}>
                        Choose Destined Operation System:
                        <br />
                        <Select
                            style={{ width: 400 }}
                            defaultValue={props.getOriginState('operateSystem')}
                            onChange={value => {
                                props.setOriginState('operateSystem', value);
                            }}
                        >
                            <Option value="windows">Windows</Option>
                            <Option value="linux">Linux</Option>
                        </Select>
                    </div>
                    <div
                        className={
                            props.getOriginState('operateSystem') === 'linux'
                                ? [
                                      classes.licenseVersionBotMargin,
                                      'inputBox'
                                  ].join(' ')
                                : 'inputBox'
                        }
                    >
                        {' '}
                        Choose MicroStrategy Platform
                        Version:
                        <br />
                        <Select
                            style={{ width: 400 }}
                            defaultValue={props.getOriginState(
                                'installVersion'
                            )}
                            onChange={value => {
                                props.setOriginState('installVersion', value);
                            }}
                        >
                            {/* <Option value="2019">2019</Option> */}
                            <Option value="2020">2020</Option>
                        </Select>
                    </div>
                    {modeSelection}
                </div>
            </div>
            <div className="buttonBar">
                <div className="buttons">
                    <Button
                        className="buttonNext"
                        type="primary"
                        onClick={() =>
                            props.setOriginState('initialPage', false)
                        }
                        disabled={!props.getOriginState('agreeLicense')}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );

    return res;
};

export default licenseAgreePage;
