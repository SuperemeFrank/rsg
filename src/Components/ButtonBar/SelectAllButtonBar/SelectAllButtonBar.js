import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

const buttonBar = props => (
    <div>
        <div className={props.styleName}>
            <div className="selectBarButtons">
                <Button type="link" onClick={props.selectAll}>
                    Select All
                </Button>
                <Button type="link" onClick={props.unselectAll}>
                    Clear All
                </Button>
            </div>
        </div>
        {props.showErrorMsg ? (
            <div className="btnBarErrorMsg">
                Please select at least one product.
            </div>
        ) : null}
    </div>
);

export default buttonBar;
