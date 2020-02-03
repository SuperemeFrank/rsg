import { Tree, Tooltip } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

const { TreeNode } = Tree;

/**
 *  Dynamically create the UI of the 'antd' treeSelect component based on the given featureTree
 * @param {Object} tree object that follow the structure of the featureTree
 * @param {Map} disSelectableMap the map contains the disSelectable info of each treeNode
 * @return {Array} return the Array that contains JSX views
 */
export const createTree = (tree, disSelectableMap) => {
    if (tree === null) {
        return null;
    }
    let res = [];
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].children && tree[i].children.length > 0) {
            res.push(
                <TreeNode
                    disableCheckbox={disSelectableMap.get(tree[i].id)}
                    title={
                        <Tooltip
                            placement="right"
                            title={generateTooltipTitle(tree[i])}
                        >
                            {tree[i].name}
                        </Tooltip>
                    }
                    key={tree[i].id}
                >
                    {createTree(tree[i].children, disSelectableMap)}
                </TreeNode>
            );
        } else {
            res.push(
                <TreeNode
                    disableCheckbox={disSelectableMap.get(tree[i].id)}
                    title={
                        <Tooltip
                            placement="right"
                            title={generateTooltipTitle(tree[i])}
                        >
                            {tree[i].name}
                        </Tooltip>
                    }
                    key={tree[i].id}
                />
            );
        }
    }
    return res;
};

/**
 * Create a tooltip of a specific (tree node)product,
 * it contains description the description, require for and require by information
 * used in Feature Selection Pages
 * @param {Object} treeNode object that contain information to create the tooltip for the specific node
 */
const generateTooltipTitle = treeNode => {
    let dependsOnList = null;
    let dependedByList = null;
    let description = null;

    if (treeNode.tooltipProductDescription !== undefined) {
        description = treeNode.tooltipProductDescription;
    }
    if (
        treeNode.tooltipRequireFor !== null &&
        treeNode.tooltipRequireFor.length > 0
    ) {
        dependsOnList = treeNode.tooltipRequireFor.map(value => (
            <div key={value}>{value}</div>
        ));
    }

    if (
        treeNode.tooltipRequiredBy !== null &&
        treeNode.tooltipRequiredBy.length > 0
    ) {
        dependedByList = treeNode.tooltipRequiredBy.map(value => (
            <div key={value}>{value}</div>
        ));
    }

    if (description !== null) {
        description = (
            <div>
                <b>Description: </b>
                <br />
                {description}
            </div>
        );
    }

    if (dependsOnList !== null) {
        dependsOnList = (
            <div>
                <b>Require for:</b> {dependsOnList}
            </div>
        );
    }

    if (dependedByList !== null) {
        dependedByList = (
            <div>
                <b>Required by:</b> {dependedByList}
            </div>
        );
    }

    return (
        <div>
            <div>{description}</div>
            <div> {dependsOnList}</div>
            <div> {dependedByList}</div>
        </div>
    );
};

/**
 *  Traverse the featureTree and initiate dependencyMap, disSelectableMap, parentMap and childrenMap
 * @param {Object} featureTree object that follow the structure of the featureTree
 * @param {String} parentId  the parent node id of current featureTree
 * @param {Object} maps an object contains the maps that tend to be initiated
 * @return  null
 */
export const initialMaps = (featureTree, parentId, maps) => {
    if (featureTree === null) {
        return;
    }
    for (let i = 0; i < featureTree.length; i++) {
        mapChildren(
            featureTree[i].id,
            featureTree[i].children,
            maps.childrenMap
        );
        maps.dependencyMap.set(featureTree[i].id, featureTree[i].dependencies);
        maps.disSelectableMap.set(featureTree[i].id, false);
        maps.parentMap.set(featureTree[i].id, parentId);
        if (featureTree[i].children && featureTree[i].children.length > 0) {
            initialMaps(featureTree[i].children, featureTree[i].id, maps);
        }
    }
};

/**
 *  Put the current node's children to the childrenMap
 * @param {String} nodeKey the unique id of the TreeNode
 * @param {Array} children the children of current node
 * @param {Map} childrenMap map that record the parent(key) children(value) relationship between nodes
 * @return  null
 */
const mapChildren = (nodeKey, children, childrenMap) => {
    if (children === null || children.length === 0) {
        childrenMap.set(nodeKey, []);
        return;
    }
    let childrenArray = [];
    for (let i = 0; i < children.length; i++) {
        childrenArray.push(children[i].id);
    }
    childrenMap.set(nodeKey, childrenArray);
};

