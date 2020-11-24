import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import { connect } from "react-redux";
import DataCenterFirstAction from "Redux/V1/DataCenters/First/DataCenterFirstAction";
import TemplateMain from "Templates/TemplateMain";
import TimeStampHelper from "Helpers/TimeStampHelper";

class DataCenterSingleComponent extends Component {
	componentDidMount() {
		this.props.dispatch(
			DataCenterFirstAction.dataCenterFirst(this.props.match.params.id)
		);
	}
	render() {
		const data_center = this.props.data_center;
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="datacenters" />
					<div className="content content-components">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">
								DataCenter Details
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
										<td>Location</td>
										<td>{data_center.location}</td>
									</tr>
									<tr>
										<td>Provider Name</td>
										<td>{data_center.provider_name}</td>
									</tr>
									<tr>
										<td>Default</td>
										<td>
											{data_center.default === "true"
												? "True"
												: "False"}
										</td>
									</tr>
									<tr>
										<td>Identity</td>
										<td>{data_center.identity}</td>
									</tr>
									<tr>
										<td>Status</td>
										<td>{data_center.status}</td>
									</tr>
									<tr>
										<td>Created Date</td>
										<td>
											{TimeStampHelper.standardDateFormat(
												data_center.created_at
											)}
										</td>
									</tr>
								</tbody>
							</Table>
							<div>
								<a
									href={
										"/update-datacenter/" +
										this.props.data_center.id
									}
									className="btn btn-primary"
								>
									Edit Data Center
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
		data_center: state.data_center_first.data_center,
	};
};

export default connect(mapStateToProps)(DataCenterSingleComponent);
