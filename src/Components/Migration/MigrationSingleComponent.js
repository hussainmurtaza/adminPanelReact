import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import { Table } from "react-bootstrap";
import MigrationFirstAction from "Redux/V1/Migration/First/MigrationFirstAction";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import MigrationFormComponent from "Components/Migration/Forms/MigrationFormComponent";
import Capitilize from "Helpers/CapitilizeHelper";

class MigrationSingleComponent extends Component {
	componentDidMount() {
		this.props.dispatch(
			MigrationFirstAction.migrationFirst(this.props.match.params.id)
		);
	}
	render() {
		const customerData = this.props.migration.customer;
		let siteData;
		if (this.props.migration.site === null) {
			siteData = "";
		} else {
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

							<MigrationFormComponent
								dispatch={this.props.dispatch}
							/>

							<h4 className="tx-color-01 mg-b-15 mt-5">
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
										<td>
											{Capitilize.capital(
												`${customerData.status}`
											)}
										</td>
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
									{this.props.migration.site === null ? (
										<td colspan="100%">
											No Date Available
										</td>
									) : (
										<tr>
											<td>{siteData.name}</td>
											<td>
												<a
													target="
													_blank"
													href={
														"https://" +
														siteData.host
													}
												>
													{siteData.host}
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
									)}
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
