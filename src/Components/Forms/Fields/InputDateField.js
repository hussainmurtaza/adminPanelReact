import React, { Component } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import TimeStampHelper from "Helpers/TimeStampHelper";

class InputDateField extends Component {
	handleCallback = (start, end) => {
		const startDate = TimeStampHelper.formatDate(start._d);
		const endDate = TimeStampHelper.formatDate(end._d);
		// const rangeDate =
		// 	TimeStampHelper.formatDate(end._d) +
		// 	" - " +
		// 	TimeStampHelper.formatDate(endDate);
		localStorage.setItem("startDate", JSON.stringify(startDate));
		localStorage.setItem("endDate", JSON.stringify(endDate));
	};
	render() {
		//let startDate, endDate;
		// if (localStorage.getItem("startDate")) {
		// 	startDate1 = localStorage.getItem("startDate");
		// 	endDate1 = localStorage.getItem("endDate");
		// } else {
		// 	startDate1 = "2020-01-01";
		// 	endDate1 = "2020-01-15";
		// }
		// if ("startDate" in localStorage) {
		// 	startDate = localStorage.getItem("startDate");
		// 	endDate = localStorage.getItem("endDate");
		// }
		//console.log(startDate1, "startDate");
		return (
			<React.Fragment>
				<DateRangePicker
					initialSettings={{
						// startDate: startDate,
						// endDate: endDate,
						autoApply: true,
						locale: {
							format: "YYYY-MM-DD",
							//separator: "&date_to=",
						},
					}}
					onCallback={this.handleCallback}
				>
					<input
						type="text"
						name={this.props.name}
						className="form-control"
						placeholder={this.props.placeholder}
						value=""
						autocomplete="off"
					></input>
				</DateRangePicker>
			</React.Fragment>
		);
	}
}

export default InputDateField;
