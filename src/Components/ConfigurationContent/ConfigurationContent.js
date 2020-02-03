 import React from 'react'; import 'antd/dist/antd.css';
import win20CustomPages from '../../assets/MSTR2020/WINDOWS_CUSTOM/Win20CustomPageObjects.json';
import lin20Pages from '../../assets/MSTR2020/LINUX/Lin20PageObjects.json';
import win20ExpressPages from '../../assets/MSTR2020/WINDOWS_EXPRESS/Win20ExpressPageObjects.json'

//Windows 2020 custom part
import WinCustomerInfoAndInstallationDirect from '../ContentPages/MSTR2020/WindowsCustom/CustomerInfoAndInstallationDirect/WinCustomerInfoAndInstallationDirect';
import WinFeatureSelection from '../ContentPages/MSTR2020/WindowsCustom/FeatureSelection/WinFeatureSelection';
import WinTopologyConfiguration from '../ContentPages/MSTR2020/WindowsCustom/TopologyConfiguration/WinTopologyConfiguration';
import WinIdentityConfiguration from '../ContentPages/MSTR2020/WindowsCustom/IdentityConfiguration/WinIdentityConfiguration';
import WinTelemetryConfiguration from '../ContentPages/MSTR2020/WindowsCustom/TelemetryConfiguration/WinTelemetryConfiguration';
import WinWebMobileVDS from '../ContentPages/MSTR2020/WindowsCustom/WebMobileVDS/WinWebMobileVDS';
import WinPortalMDXVDS from '../ContentPages/MSTR2020/WindowsCustom/PortalMDXVDS/WinPortalMDXVDS';
import WinOfficeConfiguration from '../ContentPages/MSTR2020/WindowsCustom/OfficeConfiguration/WinOfficeConfiguration';
import WinIntelligenceServerConfiguration from '../ContentPages/MSTR2020/WindowsCustom/IntelligenceServerConfiguration/WinIntelligenceServerConfiguration';
import WinNarrowcastServerConfiguration from '../ContentPages/MSTR2020/WindowsCustom/NarrowcastServerConfiguration/WinNarrowcastServerConfiguration';
import WinSummary from '../ContentPages/MSTR2020/WindowsCustom/Summary/WinSummary';

//Linux 2020 part
import LinCustomerInfoAndInstallationDirect from '../ContentPages/MSTR2020/Linux/CustomerInfoAndInstallationDirect/LinCustomerInfoAndInstallationDirect';
import LinIdentityConfigStep1 from '../ContentPages/MSTR2020/Linux/IdentityConfiguration/LinIdentityConfigStep1';
import LinFeatureSelection from '../ContentPages/MSTR2020/Linux/FeatureSelection/LinFeatureSelection';
import LinIdentityConfigStep2 from '../ContentPages/MSTR2020/Linux/IdentityConfiguration/LinIdentityConfigStep2';
import LinIdentityConfigStep3 from '../ContentPages/MSTR2020/Linux/IdentityConfiguration/LinIdentityConfigStep3';
import LinIdentityManager from '../ContentPages/MSTR2020/Linux/IdentityManager/LinIdentityManager';
import LinTelemetryConfiguration from '../ContentPages/MSTR2020/Linux/TelemetryConfiguration/LinTelemetryConfiguration';
import LinTopologyConfiguration from '../ContentPages/MSTR2020/Linux/TopologyConfiguration/LinTopologyConfiguration';
import LinRegisteringAsService from '../ContentPages/MSTR2020/Linux/RegisteringAsService/LinRegisteringAsService';
import LinSummary from '../ContentPages/MSTR2020/Linux/Summary/LinSummary';

const configurationContent = props => {


    const win20ExpressWholeSteps = [
        <WinCustomerInfoAndInstallationDirect
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            setBasicState={props.setBasicState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <WinSummary
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />
    ];

    /**
     * An Array that stores the JSX of components of Windows 2020 Custom Installation.
     * The index of this array should be corresponding to 'step' state in WindowsInstall.js
     * @const
     * @type {Array}
     */
    const win20CustomWholeSteps = [
        <WinCustomerInfoAndInstallationDirect
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            setBasicState={props.setBasicState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <WinFeatureSelection
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <WinTopologyConfiguration
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <WinIdentityConfiguration
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <WinTelemetryConfiguration
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <WinWebMobileVDS
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <WinPortalMDXVDS
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <WinOfficeConfiguration
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <WinIntelligenceServerConfiguration
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <WinNarrowcastServerConfiguration
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <WinSummary
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />
    ];

    /**
     * An Array that stores the JSX of components of Linux 2020 Installation.
     * The index of this array should be corresponding to 'step' state in LinuxInstall.js
     * @const
     * @type {Array}
     */
    const lin20WholeSteps = [
        <LinCustomerInfoAndInstallationDirect
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            setBasicState={props.setBasicState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <LinFeatureSelection
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <LinIdentityConfigStep1
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <LinIdentityConfigStep2
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <LinIdentityConfigStep3
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <LinIdentityManager
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <LinTelemetryConfiguration
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <LinTopologyConfiguration
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <LinRegisteringAsService
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />,
        <LinSummary
            nextStep={props.nextStep}
            backStep={props.backStep}
            steps={props.steps}
            getOriginState={props.getOriginState}
            setOriginState={props.setOriginState}
            deepestStep={props.deepestStep}
            useOs={props.useOs}
            useMode={props.useMode}
            useVersion={props.useVersion}
        />
    ];

    /**
     * generate Array that contains configuration page JSX based on the features that user select to install
     * if a product is not selected, it's configuration page should not display
     * @param {Object} pageObjects object that contains information for each page
     * @param {Array} pageArray Array that contains all the pages' JSX
     * @return {Array} return the array that contains necessary configuration page JSX
     */
    const generateSteps = (pageObjects, pageArray) => {
        let res = [];
        pageObjects.forEach(item => {
            //the page should be displayed if it has no dependent product or any of its dependent product is chosen
            let dependStates = item.dependOnState;
            if (dependStates.length === 0) {
                res.push(pageArray[item.id]);
            } else
                for (let i = 0; i < dependStates.length; i++) {
                    if (props.getOriginState(dependStates[i])) {
                        res.push(pageArray[item.id]);
                        break;
                    }
                }
        });
        return res;
    };

    let version = props.useVersion.toLowerCase();
    let mode = props.useMode.toLowerCase();
    let os = props.useOs.toLowerCase();

    let installation = null;

    const isWin20Custom = () => {
        return version === '2020' && mode === 'custom' && os === 'windows';
    };

    const isWin20Express = () => {
        return version === '2020' && mode === 'express' && os === 'windows';
    };

    const isLinux20 = () => {
        return version === '2020' && os === 'linux';
    };

    if (isWin20Custom()) {
        installation = generateSteps(win20CustomPages, win20CustomWholeSteps);
    } else if (isWin20Express()) {
        installation = generateSteps(win20ExpressPages, win20ExpressWholeSteps);
    } else if (isLinux20()) {
        installation = generateSteps(lin20Pages, lin20WholeSteps);
    }

    return installation[props.steps]; 
};

export default configurationContent;
