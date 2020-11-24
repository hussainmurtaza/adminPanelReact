import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "Components/Sidebar";
import SiteFirstAction from "Redux/V1/Sites/Details/First/SiteFirstAction";
import TemplateMain from "Templates/TemplateMain";
import { Table, Row, Col, Button } from "react-bootstrap";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import SiteUpdateComponent from "Components/Sites/SiteUpdateComponent";
import OneClickLoginAction from "Redux/V1/Sites/OneClickLogin/OneClickLoginAction";

class SiteSingleComponent extends Component {
	componentDidMount() {
		this.props.dispatch(
			SiteFirstAction.siteFirst(this.props.match.params.host)
		);
	}
	quickLogin = (e) => {
		const identity = e.target.getAttribute("data-identity");
		this.props.dispatch(OneClickLoginAction.getOneClickLogin(identity));
	};

	render() {
		const site = this.props.site;
		const userData = this.props.site.user;
		const serverDetail = this.props.site.server_details;
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="sites" />

					<div className="content content-components">
						<div className="container">
							<Row className="align-items-center">
								<Col>
								<h4 className="page-header">
									Site Details
								</h4>
								</Col>
								<Col className="text-right mb-3 site-button">
									<a
										className="btn-brand-02 btn btn-primary"
										href={serverDetail.monit}
										target="
											_blank"
									>
										<i data-feather="monitor"></i> Monit
									</a>{" "}
									<Button
									className="btn-brand-02" 
									data-identity={this.props.site.container.identity}
									onClick={(e) => this.quickLogin(e)}
									>
									<img
										src="/assets/img/Wordpress-white.png"
										alt="wordpresswhite"
									/>{" "}
									WP Admin
								</Button>
							</Col>
							</Row>
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
										<td>{site.name}</td>
									</tr>
									<tr>
										<td>Host</td>
										<td>
											<a
												target="
													_blank"
												href={
													"https://" +
													this.props.site
														.primary_domain
												}
											>
												{this.props.site.primary_domain}
												<FontAwesomeIcon
													icon={faExternalLinkAlt}
													className="ml-2"
												/>
											</a>
										</td>
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
										<td>Location</td>
										<td>{serverDetail.location}</td>
									</tr>
									<tr>
										<td>IP Address</td>
										<td>{serverDetail.ip_address}</td>
									</tr>
								</tbody>
							</Table>

							<h4 className="page-header mg-b-15 mt-4">
								Customer Details
							</h4>
							<Table
								striped
								bordered
								hover
								className="site-update-table"
							>
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

							<SiteUpdateComponent />
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
