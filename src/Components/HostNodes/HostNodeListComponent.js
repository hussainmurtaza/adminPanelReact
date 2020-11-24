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

class HostNodeListComponent extends Component {
	componentDidMount() {
		this.props.dispatch(HostNodesAction.getHostNodes());
	}
	hostNodeDelete = (id) => {
		this.props.dispatch(HostNodeDeleteAction.deleteHostNode(id));
	};
	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="hostnodes" />
					<div className="content content-components hostnode-page">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">All HostNodes</h4>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Data Center ID</th>
										<th>Server</th>
										<th>Identity</th>
										<th>Public IP</th>
										<th>Status</th>
										<th className="actions">Action</th>
									</tr>
								</thead>
								<tbody>
									{this.props.hostnodes.map((hostnode) => (
										<tr>
											<td>{hostnode.data_center_id}</td>
											<td>{hostnode.server}</td>
											<td>{hostnode.identity}</td>
											<td>{hostnode.public_ip}</td>
											<td>{hostnode.status}</td>
											<td className="actions">
												<a
													href={"/hostnode/" + hostnode.id}
													className="btn btn-link"
													title="View"
												>
													<FontAwesomeIcon
														icon={faEye}
													/>
												</a>
												<a
													href={
														"/update-hostnode/" +
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
														this.hostNodeDelete(hostnode.id)
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
