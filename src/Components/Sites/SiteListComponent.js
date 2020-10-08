import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import SitesAction from "Redux/V1/Sites/Get/SiteGetAction";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

class SiteListComponent extends Component {
	componentDidMount() {
		this.props.dispatch(SitesAction.getSites());
	}

	render() {
		// let siteUser;
		// const siteData = this.props.sites.user;
		// if (siteUser) {
		// 	siteUser = siteData.map((site) => {
		// 		return <React.Fragment>{site.first_name}</React.Fragment>;
		// 	});
		// }
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="sites" />

					<div className="content content-components">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">Sites List</h4>
							<div className="user-list-page">
								<Table striped bordered hover>
									<thead>
										<tr className="text-center">
											{/* <th>User</th> */}
											<th>Name</th>
											<th>Host</th>
											<th>Type</th>
											<th>Created At</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{this.props.sites.map((site) => (
											<tr>
												{/* {site.user.map((usr) => (
													<td>{usr.last_name}</td>
												))} */}

												<td>{site.name}</td>
												<td>{site.host}</td>
												<td>{site.site_type}</td>
												<td>
													{TimeStampHelper.standardDateFormat(
														`${site.created_at}`
													)}
												</td>
												<td className="text-center">
													<a
														href={
															"/site/" + site.host
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
		sites: state.sites.sites,
	};
};

export default connect(mapStateToProps)(SiteListComponent);
