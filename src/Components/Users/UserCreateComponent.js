import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Select from "react-select";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import { connect } from "react-redux";
import UsersAction from "Redux/V1/Users/Post/UserPostAction";
import PermissionAction from "Redux/V1/Permissions/Get/PermissionGetAction";
import RolesAction from "Redux/V1/Roles/Get/RoleGetAction";

class CreateUserComponent extends Component {
	state = {
		form: {
			first_name: null,
			last_name: null,
			password: null,
			password_confirmation: null,
			email: null,
			phone: null,
			roles: [],
			permissions: [],
		},
	};
	componentDidMount() {
		//this.props.dispatch(PostUsersAction.postUsers());
		// console.log(PostUsersAction.postUsers(), "Create-api");
		this.props.dispatch(PermissionAction.getPermission());
		this.props.dispatch(RolesAction.getRoles());
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(UsersAction.postUsers(this.state.form));
		console.log(this.state.form);
	};
	handleChange = (e) => {
		let { form } = this.state;
		form[e.target.name] = e.target.value;
		this.setState({
			form,
		});
		console.log(this.state);
	};
	handleMultiSelect = (e, options) => {
		let { form } = this.state;
		form[e.name] = options;
		this.setState({
			form,
		});
	};
	render() {
		//const options = [{ value: "1", label: "admin" }];
		const options = this.props.permissions.map(function (permission) {
			return { value: permission.id, label: permission.name };
		});
		const rolesOptions = this.props.roles.map(function (role) {
			return { value: role.id, label: role.name };
		});

		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="create-user" />
					<h4 className="tx-color-01 mg-b-15">Create New User</h4>
					<div className="content content-components">
						<div className="container">
							<Container>
								<h4 className="tx-color-01 mg-b-15">
									Create New User
								</h4>
								<form
									method="POST"
									onSubmit={this.handleSubmit}
								>
									<Row>
										<Col sm={6} className="form-group">
											<label>Firstname</label>
											<input
												type="text"
												name="first_name"
												className="form-control"
												placeholder="Enter your firstname"
												onChange={this.handleChange}
											/>
										</Col>
										<Col sm={6} className="form-group">
											<label>Lastname</label>
											<input
												type="text"
												name="last_name"
												className="form-control"
												placeholder="Enter your lastname"
												onChange={this.handleChange}
											/>
										</Col>
										<Col sm={6} className="form-group">
											<label>Email address</label>
											<input
												type="email"
												name="email"
												className="form-control"
												placeholder="Enter your email address"
												onChange={this.handleChange}
											/>
										</Col>
										<Col sm={6} className="form-group">
											<label>Phone Number</label>
											<input
												type="text"
												name="phone"
												className="form-control"
												placeholder="Enter your Phone Number"
												onChange={this.handleChange}
											/>
										</Col>
										<Col sm={6} className="form-group">
											<div className="d-flex justify-content-between mg-b-5">
												<label className="mg-b-0-f">
													Password
												</label>
											</div>
											<input
												type="password"
												name="password"
												className="form-control"
												placeholder="Enter your password"
												onChange={this.handleChange}
											/>
										</Col>
										<Col sm={6} className="form-group">
											<div className="d-flex justify-content-between mg-b-5">
												<label className="mg-b-0-f">
													Confirm Password
												</label>
											</div>
											<input
												type="password"
												name="password_confirmation"
												className="form-control"
												placeholder="Enter Confirm password"
												onChange={this.handleChange}
											/>
										</Col>
										<Col sm={6} className="form-group">
											<label>Assign Roles</label>
											<Select
												isMulti
												name="roles"
												options={rolesOptions}
												onChange={(options, e) =>
													this.handleMultiSelect(
														e,
														options
													)
												}
												value={this.state.form.roles}
											/>
										</Col>
										<Col sm={6} className="form-group">
											<label>Assign Permissions</label>
											<Select
												isMulti
												name="permissions"
												options={options}
												onChange={(options, e) =>
													this.handleMultiSelect(
														e,
														options
													)
												}
												placeholder="Assign Permission"
												value={
													this.state.form.permissions
												}
											/>
										</Col>
										<Col sm={12}>
											<button
												type="submit"
												className="btn btn-brand-02 btn-block"
											>
												Create User
											</button>
										</Col>
									</Row>
								</form>
							</Container>
						</div>
					</div>
				</TemplateMain>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users.users,
		role_fetched: state.role_first.fetched,
		permissions: state.permissions.permissions,
		roles: state.roles.roles,
	};
};

export default connect(mapStateToProps)(CreateUserComponent);
