import React, { Component } from "react";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

class InputDateField extends Component {
	render() {
		return (
			<React.Fragment>
				<DateRangePicker >
					<input
						type="text"
						name={this.props.name}
						className="form-control"
						placeholder={this.props.placeholder}
						value=""
					></input>
				</DateRangePicker>
			</React.Fragment>
		);
	}
}

export default InputDateField;
