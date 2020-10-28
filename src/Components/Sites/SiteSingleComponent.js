import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "Components/Sidebar";
import SiteFirstAction from "Redux/V1/Sites/First/SiteFirstAction";
import TemplateMain from "Templates/TemplateMain";
import { Table } from "react-bootstrap";
import TimeStampHelper from "Helpers/TimeStampHelper";

class SiteSingleComponent extends Component {
	componentDidMount() {
		this.props.dispatch(
			SiteFirstAction.siteFirst(this.props.match.params.host)
		);
	}

	render() {
		const userData = this.props.site.user;
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="sites" />

					<div className="content content-components">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">
								Site Details
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
										<td>Site Name</td>
										<td>{this.props.site.name}</td>
									</tr>
									<tr>
										<td>Host</td>
										<td>{this.props.site.host}</td>
									</tr>
									<tr>
										<td>Site Type</td>
										<td>{this.props.site.site_type}</td>
									</tr>
									<tr>
										<td>Create At</td>
										<td>
											{TimeStampHelper.standardDateFormat(
												this.props.site.created_at
											)}
										</td>
									</tr>
									<tr>
										<td>Flag</td>
										<td>{this.props.site.flag}</td>
									</tr>
									<tr>
										<td>location</td>
										<td></td>
									</tr>
									<tr>
										<td>IP Address</td>
										<td></td>
									</tr>
								</tbody>
							</Table>


							<h4 className="tx-color-01 mg-b-15 mt-4">
								Customer Details
							</h4>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Email</th>
										<th>Status</th>
										<th>Created At</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{userData.first_name}</td>
										<td>{userData.last_name}</td>
										<td>{userData.email}</td>
										<td>{userData.status}</td>
										<td>
											{TimeStampHelper.standardDateFormat(
												userData.created_at
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
		site: state.site_first.site,
	};
};

export default connect(mapStateToProps)(SiteSingleComponent);
