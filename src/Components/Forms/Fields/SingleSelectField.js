import React from "react";
import Select from "react-select";

class SingleSelectField extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div>
					<label>{this.props.placeholder}</label>
					<Select
						name={this.props.name}
						options={this.props.options}
						placeholder={this.props.placeholder}
						onChange={this.props.onChange}
						required={this.props.required}
						value={this.props.defaultValue}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default SingleSelectField;
