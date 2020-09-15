import React from "react";
import "../css/form-control.css"


export const TextInput = (props) => {

    return (
        <div className="form-control">
            <label>{props.label}</label>
            <input type="text" name={props.name} defaultValue={props.value} />
        </div>
    )

}