/**
 *  Recursively make all children of a node checked
 * @param {String} nodeKey the unique id of the TreeNode
 * @param {Object} checkedKeys the Object that 'antd' treeSelect use to control the UI
 * @param {Object} maps contains maps that will be used to check all children nodes
 * @param {Object} props contains methods to set and get the state from higher level
 * @return  null
 */
const checkAllChildrenNodes = (children, checkedKeys, maps, props) => {
    if (typeof children == 'undefined' || children.length === 0) {
        return;
    }

    for (let i = 0; i < children.length; i++) {
        if (!checkedKeys.checked.includes(children[i])) {
            checkedKeys.checked.push(children[i]);
            setStateTrue(children[i], maps.feature2StateMap, props);
            checkAndDisableAllDependencyNodes(
                maps.dependencyMap.get(children[i]),
                checkedKeys,
                maps,
                props
            );
            checkAllChildrenNodes(
                maps.childrenMap.get(children[i]),
                checkedKeys,
                maps,
                props
            );
        }
    }
};

/**
 *  Recursively make all dependencies of a node checked and make them unselectable until the root node has been dis-selected
 * @param {String} nodeKey the unique id of the TreeNode
 * @param {Object} checkedKeys the Object that 'antd' treeSelect use to control the UI
 * @param {Object} maps contains maps that will be used to check and disable dependency nodes
 * @param {Object} props contains methods to set and get the state from higher level
 * @return  null
 */
const checkAndDisableAllDependencyNodes = (
    dependencies,
    checkedKeys,
    maps,
    props
) => {
    if (typeof dependencies == 'undefined' || dependencies.length === 0) {
        return;
    }
    for (let i = 0; i < dependencies.length; i++) {
        if (!checkedKeys.checked.includes(dependencies[i])) {
            checkedKeys.checked.push(dependencies[i]);
            setStateTrue(dependencies[i], maps.feature2StateMap, props);
            checkAllAncestorNodes(dependencies[i], checkedKeys, maps, props);
        }
        maps.disSelectableMap.set(dependencies[i], true);
        disableAllAncestorNodes(dependencies[i], maps);
    }
};

/**
 *  Recursively ensure all the ancestors of this node have been checked
 * @param {String} nodeKey the unique id of the TreeNode
 * @param {Object} checkedKeys the Object that 'antd' treeSelect use to control the UI
 * @param {Object} maps contains maps that will be used to check all ancestor nodes
 * @param {Object} props contains methods to set and get the state from higher level
 * @return  null
 */
const checkAllAncestorNodes = (nodeKey, checkedKeys, maps, props) => {
    let parentKey = maps.parentMap.get(nodeKey);
    if (typeof parentKey !== 'undefined' && parentKey !== '') {
        if (!checkedKeys.checked.includes(parentKey)) {
            checkedKeys.checked.push(parentKey);
            setStateTrue(parentKey, maps.feature2StateMap, props);
            checkAndDisableAllDependencyNodes(
                maps.dependencyMap.get(parentKey),
                checkedKeys,
                maps,
                props
            );
            checkAllAncestorNodes(parentKey, checkedKeys, maps, props);
        }
    }
};

/**
 *  Recursively disable all the ancestor of a node
 * @param {String} nodeKey the unique id of the TreeNode
 * @param {Object} maps contains maps that will be used to check all children nodes
 * @return  null
 */
const disableAllAncestorNodes = (nodeKey, maps) => {
    let parentKey = maps.parentMap.get(nodeKey);

    if (typeof parentKey !== 'undefined' && parentKey !== '') {
        if (!maps.disSelectableMap.get(parentKey)) {
            maps.disSelectableMap.set(parentKey, true);
            disableAllAncestorNodes(parentKey, maps);
        }
    }
};

/**
 *  Recursively make all dependencies of a node selectable
 * @param {String} nodeKey the unique id of the TreeNode
 * @param {Object} checkedKeys an Object contains the keys of nodes that should be set as checked
 * @param {Object} maps contains maps that will be used to check all children nodes
 * @return  null
 */
const enableDependencyNodes = (nodeKey, checkedKeys, maps) => {
    if (typeof nodeKey === 'undefined') {
        return;
    }
    let dependencies = maps.dependencyMap.get(nodeKey);
    for (let i = 0; i < dependencies.length; i++) {
        if (
            !isDependenciesOfCheckedNodes(
                dependencies[i],
                checkedKeys,
                maps.dependencyMap
            )
        ) {
            maps.disSelectableMap.set(dependencies[i], false);
            enableParentNodes(dependencies[i], maps);
        }
    }
};

/**
 * enable parent node if all its children are selectable
 * @param {String} nodeKey the unique id of the TreeNode
 * @param {Object} maps contains maps that will be used to check all children nodes
 * @return  null
 */
