import React from "react";

class InputUpdateField2 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="form-group">
                    <label>{this.props.placeholder}</label>
                    <input
                        type={this.props.type}
                        id={this.props.name}
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        onInput={this.props.onChange}
                        className="form-control"
                        required={this.props.required}
                        value={this.props.value}
                        pattern={this.props.pattern}
                        step={this.props.step}
                        autocomplete="off"
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default InputUpdateField2;
