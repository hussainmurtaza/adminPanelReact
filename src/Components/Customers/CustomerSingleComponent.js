import React, { Component } from "react";
import { Table, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";
import Sidebar from "Components/Sidebar";
import CustomerFirstAction from "Redux/V1/Customers/First/CustomerFirstAction";
import TemplateMain from "Templates/TemplateMain";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Col } from "react-bootstrap";
// import SingleSelectField from "Components/Forms/Fields/SingleSelectField";
import AsyncSelectField from "Components/Forms/Fields/AsyncSelectField";
import Confirm from "Helpers/ConfirmationHelper";
import ChangeAffiliateAction from "Redux/V1/Customers/AffiliateAssign/AffiliatePutAction";
import Capitilize from "Helpers/CapitilizeHelper";

class CustomerSingleComponent extends Component {
	state = {
		id: "",
		default_affiliate: {
			value: null,
			label: null,
			fetched: false,
		},
	};
	// constructor(props) {
	// 	super(props);
	// 	this.props.dispatch(
	// 		CustomerFirstAction.customerFirst(this.props.match.params.id)
	// 	);
	// }
	componentDidMount() {
		this.props.dispatch(
			CustomerFirstAction.customerFirst(this.props.match.params.id)
		);
	}
	setDefaultData = () => {
		let { default_affiliate } = this.state;
		if (default_affiliate.fetched === false) {
			setTimeout(() => {
				default_affiliate.value = this.props.affiliate.id
					? this.props.affiliate.id
					: null;
				default_affiliate.label = this.props.affiliate.first_name
					? `${this.props.affiliate.id} - ${this.props.affiliate.first_name}
                      ${this.props.affiliate.last_name}(${this.props.affiliate.email})`
					: "Search Affiliate";
				if (default_affiliate.value !== null) {
					default_affiliate.fetched = true;
					this.setState({
						default_affiliate,
					});
				}
			}, 200);
		}
	};

	affiliateChangeFunction = () => {
		const data = {
			customer_id: this.props.match.params.id,
			affiliate_id: this.state.id,
		};
		Confirm(
			this.props.dispatch,
			ChangeAffiliateAction.affiliatePut(data),
			"You want to change customer's affiliate?"
		);
	};
	customerGetFunction = (data) => {
		this.setState({
			id: data.value,
		});
	};

	render() {
		this.setDefaultData();
		let customerEmail,
			customerPhone,
			customerInvoice1,
			customerInvoice,
			customerBilling1,
			customerBilling,
			customerSites1,
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
			customerSites1 = customerSitesData.map((site) => {
				return (
					<React.Fragment>
						<tr>
							<td>{site.name}</td>
							<td>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={"https://" + site.primary_domain}
								>
									{site.primary_domain}
									<FontAwesomeIcon
										icon={faExternalLinkAlt}
										className="ml-2"
									/>
								</a>
							</td>
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
			if (customerSites1.length === 0) {
				customerSites = <td colspan="100%">No Date Available</td>;
			} else {
				customerSites = customerSites1;
			}
			customerBilling1 = customerBilingsData.map((billing) => {
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
			if (customerBilling1.length === 0) {
				customerBilling = <td colspan="100%">No Date Available</td>;
			} else {
				customerBilling = customerBilling1;
			}
			customerInvoice1 = customerInvoicesData.map((invoice) => {
				return (
					<React.Fragment>
						<tr>
							<td>{invoice.reference}</td>
							<td>$ {invoice.amount_net}</td>
							<td>{Capitilize.capital(invoice.status)}</td>
							<td>
								{TimeStampHelper.standardDateFormat(
									invoice.created_at
								)}
							</td>
						</tr>
					</React.Fragment>
				);
			});
			if (customerInvoice1.length === 0) {
				customerInvoice = <td colspan="100%">No Date Available</td>;
			} else {
				customerInvoice = customerInvoice1;
			}
		}
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="customers" />

					<div className="content content-components">
						<div className="container">
							<h4 className="page-header mg-b-15">
								Customer Details
							</h4>
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
										<td>
											{Capitilize.capital(
												`${this.props.customer.status}`
											)}
										</td>
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

							<h4 className="page-header mg-b-15 mt-4">
								Affiliates Details
							</h4>
							<Row className="affiliate-label-hide w-100 m-0 no-gutters">
								<Col lg={10} xs={12}>
									<AsyncSelectField
										className="mt-1"
										isMulti={false}
										name="customers"
										dispatch={this.props.dispatch}
										placeholder={"Search Affiliates"}
										customerGet={this.customerGetFunction}
										defaultValue={
											this.state.default_affiliate
										}
										customerId={this.props.match.params.id}
									/>
								</Col>
								<Col lg={2} xs={12} className="text-right pl-2">
									<Button
										type="submit"
										variant="primary"
										className="btn-block mt-1"
										onClick={this.affiliateChangeFunction}
									>
										Change Affiliate
									</Button>{" "}
								</Col>
							</Row>

							<h4 className="page-header mg-b-15 mt-4">
								Billing Information
							</h4>
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

							<h4 className="page-header mg-b-15 mt-4">Sites</h4>
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

							<h4 className="page-header mg-b-15 mt-4">
								Invoices
							</h4>
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
		affiliate: state.customer_first.affiliate,
		customerReponse: state.customer_first,
	};
};

export default connect(mapStateToProps)(CustomerSingleComponent);
