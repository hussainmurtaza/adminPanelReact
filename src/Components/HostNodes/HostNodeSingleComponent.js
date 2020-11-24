import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import { connect } from "react-redux";
import HostNodeFirstAction from "Redux/V1/HostNodes/First/HostNodeFirstAction";
import TemplateMain from "Templates/TemplateMain";
import TimeStampHelper from "Helpers/TimeStampHelper";

class HostNodeSingleComponent extends Component {
	componentDidMount() {
		this.props.dispatch(
			HostNodeFirstAction.hostNodeFirst(this.props.match.params.id)
		);
	}
	render() {
		const hostnode = this.props.hostnode;
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="hostnodes" />
					<div className="content content-components">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">
								Host Node Details
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
										<td>Data Center Name</td>
										<td>{hostnode.location}</td>
									</tr>
									<tr>
										<td>Public IP</td>
										<td>{hostnode.public_ip}</td>
									</tr>
									<tr>
										<td>Private IP</td>
										<td>{hostnode.private_ip}</td>
									</tr>
									<tr>
										<td>Status</td>
										<td>{hostnode.status}</td>
									</tr>
									<tr>
										<td>CPU</td>
										<td>{hostnode.cpu}</td>
									</tr>
									<tr>
										<td>Bandwidth</td>
										<td>{hostnode.bandwidth}</td>
									</tr>
									<tr>
										<td>Identity</td>
										<td>{hostnode.identity}</td>
									</tr>
									<tr>
										<td>Server</td>
										<td>{hostnode.server}</td>
									</tr>
									<tr>
										<td>Available Bandwith</td>
										<td>{hostnode.available_bandwith}</td>
									</tr>
									<tr>
										<td>Available CPU</td>
										<td>{hostnode.available_cpu}</td>
									</tr>
									<tr>
										<td>Ram</td>
										<td>{hostnode.ram}</td>
									</tr>
									<tr>
										<td>Disk</td>
										<td>{hostnode.disk}</td>
									</tr>
									<tr>
										<td>Available Ram</td>
										<td>{hostnode.available_ram}</td>
									</tr>
									<tr>
										<td>Available Disk</td>
										<td>{hostnode.available_disk}</td>
									</tr>
									<tr>
										<td>Created At</td>
										<td>
											{TimeStampHelper.standardDateFormat(
												hostnode.created_at
											)}
										</td>
									</tr>
								</tbody>
							</Table>
							<div className="">
								<a
									href={"/hostnode-update/" + hostnode.id}
									className="btn btn-primary"
								>
									Edit Host Node
								</a>
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
		hostnode: state.hostnode_first.host_node,
	};
};

export default connect(mapStateToProps)(HostNodeSingleComponent);
