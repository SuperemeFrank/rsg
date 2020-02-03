/**
 * @file Describe the file
 * @author Haonan Yu(haoyu@microStrategy.com)
 */

import React, { Component } from 'react';
import ConfigurationContent from '../../../Components/ConfigurationContent/ConfigurationContent';
import win20CustomStates from '../../../assets/MSTR2020/WINDOWS_CUSTOM/Win20CustomStates.json';
import win20ExpressStates from '../../../assets/MSTR2020/WINDOWS_EXPRESS/Win20ExpressStates.json';
import lin20States from '../../../assets/MSTR2020/LINUX/Lin20States.json';
 

class InstallationOsControl extends Component {
    constructor(props) {
        super(props);
        if (this.props.useOs === 'windows' && this.props.useMode === 'custom') {
            this.state = win20CustomStates
        }else if (this.props.useOs === 'windows' && this.props.useMode === 'express') {
            this.state = win20ExpressStates;
        } else{
                  this.state = lin20States;
              }
    }

    //steps change
    nextStep = () => {
        if (this.state.deepestStep > this.state.steps) {
            this.setState((preState, props) => {
                return {
                    steps: preState.steps + 1
                };
            });
        } else {
            this.setState((preState, props) => {
                return {
                    steps: preState.steps + 1,
                    deepestStep: preState.steps + 1
                };
            });
        }
    };

    backStep = () => {
        if (this.state.steps > 0) {
            this.setState((preState, props) => {
                return {
                    steps: preState.steps - 1
                };
            });
        }
    };
    /**
     * Get the value of a specific state
     * @param {String} key the state field
     * @return {Object} the value of the state
     */
    getOriginState = key => {
        if (Object.keys(this.state).includes(key)) {
            return this.state[key];
        }
        return null;
    };

    /**
     * Change the value of a specific state
     * @param {String} key the state field
     * @param {Object} value the new value of the state you want to set
     */
    setOriginState = (key, value) => {
        if (Object.keys(this.state).includes(key)) {
            this.setState({
                [key]: value
            });
        }
    };

    render() {
        return (
            <ConfigurationContent
                nextStep={this.nextStep}
                backStep={this.backStep}
                useOs={this.props.useOs}
                useMode={this.props.useMode}
                useVersion={this.props.useVersion}
                setOriginState={this.setOriginState}
                getOriginState={this.getOriginState}
                steps={this.state.steps}
                setBasicState={this.props.setBasicState}
                deepestStep={this.state.deepestStep}
            />
        );
    }
}

export default InstallationOsControl;
