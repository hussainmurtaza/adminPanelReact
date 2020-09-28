import React, { Component } from "react";
class InputText extends Component {
    render() {
        return (
            <div className="form-group">
                <input
                    type={props.type}
                    name={props.name}
                    className="form-control"
                    placeholder={props.placeholder}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.value}
                />
            </div>
        );
    }
}

export default InputText;
