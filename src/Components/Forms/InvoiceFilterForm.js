import React, { Component } from "react";
import { Row, Button, Col } from "react-bootstrap";
import AsyncSelectField from "Components/Forms/Fields/AsyncSelectField";
import InvoiceFilterAction from "Redux/V1/Invoices/Filter/InvoiceFilterAction";
import queryString from "query-string";
import InputSelectField from "Components/Forms/Fields/InputSelectField";
import InputDateField from "Components/Forms/Fields/InputDateField";

class InvoiceFilterForm extends Component {
	componentDidMount() {
		const query = queryString.parse(this.props.location);
		if (query.date_from) {
			query.date_from = query.date_from.replace(" - ", "&date_to=");
		}
		for (const key of Object.keys(query)) {
			if (query[key] === "") {
				delete query[key];
			}
		}
		const params = Object.entries(query)
			.map(([key, value]) => key + "=" + value)
			.join("&");
		//console.log(query, "paramsparams");
		this.props.dispatch(InvoiceFilterAction.invoiceFilter(params));
	}
	handleSelect = (e, options) => {
		localStorage.setItem(e.name, JSON.stringify(options));
	};
	render() {
		if (!this.props.location) {
			localStorage.removeItem("customers");
			localStorage.removeItem("status");
			localStorage.removeItem("startDate");
			localStorage.removeItem("endDate");
		}
		// let startDate, endDate;
		const option1 = localStorage.getItem("customers");
		const option2 = localStorage.getItem("status");
		const customers_options = JSON.parse(option1);
		const status_options = JSON.parse(option2);
		// var curr = new Date();
		// JSON.parse(localStorage.getItem("startDate"))
		// 	? (startDate = JSON.parse(localStorage.getItem("startDate")))
		// 	: (startDate = new Date(curr.setDate(curr.getDate())));

		// JSON.parse(localStorage.getItem("endDate"))
		// 	? (endDate = JSON.parse(localStorage.getItem("endDate")))
		// 	: (endDate = new Date(curr.setDate(curr.getDate() + 6)));
		//const startDate = localStorage.getItem("startDate");
		//const endDate = localStorage.getItem("endDate");
		const customer_status = [
			{ value: "paid", label: "Paid" },
			{ value: "pending", label: "Pending" },
			{ value: "overdue", label: "Overdue" },
		];

		return (
			<React.Fragment>
				<form>
					<Row>
						<Col md="6">
							<AsyncSelectField
								name="customers"
								dispatch={this.props.dispatch}
								placeholder="Search By Customer Name"
								defaultValue={customers_options}
							/>
						</Col>
						<Col md="6">
							<InputSelectField
								isMulti={false}
								name="status"
								option={customer_status}
								placeholder="Search By Status"
								onChange={(options, e) =>
									this.handleSelect(e, options)
								}
								defaultValue={status_options}
								isClearable
							/>
						</Col>
						<Col md="6 mt-3">
							<InputDateField
								name="date_from"
								placeholder="Search By Date"
								// startDate={localStorage.getItem("startDate")}
								// endDate={localStorage.getItem("endDate")}
							/>
						</Col>
						<Col md="6 mt-3">
							<Button
								type="submit"
								className="btn btn-brand-02 btn-block"
							>
								Search
							</Button>
						</Col>
					</Row>
				</form>
			</React.Fragment>
		);
	}
}

export default InvoiceFilterForm;
