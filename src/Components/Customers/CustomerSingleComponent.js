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
		let customerEmail,
			customerPhone,
			customerInvoice,
			customerBilling,
			customerSites;
		const customerData = this.props.customer.contact;
		const customerInvoicesData = this.props.customer.invoices;
		const customerBilingsData = this.props.customer.billing_information;
		const customerSitesData = this.props.customer.sites;
		if (customerData) {
			customerEmail = customerData.map((contact) => {
				return <React.Fragment>{contact.email}</React.Fragment>;
			});
			customerPhone = customerData.map((contact) => {
				return <React.Fragment>{contact.phone}</React.Fragment>;
			});
			customerSites = customerSitesData.map((site) => {
				return (
					<React.Fragment>
						<tr>
							<td>{site.name}</td>
							<td>{site.host}</td>
							<td>{site.site_type}</td>
							<td>{site.flag}</td>
							<td>
								{TimeStampHelper.standardDateFormat(
									site.created_at
								)}
							</td>
						</tr>
					</React.Fragment>
				);
			});
			customerBilling = customerBilingsData.map((billing) => {
				return (
					<React.Fragment>
						<tr>
							<td>
								{TimeStampHelper.standardDateFormat(
									billing.billing_start_date
								)}
							</td>
							<td>
								{TimeStampHelper.standardDateFormat(
									billing.billing_last_date
								)}
							</td>
							<td>
								{TimeStampHelper.standardDateFormat(
									billing.billing_next_date
								)}
							</td>
							<td>
								{TimeStampHelper.standardDateFormat(
									billing.payment_last_date
								)}
							</td>
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
							<td>
								{TimeStampHelper.standardDateFormat(
									invoice.created_at
								)}
							</td>
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
								</tbody>
							</Table>

							<h4 className="tx-color-01 mg-b-15 mt-4">Billing Information</h4>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Billing Start Date</th>
										<th>Billing Last Date</th>
										<th>Billing Next Date</th>
										<th>Payment Last Date</th>
									</tr>
								</thead>
								{customerBilling}
							</Table>

							<h4 className="tx-color-01 mg-b-15 mt-4">Sites</h4>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Name</th>
										<th>Host</th>
										<th>Type</th>
										<th>Flag</th>
										<th>Created At</th>
									</tr>
								</thead>
								<tbody>{customerSites}</tbody>
							</Table>

							<h4 className="tx-color-01 mg-b-15 mt-4">Invoices</h4>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Reference</th>
										<th>Amount</th>
										<th>Status</th>
										<th>created At</th>
									</tr>
								</thead>
								<tbody>{customerInvoice}</tbody>
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
