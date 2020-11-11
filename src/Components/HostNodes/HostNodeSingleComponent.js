import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import { connect } from "react-redux";
import HostNodeFirstAction from "Redux/V1/HostNodes/First/HostNodeFirstAction";
import TemplateMain from "Templates/TemplateMain";

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
					<Sidebar active="roles" />
					<div className="content content-components">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">HostNode Details</h4>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Field</th>
										<th>Value</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Data Center Id</td>
										<td>{hostnode.data_center_id}</td>
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
		hostnode: state.hostnode_first.host_node,
	};
};

export default connect(mapStateToProps)(HostNodeSingleComponent);
