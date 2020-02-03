 import React from 'react'; import 'antd/dist/antd.css';
import { Steps } from 'antd';
import win20customPages from '../../assets/MSTR2020/WINDOWS_CUSTOM/Win20CustomPageObjects.json';
import win20expressPages from '../../assets/MSTR2020/WINDOWS_EXPRESS/Win20ExpressPageObjects.json';
import lin20Pages from '../../assets/MSTR2020/LINUX/Lin20PageObjects.json';
// import classes from './Navigation.module.css'
import './Navigation.css';

const { Step } = Steps;

/**
 * Jump to a specific page when a sidebar node is clicked
 * by changing the 'steps' state.
 * @param {Number} curSteps the step number that the clicked sidebar node represent for
 * @param {Object} props the props from parent component
 */
const onChangeSiderBar = (curSteps, props) => {
    if (props.validateForm !== undefined) {
        props.validateForm((err, value) => {
            if (!err) {
                if (curSteps <= props.deepestStep) {
                    props.setOriginState('steps', curSteps);
                }
            }
        });
    }else {
        if (curSteps <= props.deepestStep) {
            props.setOriginState('steps', curSteps);
        }
    }
    
};

/**
 * Dynamically set the status style of each sidebar node
 * @param {Number} stepNumber the step number of current sidebar node
 * @param {Object} props   the props from parent component
 */
const setCurrentStepStatus = (stepNumber, props) => {
    return props.steps === stepNumber
        ? 'process'
        : props.deepestStep > stepNumber
        ? 'finish'
        : 'wait';
};

/**
 * Generate a sidebar JSX corresponding to the
 * pages that need to be displayed
 * @param {Object} pageObjects object that contains information for each page
 * @param {Object} props the props from parent component
 * @return {Object} JSX Object that can be rendered as a sidebar
 */
const initiateSideBar = (pageObjects, props) => {
    let count = 0;
    let stepList = pageObjects.map(page => {
        let res = null;
        let hasPage = false; // whether to put the in the steps
        let dependStates = page.dependOnState;

        //the page should be displayed if it has no dependent product or any of its dependent product is chosen
        if (dependStates.length === 0) {
            hasPage = true;
        } else {
            for (let i = 0; i < dependStates.length; i++) {
                if (props.getOriginState(dependStates[i])) {
                    hasPage = true;
                    break;
                }
            }
        }

        if (hasPage) {
            res = (
                <Step
                    key={page.id}
                    title={page.sidebarLabel}
                    status={setCurrentStepStatus(count, props)}
                    
                />
            );
            count++;
        }
        return res;
    });
    return (
        <Steps
            current={props.steps}
            onChange={cur => onChangeSiderBar(cur, props)} //when a node is clicked
            direction="vertical"
            size="small"
        >
            {stepList}
        </Steps>
    );
};

const Navigation = props => {
    let version = props.useVersion;
    let mode = props.useMode;
    let os = props.useOs;
    const isWin20Custom = () => {
        return version === '2020' && mode === 'custom' && os === 'windows';
    };

    const isWin20Express = () => {
        return version === '2020' && mode === 'express' && os === 'windows';
    };

    const isLinux20 = () => {
        return version === '2020' && os === 'linux';
    };

    let pageObjects = null;
    if (isWin20Custom()) {
        pageObjects = win20customPages;
    } else if (isWin20Express()) {
        pageObjects = win20expressPages;
    } else if (isLinux20()) {
        pageObjects = lin20Pages;
    }

    return initiateSideBar(pageObjects, props);
};

export default Navigation;
