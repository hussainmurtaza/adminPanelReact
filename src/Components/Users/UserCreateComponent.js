import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import { connect } from "react-redux";
import UsersAction from "Redux/V1/Users/Post/UserPostAction";
import PermissionAction from "Redux/V1/Permissions/Get/PermissionGetAction";
import RolesAction from "Redux/V1/Roles/Get/RoleGetAction";
import InputField from "Components/Forms/Fields/InputField";
import InputPasswordField from "Components/Forms/Fields/InputPasswordField";
import InputSelectField from "Components/Forms/Fields/InputSelectField";

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
											<InputField
												type="text"
												name="first_name"
												placeholder="Enter your Firstname"
												handleChange={this.handleChange}
											/>
										</Col>
										<Col sm={6} className="form-group">

											<InputField
												type="text"
												name="last_name"
												placeholder="Enter your Lastname"
												handleChange={this.handleChange}
											/>
										</Col>
										<Col sm={6} className="form-group">
											<InputField
												type="email"
												name="email"
												placeholder="Enter your Email address"
												handleChange={this.handleChange}
											/>
										</Col>
										<Col sm={6} className="form-group">
											<InputField
												type="text"
												name="phone"
												placeholder="Enter your Phone Number"
												handleChange={this.handleChange}
											/>
										</Col>
										<Col sm={6} className="form-group">
											<InputPasswordField
												name="password"
												placeholder="Enter your password"
												handleChange={this.handleChange}
											/>
										</Col>
										<Col sm={6} className="form-group">
											<InputPasswordField
												name="password_confirmation"
												placeholder="Enter Confirm password"
												handleChange={this.handleChange}
											/>
										</Col>
										<Col sm={6} className="form-group">

											<label>Assign Roles</label>
											<InputSelectField
												name="roles"
												placeholder="Assign Roles"
												option={rolesOptions}
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
											<InputSelectField
												name="permissions"
												placeholder="Assign Permission"
												option={options}
												onChange={(options, e) =>
													this.handleMultiSelect(
														e,
														options
													)
												}
												value={this.state.form.permissions}
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
