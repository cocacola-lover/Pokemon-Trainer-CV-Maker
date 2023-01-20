import React from "react";

export default class Switch extends React.Component {
    render() {
        const {option1, option2, switchFunction, switchValue} = this.props;

        return switchValue ? (<div>
            <button className="activated">{option1}</button>
            <button className="deactivated" onClick={switchFunction}>{option2}</button>
        </div>) : (<div>
            <button className="deactivated" onClick={switchFunction}>{option1}</button>
            <button className="activated">{option2}</button>
        </div>)
    }
}