import React, {Component} from "react";

export class RadioPrivatePublic extends Component {

    render() {
        return (
            <div>
                <h4>Visibility</h4>
                <label>
                    Public
                    <input
                        id="public"
                        type="radio"
                        value="false"
                        name="isPrivate"
                        defaultChecked={this.props.isPrivate === false}
                    />
                </label>

                <label>
                    Private
                    <input
                        id="private"
                        type="radio"
                        value="true"
                        name="isPrivate"
                        defaultChecked={this.props.isPrivate === true}
                    />
                </label>
            </div>

        )
    }
}