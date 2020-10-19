import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import SitesAction from "Redux/V1/Sites/Get/SiteGetAction";
import SitesFilterAction from "Redux/V1/Sites/Filter/SiteFilterAction";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import queryString from 'query-string'
import SiteFilterForm from "Components/Forms/SiteFilterForm";

class SiteListComponent extends Component {
	componentDidMount() {
		const value = queryString.parse(this.props.location.search);
		this.props.dispatch(SitesAction.getSites());
		this.props.dispatch(SitesFilterAction.filterSites(value));
	}

	render() {
		const site_name = this.props.sites.map(function (site) {
			return { value: site.name, label: site.name };
		});
		const identity = this.props.sites.map(function (site) {
			return { value: site.container.identity, label: site.container.identity };
		});
		const date = this.props.sites.map(function (site) {
			return { value: site.created_at, label: site.created_at };
		});


		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="sites" />

					<div className="content content-components">
						<div className="container">

							<SiteFilterForm
								site_name={site_name}
								identity={identity}
								date={date}
							/>

							<h4 className="tx-color-01 mg-b-15">Sites List</h4>
							<div className="user-list-page">
								<Table striped bordered hover>
									<thead>
										<tr>
											{/* <th>User</th> */}
											<th>WP Title</th>
											<th>Identity</th>
											<th>Domain</th>
											<th>Type</th>
											<th>Created At</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{this.props.site_filter.map((site) => (
											<tr>
												<td>{site.name}</td>
												<td>
													{site.container.identity}
												</td>

												<td>
													{
														site.container
															.primary_domain_name
													}
												</td>
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
