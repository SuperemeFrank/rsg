 import React from 'react'; import 'antd/dist/antd.css';
import win20customPages from '../../assets/MSTR2020/WINDOWS_CUSTOM/Win20CustomPageObjects.json';
import win20ExpressPages from '../../assets/MSTR2020/WINDOWS_EXPRESS/Win20ExpressPageObjects.json';
import lin20Pages from '../../assets/MSTR2020/LINUX/Lin20PageObjects.json';
import { pic2StateMap } from '../../assets/MSTR2020/WINDOWS_CUSTOM/Win20CustomMaps';
import Zmage from 'react-zmage';
import classes from './ReferencePicture.module.css';


const referencePicture = props => {
    let displayPics = [];
    let version = props.useVersion.toLowerCase();
    let mode = props.useMode.toLowerCase();
    let Os = props.useOs.toLowerCase();

    /**
     * Generate a picture display list whose index are paralleling to the steps.
     * The pictures added to the list is based on the features selected
     * @param {Object} pageObjects object that contains information for each page
     * @return {Array} return a list that contains pictures to display in order
     */
    const generateDisplayPics = pageObjects => {
        let res = [];
        pageObjects.forEach(item => {
            // if dependent State wasn't chosen, don add it's picture to display list
            let dependStates = item.dependOnState;
            if (dependStates.length === 0) {
                res.push(item.referPic);
            } else {
                for (let i = 0; i < dependStates.length; i++) {
                    if (props.getOriginState(dependStates[i])) {
                        res.push(item.referPic);
                        break;
                    }
                }
            }
        });
        return res;
    };

    const isWin20Custom = () => {
        return version === '2020' && mode === 'custom' && Os === 'windows';
    };

    const isWin20Express = () => {
        return version === '2020' && mode === 'express' && Os === 'windows';
    };

    const isLinux20 = () => {
        return version === '2020' && Os === 'linux';
    };

    if (isWin20Custom()) {
        displayPics = generateDisplayPics(win20customPages);
    } else if (isWin20Express()) {
        displayPics = generateDisplayPics(win20ExpressPages);
    } else if (isLinux20()) {
        displayPics = generateDisplayPics(lin20Pages);
    }

    let pictures = displayPics[props.steps];
    if (typeof pictures === 'undefined') {
        return null;
    }
    return pictures.map((item, index) => {
        // special cases for wev&mobileVDS and portal&mdxVDS pages in Windows Installation
        let picState = pic2StateMap.get(item);
        if (typeof picState !== 'undefined') {
            if (!props.getOriginState(picState)) {
                return null;
            }
        }
        let picture = require('../../' + item);
        
        return (
            <Zmage
                className={classes.img}
                src={picture}
                style={
                    index === 0
                        ? { width: '100%', height: 'auto' }
                        : { width: '100%', height: 'auto', marginTop: '32px'}
                }
                backdrop="rgba(0, 0, 0, 0)"
                controller={{
                    close: true,
                    zoom: false,
                    download: false,
                    rotate: false,
                    flip: false,
                    pagination: false
                }}
                key={props.steps.toString() + index.toString()}
            />
        );
    });
};

export default referencePicture;
