import React from "react";
import Select from "react-select";

class InputSelectField extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    {/* <label>{this.props.placeholder}</label> */}
                    <Select
                        isMulti={this.props.isMulti === false ? false : true}
                        name={this.props.name}
                        delimiter={this.props.delimiter}
                        options={this.props.option}
                        placeholder={this.props.placeholder}
                        onChange={this.props.onChange}
                        required={this.props.required}
                        value={this.props.value}
                        defaultValue={this.props.defaultValue}
                        isClearable={this.props.isClearable}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default InputSelectField;
