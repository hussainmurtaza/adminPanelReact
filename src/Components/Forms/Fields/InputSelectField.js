import React from "react";
import Select from "react-select";

class InputSelectField extends React.Component {
	render() {
		const options = [{ value: "1", label: "Access All" }];
		return (
			<React.Fragment>
				<div>
					<label>{this.props.placeholder}</label>
					<Select
						isMulti
						name={this.props.name}
						options={options}
						className="basic-multi-select"
						classNamePrefix="select"
						placeholder={this.props.placeholder}
						required={this.props.required}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default InputSelectField;
