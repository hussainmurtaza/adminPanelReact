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
						className="form-control"
						placeholder={this.props.placeholder}
						onChange={this.props.handleChange}
						required={this.props.required}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default InputPasswordField;
