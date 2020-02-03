 import React from 'react'; import 'antd/dist/antd.css';


/**
     *Get the value of a state and set the value to a specific field in the current form page
     * @param {string} fieldName the field you want to set
     * @param {string} stateName the state that you want to get value from and put the value to the field
     */
export const setFormFieldValue = (fieldName, stateName, props) => {
           const { setFieldsValue, getFieldValue } = props.form;
           if (
               getFieldValue(fieldName) !== props.getOriginState(stateName)
           ) {
               setFieldsValue({
                   [fieldName]: props.getOriginState(stateName)
               });
           }
       };


/**
 * Generate a tree-like summary list based on a specific structural data
 * The output jsx will be like 
 * <ul>
 *    <li>
 *        <ul>
 *          <li>
 *              ...
 *          </li>
 *        </ul>
 *    </li>
 *    ...
 * </ul>
 * @param {Array} sumFrame an array that follow the structure to generate Summary content
 * @param {Object} props an object passed with some necessary methods 
 * to communicate with states in the higher component level
 * @return {Object} an jsx object contains a tree-like structure   
 */
export const generateSummary = (sumFrame, props) => {
    if (sumFrame === undefined || sumFrame === null || sumFrame.length === 0) {
        return null;
    }
    let content = [];
    for (let i = 0; i < sumFrame.length; i++) {
        let item = sumFrame[i];
        if (checkDependencyStates(item.visibleDependStates, props)) {
            content.push(
                <li key={item.label}>
                    {' '}
                    {item.label} {printState(item.state, props)}
                    {generateSummary(item.children, props)}
                </li>
            );
        }
    }
    if (content.length === 0) {
        return null;
    }

    return <ul>{content}</ul>;
    
};

/**
 * Get the value of a state of higher level component and output it as String type
 * @param {String} state the name of the state get value from
 * @param {Object} props an object passed with some necessary methods 
 * to communicate with states in the higher component level
 * @returns {String} return the value of a state as String
 */
const printState = (state, props) => {

    let value = props.getOriginState(state);
    if (value === undefined || value === null) {
        return null;
    }
    return typeof value === 'string' ? value : value.toString();
};


/**
 * Return true either the stateArray is empty or has at least one state 
 * which status is true
 * @param {Array} stateArray an array that contains states to check, 
 * the state must be available and are boolean type
 * @param {Object} props an object passed with some necessary methods 
 * to communicate with states in the higher component level
 * @return {boolean} 
 * true, if the stateArray is empty or has at least one state 
 * which status is true
 * false, otherwise
 */
const checkDependencyStates = (stateArray, props) => {
    if (stateArray.length === 0) {
        return true;
    }
    for (let i = 0; i < stateArray.length; i++) {
        let curState = stateArray[i];
        if (props.getOriginState(curState) === undefined || props.getOriginState(curState) === null) {
            return false;
        }
        if (props.getOriginState(curState)) {
            return true;
        }
    }

    return false;
}