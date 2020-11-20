import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import { Table } from "react-bootstrap";
import MigrationFirstAction from "Redux/V1/Migration/First/MigrationFirstAction";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

class MigrationSingleComponent extends Component {
	componentDidMount() {
		this.props.dispatch(
			MigrationFirstAction.migrationFirst(this.props.match.params.id)
		);
	}
	render() {
		const migration = this.props.migration;
		const customerData = this.props.migration.customer;
		let siteData;
		if (this.props.migration.site === null) {
			siteData = "";
		}
		else {
			siteData = this.props.migration.site;
		}
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="migrations" />

					<div className="content content-components migration-table">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">
								Migration Details
							</h4>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th width="50%">Field</th>
										<th width="50%">Value</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Agency Name</td>
										<td>{migration.agency_name}</td>
									</tr>
									<tr>
										<td>Wordpress Admin User</td>
										<td>{migration.wp_admin_user}</td>
									</tr>
									<tr>
										<td>Wordpress Admin Password</td>
										<td>{migration.wp_admin_password}</td>
									</tr>
									<tr>
										<td>Custom WP-Admin URL</td>
										<td>{migration.wp_admin_url}</td>
									</tr>
									<tr>
										<td>Domain Register Url</td>
										<td>{migration.domain_register_url}</td>
									</tr>
									<tr>
										<td>Domain Register Username</td>
										<td>{migration.domain_register_username}</td>
									</tr>
									<tr>
										<td>Domain Register Password</td>
										<td>{migration.domain_register_password}</td>
									</tr>
									<tr>
										<td>Current Host Name</td>
										<td>{migration.current_host_name}</td>
									</tr>
									<tr>
										<td>Current Host Username</td>
										<td>{migration.current_host_username}</td>
									</tr>
									<tr>
										<td>Current Host Password</td>
										<td>{migration.current_host_password}</td>
									</tr>
									<tr>
										<td>ftp/sftp</td>
										<td>{migration.transfer_protocol}</td>
									</tr>
									<tr>
										<td>Port</td>
										<td>{migration.port}</td>
									</tr>
									<tr>
										<td>Host Location</td>
										<td>{migration.host_location}</td>
									</tr>
									<tr>
										<td>Username</td>
										<td>{migration.username}</td>
									</tr>
									<tr>
										<td>Password</td>
										<td>{migration.password}</td>
									</tr>
									<tr>
										<td>How did you hear about us ?</td>
										<td>{migration.hear_about_us}</td>
									</tr>
									<tr>
										<td>Would you like to put your site on our staging enviroment first ?</td>
										<td>
											{
												migration.on_staging === false
													? "No"
													: "Yes"
											}
										</td>
									</tr>
									<tr>
										<td>Is this site a multisite?</td>
										<td>
											{migration.multisite === true ?
												"Yes"
												:
												"No"
											}
										</td>
									</tr>
									<tr>
										<td>Are there any important directories in the root?</td>
										<td>
											{migration.directories === null
												? "No"
												: migration.directories
											}
										</td>
									</tr>
									<tr>
										<td>Created Date</td>
										<td>{TimeStampHelper.standardDateFormat(
											migration.created_at
										)}</td>
									</tr>

								</tbody>
							</Table>

							<h4 className="tx-color-01 mg-b-15">
								Customer Details
							</h4>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Name</th>
										<th>Email</th>
										<th>Total Sites</th>
										<th>Status</th>
										<th>Created At</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{customerData.fullname}</td>
										<td>{customerData.email}</td>
										<td>{customerData.total_sites}</td>
										<td>{customerData.status}</td>
										<td>
											{TimeStampHelper.standardDateFormat(
												customerData.created_at
											)}
										</td>
									</tr>
								</tbody>
							</Table>

							<h4 className="tx-color-01 mg-b-15">
								Site Details
							</h4>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Name</th>
										<th>Host</th>
										<th>Flag</th>
										<th>Site Type</th>
										<th>Created At</th>
									</tr>
								</thead>
								<tbody>
									{this.props.migration.site === null ?
										<td colspan="100%">No Date Available</td>
										:
										<tr>
											<td>{siteData.name}</td>
											<td>
												<a
													target="
													_blank"
													href={
														"https://" + siteData.host
													}>
													{
														siteData.host
													}
													<FontAwesomeIcon
														icon={faExternalLinkAlt}
														className="ml-2"
													/>
												</a>
											</td>
											<td>{siteData.flag}</td>
											<td>{siteData.site_type}</td>
											<td>
												{TimeStampHelper.standardDateFormat(
													siteData.created_at
												)}
											</td>
										</tr>
									}

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
		migration: state.migration_first.migration,
	};
};

export default connect(mapStateToProps)(MigrationSingleComponent);
