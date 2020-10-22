import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import InvoicesAction from "Redux/V1/Invoices/Get/InvoiceGetAction";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import FilterForm from "Components/Forms/FilterForm";
import queryString from 'query-string';
import InvoiceFilterAction from "Redux/V1/Invoices/Filter/InvoiceFilterAction";

class InvoiceListComponent extends Component {
	componentDidMount() {
		const value = queryString.parse(this.props.location.search);
		this.props.dispatch(InvoicesAction.getInvoices());
		this.props.dispatch(InvoiceFilterAction.filterInvoices(value));
	}

	render() {
		const customer = this.props.invoices.map(function (invoice) {
			return { value: invoice.customer.fullname, label: invoice.customer.fullname };
		});
		const invoiceNumber = this.props.invoices.map(function (invoice) {
			return { value: invoice.reference, label: invoice.reference };
		});
		const status = [
			{ value: 'paid', label: 'Paid' },
			{ value: 'pending', label: 'Pending' },
			{ value: 'overdue', label: 'Overdue' }
		]
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="invoices" />

					<div className="content content-components">
						<div className="container">

							<FilterForm
								fields={
									[
										'invoice_customer_name',
										'invoice_number',
										'invoice_status',
										'invoice_date',
									]
								}
							/>
							{/* <FilterForm
								option1={customer}
								name1="full_name"
								placeholder1="Search By Name"
								option2={invoiceNumber}
								name2="reference"
								placeholder2="Search By Invoice Number"
								option3={status}
								name3="status"
								placeholder3="Search By Status"
								dateName="created_at"
								datePlaceholder="Search By Issue Date"
							/> */}

							<h4 className="tx-color-01 mg-b-15">Invoice List</h4>
							<div className="user-list-page">
								<Table striped bordered hover>
									<thead>
										<tr>
											<th>Customer</th>
											<th>Invoice Number</th>
											<th>Amount</th>
											<th>Issue Date</th>
											<th>Status</th>
											<th className="text-center">Action</th>
										</tr>
									</thead>
									<tbody>
										{this.props.invoice_filter.map((invoice) => (
											<tr>
												<td>
													<a
														href={
															"/customer/" +
															invoice.customer.id
														}
														target="
															_blank"
													>
														{invoice.customer.fullname}
													</a>
												</td>
												<td><a href={"/invoice/" + invoice.id}>{invoice.reference}</a></td>
												<td>$ {invoice.amount_net}</td>
												<td>
													{TimeStampHelper.standardDateFormat(
														`${invoice.created_at}`
													)}
												</td>
												<td>{invoice.status}</td>
												<td className="text-center">
													<a
														href={
															"/invoice/" + invoice.id
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
										))}
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
		invoices: state.invoices.invoices,
		invoice_filter: state.invoice_filter.invoices,
	};
};

export default connect(mapStateToProps)(InvoiceListComponent);
