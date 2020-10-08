import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import SitesAction from "Redux/V1/Sites/Get/SiteGetAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

class SiteListComponent extends Component {
	componentDidMount() {
		this.props.dispatch(SitesAction.getSites());
	}

	render() {
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
											<th>Site Name</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											{/* {this.props.sites.map((site) => (
												<td>{site.name}Site Name</td>
											))} */}
											<td>Site Name</td>
											<td className="text-center">
												<a
													href="/"
													className="btn btn-link"
													title="View"
												>
													<FontAwesomeIcon
														icon={faEye}
													/>
												</a>
											</td>
										</tr>
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
