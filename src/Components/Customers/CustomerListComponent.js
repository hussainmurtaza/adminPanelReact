import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import CustomersAction from "Redux/V1/Customers/Get/CustomerGetAction";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

class CustomerListComponent extends Component {
	state = {
		switch1: false,
	};
	handleSwitchChange = (nr) => () => {
		let switchNumber = `switch${nr}`;
		this.setState({
			[switchNumber]: !this.state[switchNumber],
		});
		console.log(switchNumber, "switch");
	};
	componentDidMount() {
		this.props.dispatch(CustomersAction.getCustomers());
	}

	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="customers" />

					<div className="content content-components">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">
								Customer List
							</h4>
							<div className="user-list-page">
								<Table striped bordered hover>
									<thead>
										<tr>
											<th>First Name</th>
											<th>Last Name</th>
											<th>Email</th>
											<th>Status</th>
											<th>Total Sites</th>
											<th>Phone</th>
											<th>Created At</th>
											<th>Action</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{this.props.customers.map(
											(customer) => (
												<tr>
													<td>
														{customer.first_name}
													</td>
													<td>
														{customer.last_name}
													</td>

													{customer.contact.map(
														(cc) => (
															<td>{cc.email}</td>
														)
													)}

													<td>{customer.status}</td>
													<td>
														{customer.total_sites}
													</td>
													{customer.contact.map(
														(cc) => (
															<td>{cc.phone}</td>
														)
													)}
													<td>
														{TimeStampHelper.standardDateFormat(
															`${customer.created_at}`
														)}
													</td>
													<td>
														<div className="custom-control custom-switch">
															<input
																type="checkbox"
																className="custom-control-input"
																id={
																	"customSwitches-" +
																	customer.id
																}
																checked={
																	this.state
																		.switch1
																}
																onChange={this.handleSwitchChange(
																	1
																)}
																readOnly
															/>
															<label
																className="custom-control-label"
																htmlFor={
																	"customSwitches-" +
																	customer.id
																}
															></label>
														</div>
													</td>

													<td className="text-center">
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
	};
};

export default connect(mapStateToProps)(CustomerListComponent);
