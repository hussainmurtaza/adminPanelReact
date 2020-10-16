import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import InvoicesAction from "Redux/V1/Invoices/Get/InvoiceGetAction";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

class InvoiceListComponent extends Component {
	componentDidMount() {
		this.props.dispatch(InvoicesAction.getInvoices());
	}

	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="invoices" />

					<div className="content content-components">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">Invoice List</h4>
							<div className="user-list-page">
								<Table striped bordered hover>
									<thead>
										<tr>
											<th>Invoice Number</th>
											<th>Amount</th>
											<th>Invoice Month</th>
											<th>Status</th>
											<th className="text-center">Action</th>
										</tr>
									</thead>
									<tbody>
										{this.props.invoices.map((invoice) => (
											<tr>
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
	};
};

export default connect(mapStateToProps)(InvoiceListComponent);