const enableParentNodes = (nodeKey, maps) => {
    let parentKey = maps.parentMap.get(nodeKey);
    if (typeof parentKey == 'undefined' || parentKey === '') {
        return;
    }
    let children = maps.childrenMap.get(parentKey);
    for (let i = 0; i < children.length; i++) {
        if (maps.disSelectableMap.get(children[i])) {
            return;
        }
    }
    maps.disSelectableMap.set(parentKey, false);
    enableParentNodes(parentKey, maps);
};

/**
 * check if one node is another node's dependency
 * @param {String} nodeKey the unique id of the TreeNode
 * @param {Object} checkedKeys the Object that 'antd' treeSelect use to control the UI
 * @param {Map} dependencyMap map that contains dependent relationship among nodes
 * @return {boolean} true: the nodeKey is dependency of at least one other node. Otherwise false.
 */
const isDependenciesOfCheckedNodes = (nodeKey, checkedKeys, dependencyMap) => {
    if (
        typeof checkedKeys.checked == 'undefined' ||
        checkedKeys.checked.length === 0
    ) {
        return false;
    }
    for (let i = 0; i < checkedKeys.checked.length; i++) {
        let dependencies = dependencyMap.get(checkedKeys.checked[i]);
        if (dependencies.includes(nodeKey)) {
            return true;
        }
    }

    return false;
};

/**
 *  Recursively uncheck all children of a node make
 * @param {String} nodeKey the unique id of the TreeNode
 * @param {Object} checkedKeys the Object that 'antd' treeSelect use to control the UI
 * @param {Object} maps contains maps that will be used to check all children nodes
 * @param {Object} props contains methods to set and get the state from higher level
 * @return  null
 */
const removeAllChildrenNodes = (nodeKey, checkedKeys, maps, props) => {
    if (nodeKey === null) {
        return;
    }
    let children = maps.childrenMap.get(nodeKey);
    for (let i = 0; i < children.length; i++) {
        if (checkedKeys.checked.includes(children[i])) {
            checkedKeys.checked.splice(
                checkedKeys.checked.indexOf(children[i]),
                1
            );
            if (maps.disSelectableMap.get(children[i])) {
                maps.disSelectableMap.set(children[i], false);
            }
            setStateFalse(children[i], maps.feature2StateMap, props);
            removeAllChildrenNodes(children[i], checkedKeys, maps, props);
        }
    }
};

/**
 *  uncheck all the ancestor node if they no longer have any child being checked
 * @param {String} nodeKey the unique id of the TreeNode
 * @param {Object} checkedKeys the Object that 'antd' treeSelect use to control the UI
 * @param {Object} maps contains maps that will be used to check all children nodes
 * @param {Object} props contains methods to set and get the state from higher level
 * @return  null
 */
const uncheckAncestorNodes = (nodeKey, checkedKeys, maps, props) => {
    let parentKey = maps.parentMap.get(nodeKey);
    if (parentKey === null || parentKey === '') {
        return;
    }
    let parentChildren = maps.childrenMap.get(parentKey);
    for (let i = 0; i < parentChildren.length; i++) {
        if (checkedKeys.checked.includes(parentChildren[i])) {
            return;
        }
    }
    checkedKeys.checked.splice(checkedKeys.checked.indexOf(parentKey), 1);
    setStateFalse(parentKey, maps.feature2StateMap, props);
    enableDependencyNodes(parentKey, checkedKeys, maps);

    uncheckAncestorNodes(parentKey, checkedKeys, maps, props);
};

/**
 *  Set the corresponding state in WindowsInstall as false
 * @param {String} nodeKey the unique id of the TreeNode
 * @param {Map} feature2StateMap map that contains the relationship between feature key id (key) and state name(value)
 * @param {Object} props contains methods to set and get the state from higher level
 * @return  null
 */
const setStateFalse = (nodeKey, feature2StateMap, props) => {
    if (!feature2StateMap.has(nodeKey)) {
        return;
    }
    let key = feature2StateMap.get(nodeKey);
    props.setOriginState(key, false);
};

/**
 *  Set the corresponding state in WindowsInstall as false
 * @param {String} nodeKey the unique id of the TreeNode
 * @param {Map} feature2StateMap map that contains the relationship between feature key id (key) and state name(value)
 * @param {Object} props contains methods to set and get the state from higher level
 * @return  null
 */
const setStateTrue = (nodeKey, feature2StateMap, props) => {
    if (!feature2StateMap.has(nodeKey)) {
        return;
    }
    let key = feature2StateMap.get(nodeKey);
    props.setOriginState(key, true);
};

