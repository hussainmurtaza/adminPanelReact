import React, { Component } from "react";
import Sidebar from "Components/Sidebar";
import Table from "react-bootstrap/Table";
import TemplateMain from "Templates/TemplateMain";
import "Assets/css/hostnode.css";
import { connect } from "react-redux";
import HostNodesAction from "Redux/V1/HostNodes/Get/HostNodeGetAction";
import HostNodeDeleteAction from "Redux/V1/HostNodes/Delete/HostNodeDeleteAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import HostNodeStatusAction from "Redux/V1/HostNodes/ToggleStatus/HostNodeStatusAction";
import Confirm from "Helpers/ConfirmationHelper";

class HostNodeListComponent extends Component {
	componentDidMount() {
		this.props.dispatch(HostNodesAction.getHostNodes());
	}
	hostNodeDelete = (id) => {
		//this.props.dispatch(HostNodeDeleteAction.deleteHostNode(id));
		Confirm(this.props.dispatch, HostNodeDeleteAction.deleteHostNode(id));
	};
	onSwitch = (id) => {
		this.props.dispatch(HostNodeStatusAction.hostNodeStatus(id));
	};
	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="hostnodes" />
					<div className="content content-components hostnode-page">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">
								All Host Nodes
							</h4>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Data Center Name</th>
										<th>Server</th>
										<th>Identity</th>
										<th>Public IP</th>
										<th className="hostnode-toggle">
											Status
										</th>
										<th className="actions">Action</th>
									</tr>
								</thead>
								<tbody>
									{this.props.hostnodes.map((hostnode) => (
										<tr>
											<td>{hostnode.location}</td>
											<td>{hostnode.server}</td>
											<td>{hostnode.identity}</td>
											<td>{hostnode.public_ip}</td>
											<td className="hostnode-toggle">
												{hostnode.status}
												<span className="custom-control custom-switch">
													<input
														type="checkbox"
														className="custom-control-input"
														id={
															"customSwitches" +
															hostnode.id
														}
														checked={
															hostnode.status ===
															"blocked"
																? true
																: false
														}
														onChange={() =>
															this.onSwitch(
																hostnode.id +
																	`?status=${
																		hostnode.status ===
																		"active"
																			? "blocked"
																			: "active"
																	}`
															)
														}
														readOnly
													/>

													<label
														className="custom-control-label"
														htmlFor={
															"customSwitches" +
															hostnode.id
														}
														data-toggle="tooltip"
														data-placement="top"
														title="Block/Unblock HostNode"
													></label>
												</span>
											</td>
											<td className="actions">
												<a
													href={
														"/hostnode/" +
														hostnode.id
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
														"/hostnode-update/" +
														hostnode.id
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
														this.hostNodeDelete(
															hostnode.id
														)
													}
												>
													<FontAwesomeIcon
														icon={faTrash}
													/>
												</button>
											</td>
										</tr>
									))}
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
		hostnodes: state.hostnodes.host_nodes,
	};
};

export default connect(mapStateToProps)(HostNodeListComponent);
