import React, { Component } from "react";
import { Row, Col, Badge } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import { connect } from "react-redux";
import RoleDetailsAction from "Redux/V1/Roles/First/RoleFirstAction";
import TemplateMain from "Templates/TemplateMain";

class RoleSingleComponent extends Component {
	componentDidMount() {
		//console.log(this.props.match.params.id);
		//console.log(this.props.user);
		this.props.dispatch(
			RoleDetailsAction.roleDetail(this.props.match.params.id)
		);
	}
	render() {
		let permissionData;
		const rolePermission = this.props.role.permissions;
		if (rolePermission) {
			permissionData = rolePermission.map((permissions) => {
				return <React.Fragment>{permissions.name}</React.Fragment>;
			});
		}
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="roles" />
					<div className="content content-components">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">Role Info</h4>
							<Row>
								<Col sm={12} className="form-group">
									<label>Roll Name</label>
									<input
										required
										type="text"
										className="form-control"
										placeholder="Enter your Roll Name"
										value={this.props.role.name}
									/>
								</Col>
								<Col sm={12} className="form-group">
									<label>Assign Permissions</label>
									<div>
										<Badge variant="primary">
											{permissionData}
										</Badge>{" "}
									</div>
								</Col>
							</Row>
						</div>
					</div>
				</TemplateMain>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		role: state.role_first.role,
	};
};

export default connect(mapStateToProps)(RoleSingleComponent);
