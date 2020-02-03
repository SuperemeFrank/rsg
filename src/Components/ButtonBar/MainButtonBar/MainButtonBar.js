import React from 'react';
import 'antd/dist/antd.css';
import {  Button } from 'antd';


const buttonBar = props => (
    <div className="buttonBar">
        <div className="description">
            You are creating a configuration file for
            {props.useOs === 'windows' ? (
                <img
                    src={require('../../../assets/Icons/Windows.png')}
                    alt="Operating System "
                />
            ) : (
                <img
                    src={require('../../../assets/Icons/Linux.png')}
                    alt="Operating System "
                />
            )}
        </div>
        <div className="buttons">
            <Button
                className="buttonBack"
                type="default"
                onClick={props.clickBack}
            >
                Back
            </Button>
            <Button
                className="buttonNext"
                type="primary"
                onClick={props.clickNext}
            >
                Next
            </Button>
        </div>
    </div>
);

export default buttonBar
