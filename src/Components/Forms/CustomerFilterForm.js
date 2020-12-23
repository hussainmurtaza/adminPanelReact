import React, { Component } from "react";
import { Row, Button, Col } from "react-bootstrap";
import { connect } from "react-redux";
import AsyncSelectField from "Components/Forms/Fields/AsyncSelectField";
import CustomersFilterAction from "Redux/V1/Customers/Filter/CustomerFilterAction";
import queryString from "query-string";
import InputSelectField from "Components/Forms/Fields/InputSelectField";

class CustomerFilterForm extends Component {
	componentDidMount() {
		const query = queryString.parse(this.props.location);
		for (const key of Object.keys(query)) {
			if (query[key] === "") {
				delete query[key];
			}
		}
		const params = Object.entries(query)
			.map(([key, value]) => key + "=" + value)
			.join("&");
		this.props.dispatch(CustomersFilterAction.customersFilter(params));
	}
	handleSelect = (e, options) => {
		localStorage.setItem(e.name, JSON.stringify(options));
	};
	render() {
		if (!this.props.location) {
			localStorage.removeItem("customers");
			localStorage.removeItem("status");
		}
		const option1 = localStorage.getItem("customers");
		const option2 = localStorage.getItem("status");
		const customers_options = JSON.parse(option1);
		const status_options = JSON.parse(option2);
		const customer_status = [
			{ value: "active", label: "Active" },
			{ value: "pending", label: "Pending" },
			{ value: "blocked", label: "Blocked" },
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

const mapStateToProps = (state) => {
	return {
		customer_filter: state.customer_filter,
	};
};

export default connect(mapStateToProps)(CustomerFilterForm);
