import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "Components/Sidebar";
import InvoiceDetailsAction from "Redux/V1/Invoices/First/InvoiceFirstAction";
import TemplateMain from "Templates/TemplateMain";
import { Table } from "react-bootstrap";
import TimeStampHelper from "Helpers/TimeStampHelper";

class InvoiceSingleComponent extends Component {
	componentDidMount() {
		this.props.dispatch(
			InvoiceDetailsAction.invoiceDetail(this.props.match.params.id)
		);
	}

	render() {
		const invoiceData = this.props.invoice.customer;
		const invoiceEmail = this.props.invoice.customer.contact;
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="invoices" />

					<div className="content content-components">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">
								Invoice Details
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
										<td>Invoice Number</td>
										<td>{this.props.invoice.reference}</td>
									</tr>
									<tr>
										<td>Issue Date</td>
										<td>
											{TimeStampHelper.standardDateFormat(
												this.props.invoice.created_date
											)}
										</td>
									</tr>
									<tr>
										<td>Status</td>
										<td>{this.props.invoice.status}</td>
									</tr>
									<tr>
										<td>Sub Total</td>
										<td>$ {this.props.invoice.amount_gross}</td>
									</tr>
									<tr>
										<td>Discount</td>
										<td>$ {this.props.invoice.amount_discount}</td>
									</tr>
									<tr>
										<td>Total</td>
										<td>$ {this.props.invoice.amount_net}</td>
									</tr>
								</tbody>
							</Table>

							<h4 className="tx-color-01 mg-b-15">
								Customer Details
							</h4>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Email</th>
										<th>Total Sites</th>
										<th>Status</th>
										<th>Created At</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{invoiceData.first_name}</td>
										<td>{invoiceData.last_name}</td>
										<td>{invoiceEmail[0]['email']}</td>
										<td>{invoiceData.total_sites}</td>
										<td>{invoiceData.status}</td>
										<td>
											{TimeStampHelper.standardDateFormat(
												invoiceData.created_at
											)}
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
		invoice: state.invoice_first.invoice,
	};
};

export default connect(mapStateToProps)(InvoiceSingleComponent);
