import React, { Component } from "react";

class InputTextField extends Component {
	render() {
		return (
			<React.Fragment>
				<div>
					<label>{this.props.placeholder}</label>
					<input
						type="text"
						id={this.props.name}
						name={this.props.name}
						className="form-control"
						placeholder={this.props.placeholder}
						required={this.props.required}
						onChange={this.props.onChange}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default InputTextField;
