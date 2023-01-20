import React from "react";

export default class MyForm extends React.Component {

    render () {
        return this.props.edit ? (
            <div>
                <label htmlFor={this.props.id}>{this.props.label ?? ""}</label>
                <input type="text" 
                       maxLength="30"
                       id={this.props.id}
                       onChange={(e) => this.props.updateParentValue(e.target.value)}/>
            </div>
        ) : (<div>
            {this.props.result}
        </div>)
    }
}