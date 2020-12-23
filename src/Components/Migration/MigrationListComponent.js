import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Row, Col } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPencilAlt,
	faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import MigrationsAction from "Redux/V1/Migration/Get/MigrationGetAction";
import TimeStampHelper from "Helpers/TimeStampHelper";
import PaginationDropDown from "Components/Includes/DropDownComponent";
import PaginationNumber from "Components/Includes/PaginationComponent";
import Confirm from "Helpers/ConfirmationHelper";
import SingleSelectField from "Components/Forms/Fields/SingleSelectField";
import MigrationStatusAction from "Redux/V1/Migration/ToggleStatus/MigrationStatusAction";
import MIGRATIONOPTIONS from "Constants/MigrationOptions";

class MigrationListComponent extends Component {
	componentDidMount() {
		this.props.dispatch(MigrationsAction.getMigrations());
	}
	handleSelect = (id, e) => {
		const status = id + "?status=" + e.value;
		Confirm(
			this.props.dispatch,
			MigrationStatusAction.migrationStatus(status),
			"Migration status will be changed."
		);
	};
	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="migrations" />

					<div className="content content-components">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">
								Migration Data
							</h4>
							<div className="user-list-page">
								<Table striped bordered hover>
									<thead>
										<tr>
											<th>Customer</th>
											<th>Agency Name</th>
											<th>Domain</th>
											<th className="migration-status">
												Status
											</th>
											<th>Date</th>
											<th className="text-center">
												Action
											</th>
										</tr>
									</thead>
									<tbody>
										{this.props.migrations.map(
											(migration) => (
												<tr>
													<td>
														<a
															href={
																"/customer/" +
																migration
																	.customer.id
															}
															target="
															_blank"
														>
															{
																migration
																	.customer
																	.fullname
															}
														</a>
													</td>
													<td>
														<a
															href={
																"/migration/" +
																migration.id
															}
															target="
															_blank"
														>
															{
																migration.agency_name
															}
														</a>
													</td>
													<td>
														{migration.site ===
														null ? (
															""
														) : (
															<a
																target="
															_blank"
																href={
																	"https://" +
																	migration
																		.site
																		.host
																}
															>
																{
																	migration
																		.site
																		.host
																}
																<FontAwesomeIcon
																	icon={
																		faExternalLinkAlt
																	}
																	className="ml-2"
																/>
															</a>
														)}
													</td>
													<td className="migration-status">
														<SingleSelectField
															name="status"
															options={
																MIGRATIONOPTIONS
															}
															onChange={(e) =>
																this.handleSelect(
																	migration.id,
																	e
																)
															}
															placeholder="Enter Status"
															defaultValue={MIGRATIONOPTIONS.filter(
																(option) =>
																	option.value ===
																	migration.status
															)}
														/>
													</td>

													<td>
														{TimeStampHelper.standardDateFormat(
															`${migration.created_at}`
														)}
													</td>
													<td className="text-center">
														<a
															href={
																"/migration/" +
																migration.id
															}
															className="btn btn-link"
															title="Edit"
														>
															<FontAwesomeIcon
																icon={
																	faPencilAlt
																}
															/>
														</a>
													</td>
												</tr>
											)
										)}
									</tbody>
								</Table>
								<Row className="d-none">
									<Col md={4}>
										<PaginationDropDown title={"Sites"} />
									</Col>
									<Col md={4}>
										<PaginationNumber />
									</Col>
									<Col md={4}></Col>
								</Row>
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
