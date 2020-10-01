import React from "react";

class InputPasswordField extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div
				// className={`field form-field ${
				// 	this.state.error ? "is-invalid error-input" : ""
				// }`}
				>
					<label>{this.props.placeholder}</label>
					<input
						name={this.props.name}
						type="password"
						id={this.props.name}
						placeholder={this.props.placeholder}
						required={this.props.required}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default InputPasswordField;
