import React, {Component} from "react";
import "../css/form-control.css"


export class TextInput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-control">
                <label>{this.props.label}</label>
                <input type="text" name={this.props.name} />
            </div>
        )
    }
}