import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "Components/Sidebar";
import SiteDetailsAction from "Redux/V1/Sites/First/SiteFirstAction";
import TemplateMain from "Templates/TemplateMain";
import { Table } from "react-bootstrap";
import TimeStampHelper from "Helpers/TimeStampHelper";

class SiteSingleComponent extends Component {
	componentDidMount() {
		//console.log(this.props.match.params.host);
		this.props.dispatch(
			SiteDetailsAction.siteDetail(this.props.match.params.host)
		);
	}

	render() {
		// let userDetails;
		// const userData = this.props.site.user;
		// console.log(userData, "User Data");
		// if (userData) {
		// 	userDetails = userData.map((cc) => {
		// 		return (
		// 			<React.Fragment>
		// 				<tr>
		// 					<td>{cc.email}</td>
		// 				</tr>
		// 			</React.Fragment>
		// 		);
		// 	});
		// }

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
										<td>Screen Shot</td>
										<td>{this.props.site.screen_shot}</td>
									</tr>
									<tr>
										<td>Flag</td>
										<td>{this.props.site.flag}</td>
									</tr>
								</tbody>
							</Table>

							<h2>User Details</h2>
							<Table striped bordered hover>
								<tbody></tbody>
							</Table>

							<h2>Containers</h2>
							<Table striped bordered hover>
								<tbody></tbody>
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
