import React, { Component } from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import Sidebar from "Components/Sidebar";
import UserFirstAction from "Redux/V1/Users/First/UserFirstAction";
import TemplateMain from "Templates/TemplateMain";

class UpdateUserComponent extends Component {
	state = {
		id: "",
	};

	componentDidMount() {
		//console.log(this.props.match.params.id);
		//console.log(this.props.user);
		this.props.dispatch(
			UserFirstAction.userFirst(this.props.match.params.id)
		);
	}

	render() {
		//const user = this.props.userDetails;
		//console.log(user, "Single user detail");
		const userRole = this.props.user.roles;
		const userPermission = this.props.user.permissions;
		let roleData, permissionData;
		if (userRole) {
			roleData = userRole.map((role) => {
				return (
					<React.Fragment>
						<Badge variant="primary">{role.name}</Badge>{" "}
					</React.Fragment>
				);
			});
		}
		if (userPermission) {
			permissionData = userPermission.map((permissions) => {
				return (
					<React.Fragment>
						<Badge variant="primary">{permissions.name}</Badge>{" "}
					</React.Fragment>
				);
			});
		}
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="users" />

					<div className="content content-components">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">Update User</h4>
							<Row>
								<Col sm={6} className="form-group">
									<label>Firstname</label>
									<input
										type="text"
										className="form-control"
										placeholder="Enter your firstname"
										value={this.props.user.first_name}
									/>
								</Col>
								<Col sm={6} className="form-group">
									<label>Lastname</label>
									<input
										type="text"
										className="form-control"
										placeholder="Enter your lastname"
										value={this.props.user.last_name}
									/>
								</Col>
								<Col sm={6} className="form-group">
									<label>Email address</label>
									<input
										type="email"
										className="form-control"
										placeholder="Enter your email address"
										value={this.props.user.email}
									/>
								</Col>
								<Col sm={6} className="form-group">
									<label>Status</label>
									<input
										type="status"
										className="form-control"
										placeholder="Status"
										value={this.props.user.status}
									/>
								</Col>
								<Col sm={6} className="form-group">
									<label>Roles</label>
									<div>{roleData}</div>
								</Col>
								<Col sm={6} className="form-group">
									<label>Permissions</label>
									<div>{permissionData}</div>
								</Col>
								<Col sm={12}>
									<a
										href={
											"/user-update/" + this.props.user.id
										}
										className="btn btn-primary"
									>
										Edit User
									</a>
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
		user: state.user_first.user,
	};
};

export default connect(mapStateToProps)(UpdateUserComponent);
