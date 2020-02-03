/**
 * @file High level of the website, control the main view branches of this website.
 * user need to set the OS version, MSTR version, and install mode they want to install.
 * @author Haonan Yu(haoyu@microStrategy.com)
 */

import React, { Component } from 'react';
import InstallationOsControl from './InstallationOsControl/InstallationOsControl';
import LicenseAgreePage from '../../Components/ContentPages/LicenseAgreePage/LicenseAgreePage';

class ResponseFileBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agreeLicense: false,
            initialPage: true, // true to display LicenseAgree Page, false otherwise
            installVersion: '2020',
            operateSystem: 'windows',
            mode: 'custom'
        };
    }

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
        const { mode } = this.state;
        const { installVersion } = this.state;
        const { operateSystem } = this.state;
        if (this.state.initialPage) {
            return (
                <LicenseAgreePage
                    setOriginState={this.setOriginState}
                    getOriginState={this.getOriginState}
                />
            );
        }else {
            return (
                <InstallationOsControl
                    useMode={mode.toLowerCase()}
                    useVersion={installVersion.toLowerCase()}
                    useOs={operateSystem.toLowerCase()}
                    setBasicState={this.setOriginState}
                />
            );
        }
    }
}

export default ResponseFileBuilder;
