import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

class MigrationListComponent extends Component {

	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="migrations" />

					<div className="content content-components">
						<div className="container">

							<h4 className="tx-color-01 mg-b-15">Migration Data</h4>
							<div className="user-list-page">
								<Table striped bordered hover>
									<thead>
										<tr>
											<th>Customer</th>
											<th>Migration ID</th>
											<th>Date</th>
											<th>Status</th>
											<th className="text-center">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<a
													href="/customer/175"
													target="_blank"
													rel="noopener noreferrer"
												>
													Khizar
												</a>
											</td>
											<td>1211-1111</td>
											<td>Oct 26, 2020</td>
											<td>Pending</td>
											<td className="text-center">
												<a
													href={
														"/migration/1"
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

export default connect(mapStateToProps)(MigrationListComponent);
