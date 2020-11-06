import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import SitesAction from "Redux/V1/Sites/Details/Get/SiteGetAction";
import SitesFilterAction from "Redux/V1/Sites/Details/Filter/SiteFilterAction";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import queryString from 'query-string'
import FilterForm from "Components/Forms/FilterForm";
import OneClickLoginAction from "Redux/V1/Sites/OneClickLogin/OneClickLoginAction";

class SiteListComponent extends Component {
	componentDidMount() {
		const value = queryString.parse(this.props.location.search);
		this.props.dispatch(SitesAction.getSites());
		this.props.dispatch(SitesFilterAction.filterSites(value));
	}
	quickLogin = (e) => {
		const identity = e.target.getAttribute("data-identity");
		this.props.dispatch(OneClickLoginAction.getOneClickLogin(identity));
	};

	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="sites" />

					<div className="content content-components">
						<div className="container">

							<FilterForm
								fields={
									[
										'site_customer_name',
										'site_name',
										'site_domain',
										'site_date',
									]
								}
							/>

							<h4 className="page-header mg-b-15">Sites List</h4>
							<div className="user-list-page">

								<Table striped bordered hover>
									<thead>
										<tr>
											<th>Customer Name</th>
											<th>Identity</th>
											<th>Domain</th>
											<th>Quick Login</th>
											<th>Ip Address</th>
											<th>Type</th>
											<th>Created At</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{this.props.site_filter.map((site) => (
											<tr>
												<td>
													<a
														target="_blank"
														rel="noopener noreferrer"
														href={
															"/customer/" +
															site.user.id
														}
													>
														{site.user.first_name}{" "}{site.user.last_name}
													</a>
												</td>

												<td>
													<a
														target="_blank"
														rel="noopener noreferrer"
														href={
															"/site/" + site.host
														}>
														{site.container.identity}
													</a>
												</td>

												<td>
													<a
														target="_blank"
														rel="noopener noreferrer"
														href={
															"https://" + site.container
																.primary_domain_name
														}>
														{
															site.container
																.primary_domain_name
														}
														<FontAwesomeIcon
															icon={faExternalLinkAlt}
															className="ml-2"
														/>
													</a>
												</td>
												<td className="text-center">
													<img
														src="/assets/img/Wordpress.png"
														alt="wordpresswhite"
														className="site-wordpress"
														data-identity={site.container.identity}
														onClick={(e) => this.quickLogin(e)}
													/>

												</td>
												<td>{site.container
													.public_ip}</td>
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
		site_filter: state.site_filter.sites,
	};
};

export default connect(mapStateToProps)(SiteListComponent);
