import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import MigrationsAction from "Redux/V1/Migration/Get/MigrationGetAction";
import TimeStampHelper from "Helpers/TimeStampHelper";

class MigrationListComponent extends Component {
	componentDidMount() {
		this.props.dispatch(MigrationsAction.getMigrations());
	}
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
											<th>Agency Name</th>
											<th>Domain</th>
											<th>Date</th>
											<th className="text-center">Action</th>
										</tr>
									</thead>
									<tbody>
										{this.props.migrations.map((migration) => (
											<tr>
												<td>
													<a
														href={
															"/customer/" +
															migration.customer.id
														}
														target="
															_blank"
													>
														{migration.customer.fullname}
													</a>
												</td>
												<td>{migration.agency_name}</td>
												<td>
													{migration.site === null ?
														""
														:
														<a
															target="
															_blank"
															href={
																"https://" + migration.site.host
															}
														>
															{migration.site.host}
															<FontAwesomeIcon
																icon={faExternalLinkAlt}
																className="ml-2"
															/>
														</a>
													}

												</td>

												<td>
													{TimeStampHelper.standardDateFormat(
														`${migration.created_at}`
													)}
												</td>
												<td className="text-center">
													<a
														href={
															"/migration/" + migration.id
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
		migrations: state.migrations.migrations,
	};
};

export default connect(mapStateToProps)(MigrationListComponent);
