import React, { Component } from "react";
import Sidebar from "Components/Sidebar";
import Table from "react-bootstrap/Table";
import TemplateMain from "Templates/TemplateMain";
import { connect } from "react-redux";
import DataCentersAction from "Redux/V1/DataCenters/Get/DataCenterGetAction";
import DataCenterDeleteAction from "Redux/V1/DataCenters/Delete/DataCenterDeleteAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import TimeStampHelper from "Helpers/TimeStampHelper";

class DataCenterListComponent extends Component {
	componentDidMount() {
		this.props.dispatch(DataCentersAction.getDataCenters());
	}
	dataCenterDelete = (id) => {
		this.props.dispatch(DataCenterDeleteAction.deleteDataCenter(id));
	};
	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="datacenters" />
					<div className="content content-components datacenter-page">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">
								All Data Centers
							</h4>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Name</th>
										<th>Provider Name</th>
										<th>Status</th>
										<th>Created At</th>
										<th className="text-center">Actions</th>
									</tr>
								</thead>
								<tbody>
									{this.props.data_centers.map(
										(datacenter) => (
											<tr>
												<td>{datacenter.location}</td>
												<td>
													{datacenter.provider_name}
												</td>
												<td>{datacenter.status}</td>
												<td>
													{TimeStampHelper.standardDateFormat(
														`${datacenter.created_at}`
													)}
												</td>
												<td className="text-center">
													<a
														href={
															"/datacenter/" +
															datacenter.id
														}
														className="btn btn-link"
														title="View"
													>
														<FontAwesomeIcon
															icon={faEye}
														/>
													</a>
													<a
														href={
															"/update-datacenter/" +
															datacenter.id
														}
														className="btn btn-link"
														title="Edit"
													>
														<FontAwesomeIcon
															icon={faPencilAlt}
														/>
													</a>
													<button
														className="btn btn-link text-danger"
														title="Delete"
														onClick={() =>
															this.dataCenterDelete(
																datacenter.id
															)
														}
													>
														<FontAwesomeIcon
															icon={faTrash}
														/>
													</button>
												</td>
											</tr>
										)
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
		data_centers: state.data_centers.data_centers,
	};
};

export default connect(mapStateToProps)(DataCenterListComponent);
