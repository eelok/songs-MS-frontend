import React, {Component} from "react";
import "../../css/radio.css";
import "../../css/buttons.css"

export class Radio extends Component {

    render() {
        return (
            <div className="form-control radio-content">
                <header className="radio-header">Visibility:</header>
                <div className="radio-group">
                    <label className="radio-control">Public:
                        <input
                            id="public"
                            type="radio"
                            value="false"
                            name="isPrivate"
                            defaultChecked={this.props.isPrivate === false}
                        />
                    </label>
                    <label className="radio-control">Private:
                        <input
                            id="private"
                            type="radio"
                            value="true"
                            name="isPrivate"
                            defaultChecked={this.props.isPrivate === true}
                        />
                    </label>
                </div>
            </div>

        )
    }
}