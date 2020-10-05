import React from "react";

class InputField extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div>
					<label> {this.props.label}</label>
					<input
						type="text"
						id={this.props.name}
						name={this.props.name}
						placeholder={this.props.label}
						className="form-control"
						required={this.props.required}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default InputField;