/**
 * Uncheck a single node
 * @param {String} nodeKey the unique id of the TreeNode
 * @param {Object} checkedKeys the Object that 'antd' treeSelect use to control the UI
 * @param {Object} maps contains maps that will be used to check all children nodes
 * @param {Object} props contains methods to set and get the state from higher level
 * @return  null
 */
export const uncheckNode = (nodeKey, checkedKeys, maps, props) => {
    if (checkedKeys.checked.includes(nodeKey)) {
        checkedKeys.checked.splice(checkedKeys.checked.indexOf(nodeKey), 1);
    }
    enableDependencyNodes(nodeKey, checkedKeys, maps);
    removeAllChildrenNodes(nodeKey, checkedKeys, maps, props);
    uncheckAncestorNodes(nodeKey, checkedKeys, maps, props);
    setStateFalse(nodeKey, maps.feature2StateMap, props);
};

/**
 * check a single node
 * @param {String} nodeKey the unique id of the TreeNode
 * @param {Object} checkedKeys the Object that 'antd' treeSelect use to control the UI
 * @param {Object} maps contains maps that will be used to check all children nodes
 * @param {Object} props contains methods to set and get the state from higher level
 * @return  null
 */
export const checkNode = (nodeKey, checkedKeys, maps, props) => {
    if (!checkedKeys.checked.includes(nodeKey)) {
        checkedKeys.checked.push(nodeKey);
    }
    checkAllChildrenNodes(
        maps.childrenMap.get(nodeKey),
        checkedKeys,
        maps,
        props
    );
    checkAndDisableAllDependencyNodes(
        maps.dependencyMap.get(nodeKey),
        checkedKeys,
        maps,
        props
    );
    checkAllAncestorNodes(nodeKey, checkedKeys, maps, props);
    setStateTrue(nodeKey, maps.feature2StateMap, props);
};

/**
 * Initiate the feature tree by updating 'checkedKeys'(controller of the tree),
 * Iterate all the products states, if a product is true then check it (with side effect)
 *
 * @param {Object} checkedKeys the Object that 'antd' treeSelect use to control the UI
 * @param {Object} maps object that contains maps that will be used to check all children nodes
 * @callBack a callBack function to handle a bunch of special cases
 * @param {Object} props contains methods to set and get the state from higher level
 */
export const getInitialCheckedKeys = (
    checkedKeys,
    maps,
    specialCheckingCaseHandler,
    props
) => {
    maps.feature2StateMap.forEach((value, nodeKey) => {
        if (props.getOriginState(value)) {
            if (!checkedKeys.checked.includes(nodeKey)) {
                checkNode(nodeKey, checkedKeys, maps, props);
                specialCheckingCaseHandler(nodeKey, checkedKeys);
            }
        }
    });
};

/**
 * check All the product keys that exist in the feature2StateMap; 
 * Set all the products states as true.
 * @param {Object} checkedKeys the Object that 'antd' treeSelect use to control the UI
 * @param {Object} maps object that contains maps that will be used to check all children nodes
 * @callBack a callBack function to handle a bunch of special cases
 * @param {Object} props contains methods to set and get the state from higher level
 */
export const selectAll = (
    checkedKeys,
    maps,
    specialCheckingCaseHandler,
    props
) => {
    maps.feature2StateMap.forEach((value, key) => {
        props.setOriginState(value, true);
        if (!checkedKeys.checked.includes(key)) {
            checkNode(key, checkedKeys, maps, props);
            specialCheckingCaseHandler(key, checkedKeys);
        }
    });
};

/**
 * uncheck All the product keys that exist in the feature2StateMap; 
 * Set all the products states as false.
 * @param {Object} checkedKeys the Object that 'antd' treeSelect use to control the UI
 * @param {Object} maps object that contains maps that will be used to check all children nodes
 * @callBack a callBack function to handle a bunch of special cases
 * @param {Object} props contains methods to set and get the state from higher level
 */
export const unselectAll = (
           checkedKeys,
           maps,
           specialUnCheckingCaseHandler,
           props
       ) => {
           maps.feature2StateMap.forEach((value, nodeKey) => {
               props.setOriginState(value, false);
               if (checkedKeys.checked.includes(nodeKey)) {
                   uncheckNode(nodeKey, checkedKeys, maps, props);
                   specialUnCheckingCaseHandler(nodeKey, checkedKeys);
               }
           });
};

/**
 * 
 * @param {Object} checkedKeys the Object that 'antd' treeSelect use to control the UI
 * @return {Boolean} true: at least one node has been checked, 
 *                   false: none node has been checked
 */
export const validateAtLeastOneChecked = checkedKeys => {
    return checkedKeys.checked.length > 0;
}