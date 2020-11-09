import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import CustomersAction from "Redux/V1/Customers/Get/CustomerGetAction";
import CustomersFilterAction from "Redux/V1/Customers/Filter/CustomerFilterAction";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
// import Select from "react-select";
import queryString from "query-string";
import FilterForm from "Components/Forms/FilterForm";
import CustomerPutAction from "Redux/V1/Customers/Put/CustomerPutAction";

class CustomerListComponent extends Component {
	state = {
		form: {
			first_name: null,
			last_name: null,
			status: null,
			email: null,
			created_at: null,
		},
		// checked: null,
	};
	// state = {
	// 	switch1: false,
	// };
	// handleSwitchChange = (nr) => () => {
	// 	let switchNumber = `switch${nr}`;
	// 	this.setState({
	// 		[switchNumber]: !this.state[switchNumber],
	// 	});
	// 	console.log(switchNumber, "switch");
	// };
	componentDidMount() {
		const value = queryString.parse(this.props.location.search);
		this.props.dispatch(CustomersAction.getCustomers());
		this.props.dispatch(CustomersFilterAction.filterCustomers(value));
	}
	// handleSubmit = (e) => {
	//     e.preventDefault();
	//     this.props.dispatch(CustomersFilterAction.filterCustomers(this.state.form));
	//     console.log(this.state.form, "submit filter");
	// };
	// handleMultiSelect = (e, options) => {
	//     let { form } = this.state;
	//     form[e.name] = options;
	//     this.setState({
	//         form,
	//     });
	// };
	// cardLists = () => {
	//     return this.props.customers.map((customer) => {
	//         return customer.contact.map((cc) => {
	//             return (
	//                 { value: cc.email, label: cc.email }
	//             );
	//         });
	//     });
	// };

	onSwitch = (customer) => {
		this.props.dispatch(CustomerPutAction.PutCustomers(customer.id));
	};

	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="customers" />

					<div className="content content-components">
						<div className="container">
							<FilterForm
								fields={[
									"customer_name",
									"customer_email",
									"customer_status",
									"customer_date",
								]}
							/>

							<h4 className="page-header mg-b-15">
								Customer List
                            </h4>
							<div className="customer-list-page">
								<Table striped bordered hover>
									<thead>
										<tr>
											<th>Name</th>
											<th>Total Sites</th>
											<th>Total Revenue</th>
											<th>Email</th>
											<th>Status</th>
											<th>Created At</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{this.props.customers.map(
											(customer) => (
												<tr>
													<td>
														<a
															target="_blank"
															rel="noopener noreferrer"
															href={
																"/customer/" +
																customer.id
															}
														>
															{customer.fullname}
															{/* <Badge variant="primary">{customer.total_sites}</Badge> */}
														</a>
													</td>

													<td>{customer.total_sites}</td>
													<td>$ {customer.paid_revenue}</td>
													<td>{customer.email}</td>

													<td>{customer.status}</td>

													<td>
														{TimeStampHelper.standardDateFormat(
															`${customer.created_at}`
														)}
													</td>

													<td className="text-center custom-control custom-switch">
														<input
															type="checkbox"
															className="custom-control-input"
															id={
																"customSwitches-" +
																customer.id
															}
															checked={
																customer.status ===
																	"blocked"
																	? true
																	: false
															}
															onChange={() =>
																this.onSwitch(
																	customer
																)
															}
															readOnly
														/>
														<label
															className="custom-control-label"
															htmlFor={
																"customSwitches-" +
																customer.id
															}
															data-toggle="tooltip"
															data-placement="top"
															title="Block/Unblock User"
														></label>
														<a
															href={
																"/customer/" +
																customer.id
															}
															className="btn btn-link"
															title="View"
														>
															<FontAwesomeIcon
																icon={faEye}
															/>
														</a>
													</td>
												</tr>
											)
										)}
									</tbody>
								</Table>
							</div>
						</div>
					</div>
				</TemplateMain>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		customers: state.customers.customers,
		customer_filter: state.customer_filter.customers,
		customer_put: state.customer_put.customers,
	};
};

export default connect(mapStateToProps)(CustomerListComponent);
