import React from "react";
import "../css/form-control.css"


export const TextInput = ({type, label, name, value, onChange}) => {

    return (
        <div className="form-control">
            <label>{label}</label>
            <input type={type} name={name} defaultValue={value} onChange={onChange}/>
        </div>
    )

}