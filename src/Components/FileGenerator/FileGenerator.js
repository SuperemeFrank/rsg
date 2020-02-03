/**
 * @file Describe the file
 * @author Haonan Yu(haoyu@microStrategy.com)
 */

import {
    linState2PrefixMap,
    linState2CommentMap
} from '../../assets/MSTR2020/LINUX/Lin20Maps4Generator';
import {
    winCustomState2PrefixMap,
    winCustomState2CommentMap
} from '../../assets/MSTR2020/WINDOWS_CUSTOM/Win20CustomMaps4Generator';
import {
    winExpressState2PrefixMap,
    winExpressState2CommentMap
} from '../../assets/MSTR2020/WINDOWS_EXPRESS/Win20ExpressMaps4Generator';

import linComments from '../../assets/MSTR2020/LINUX/Lin20GeneratorComment';


/**
 * for specific use cases, if the content is an array: ['a', 'b', 'c'],
 * flatten it and return a string  'a;b;c;'
 * @param {value} state the state name
 * @param {Object} props an object that contains functions and variables needed
 * @return {String} return the flatten string generated from the array.
 */
const generateValueFromArray = (state, props) => {
    let array = props.getOriginState(state);
    if (typeof array === 'undefined' || array.length === 0) {
        return '';
    }
    let res = '';
    array.forEach((key, index) => {
        if (typeof key !== 'undefined' && key.length !== 0) {
            if (index > 0) {
                res = res + ';';
            }
            res = res + key;
        }
    });
    return res;
};

/**
 * Generate a string that contains all the content of the Option.txt file.
 * @param {Object} states an Object that contains function and variable to get and set the states
 * @return {String} a string that contains all the content of the Option.txt file.
 */
export const generateLinuxFile = props => {
    let res = '';
    linState2PrefixMap.forEach((value, key) => {
        let inputValue = null;
        if (
            key === 'telemetryServerClusterRemotenodes' ||
            key === 'servicesRegistrationServerHosts'
        ) {
            inputValue = generateValueFromArray(key, props);
        } else {
            inputValue = props.getOriginState(key);
        }
        res = res + linState2CommentMap.get(key) + value + inputValue + '\n';
    });

    res = res + linComments.guide;
    return res;
};

/**
 * Generate a string that contains all the content of the Response.ini file for Custom Installation Mode.
 * @param {Object} states an Object that contains function and variable to get and set the states
 * @return {String} a string that contains all the content of the Option.txt file.
 */
export const generateWinCustomFile = props => {
    let res = '';
    winCustomState2PrefixMap.forEach((value, key) => {
        let inputValue = null;
        if (
            key === 'telemetryServerRemoteNodes' ||
            key === 'serversInCluster'
        ) {
            inputValue = generateValueFromArray(key, props);
        } else {
            inputValue = props.getOriginState(key);
            if (typeof inputValue === 'boolean') {
                inputValue = inputValue ? 'TRUE' : 'FALSE';
            }
        }
        res =
            res +
            winCustomState2CommentMap.get(key) +
            value +
            inputValue +
            '\n';
    });
    return res;
};

/**
 * Generate a string that contains all the content of the Response.ini file c.
 * @param {Object} states an Object that contains function and variable to get and set the states
 * @return {String} a string that contains all the content of the Option.txt file.
 */
export const generateWinExpressFile = props => {
    let res = '';
    winExpressState2PrefixMap.forEach((value, key) => {
        let inputValue = null;
        inputValue = props.getOriginState(key);
        if (typeof inputValue === 'boolean') {
            inputValue = inputValue ? 'TRUE' : 'FALSE';
        }
        res =
            res +
            winExpressState2CommentMap.get(key) +
            value +
            inputValue +
            '\n';
    });
    return res;
};
