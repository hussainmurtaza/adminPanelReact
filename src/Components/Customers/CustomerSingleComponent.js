import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import Sidebar from "Components/Sidebar";
import CustomerDetailsAction from "Redux/V1/Customers/First/CustomerFirstAction";
import TemplateMain from "Templates/TemplateMain";
import TimeStampHelper from "Helpers/TimeStampHelper";

class CustomerSingleComponent extends Component {
	state = {
		id: "",
	};

	componentDidMount() {
		this.props.dispatch(
			CustomerDetailsAction.customerDetail(this.props.match.params.id)
		);
	}

	render() {
		let customerEmail, customerPhone, customerInvoice, customerBilling;
		const customerData = this.props.customer.contact;
		const customerInvoicesData = this.props.customer.invoices;
		const customerBilingsData = this.props.customer.billing_information;
		//const customerSitesData = this.props.customer.sites;
		if (customerData) {
			customerEmail = customerData.map((contact) => {
				return <React.Fragment>{contact.email}</React.Fragment>;
			});
			customerPhone = customerData.map((contact) => {
				return <React.Fragment>{contact.phone}</React.Fragment>;
			});
			// customerSites = customerSitesData.map((site) => {
			// 	return <React.Fragment>{site.status}</React.Fragment>;
			// });
			customerBilling = customerBilingsData.map((billing) => {
				return (
					<React.Fragment>
						<tr>
							<td>{billing.billing_start_date}</td>
							<td>{billing.billing_last_date}</td>
							<td>{billing.billing_next_date}</td>
							<td>{billing.payment_last_date}</td>
							<td>{billing.payment_credit_limit}</td>
							<td>{billing.payment_net_amount}</td>
						</tr>
					</React.Fragment>
				);
			});
			customerInvoice = customerInvoicesData.map((invoice) => {
				return (
					<React.Fragment>
						<tr>
							<td>{invoice.reference}</td>
							<td>{invoice.amount_net}</td>
							<td> {invoice.status}</td>
						</tr>
					</React.Fragment>
				);
			});
		}
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="customers" />

					<div className="content content-components">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">Update User</h4>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Field</th>
										<th>Value</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>First Name</td>
										<td>
											{this.props.customer.first_name}
										</td>
									</tr>
									<tr>
										<td>Last Name</td>
										<td>{this.props.customer.last_name}</td>
									</tr>
									<tr>
										<td>Email</td>
										<td>{customerEmail}</td>
									</tr>
									<tr>
										<td>Status</td>
										<td>{this.props.customer.status}</td>
									</tr>
									<tr>
										<td>Phone</td>
										<td>{customerPhone}</td>
									</tr>
									<tr>
										<td>Created At</td>
										<td>
											{TimeStampHelper.standardDateFormat(
												this.props.customer.created_at
											)}
										</td>
									</tr>
									<tr>
										<td>Persona</td>
										<td>{this.props.customer.persona}</td>
									</tr>
									<tr>
										<td>Sites</td>
										<td></td>
									</tr>
									<tr>
										<td>Billing Information</td>
										<td>{customerBilling}</td>
									</tr>
									<tr>
										<td>Invoices</td>
										<td>
											<thead>
												<tr>
													<th>Reference no</th>
													<th>Amount</th>
													<th>status</th>
												</tr>
											</thead>
											{customerInvoice}
										</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</div>
				</TemplateMain>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		customer: state.customer_first.customer,
	};
};

export default connect(mapStateToProps)(CustomerSingleComponent);
