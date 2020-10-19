import React from "react";
import Select from "react-select";

class InputSelectField extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div>
					{/* <label>{this.props.placeholder}</label> */}
					<Select
						isMulti
						name={this.props.name}
						options={this.props.option}
						placeholder={this.props.placeholder}
						onChange={this.props.onChange}
						required={this.props.required}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default InputSelectField;
