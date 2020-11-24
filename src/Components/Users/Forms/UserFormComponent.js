import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import InputField from "Components/Forms/Fields/InputField";
import InputPasswordField from "Components/Forms/Fields/InputPasswordField";
import InputSelectField from "Components/Forms/Fields/InputSelectField";
import UsersAction from "Redux/V1/Users/Post/UserPostAction";
import PermissionAction from "Redux/V1/Permissions/Get/PermissionGetAction";
import RolesAction from "Redux/V1/Roles/Get/RoleGetAction";
import UserFirstAction from "Redux/V1/Users/First/UserFirstAction";
import UsersPutAction from "Redux/V1/Users/Put/UserPutAction";

class UserFormComponent extends Component {
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
		default_data: false,
	};
	componentDidMount() {
		this.props.dispatch(PermissionAction.getPermission());
		this.props.dispatch(RolesAction.getRoles());
		this.props.dispatch(UserFirstAction.userFirst(this.props.params));
	}
	handleChange = (e) => {
		let { form } = this.state;
		form[e.target.name] = e.target.value;

		this.setState({
			form,
		});
	};

	handleMultiSelect = (e, options) => {
		let { form } = this.state;
		form[e.name] = options;
		this.setState({
			form,
		});
	};
	handleSubmit = (e) => {
		if (this.props.method === "PUT") {
			e.preventDefault();
			this.props.dispatch(
				UsersPutAction.userPut({
					form: this.state.form,
					id: this.props.params,
				})
			);
			console.log(this.state.form);
		}
		if (this.props.method === "POST") {
			e.preventDefault();
			this.props.dispatch(UsersAction.postUsers(this.state.form));
			console.log(this.state.form);
		}
	};

	setDefaultData = () => {
		if (this.props.method === "PUT") {
			const { form, default_data } = this.state;

			if (default_data === false) {
				setTimeout(() => {
					form.first_name = this.props.user.first_name;
					form.last_name = this.props.user.last_name;
					form.email = this.props.user.email;
					form.phone = this.props.user.contacts[0]["phone"];
					form.permissions = this.props.user.permissions.map(
						(permission) => {
							return {
								value: permission.id,
								label: permission.name,
							};
						}
					);
					form.roles = this.props.user.roles.map((role) => {
						return { value: role.id, label: role.name };
					});

					this.setState({
						form,
						default_data: this.props.user_fetched,
					});
				}, 100);
			}
		}
	};

	render() {
		const permissionOptions = this.props.permissions.map(function (
			permission
		) {
			return { value: permission.id, label: permission.name };
		});
		const rolesOptions = this.props.roles.map(function (role) {
			return { value: role.id, label: role.name };
		});
		this.setDefaultData();
		return (
			<React.Fragment>
				<form method={this.props.method} onSubmit={this.handleSubmit}>
					<Row>
						<Col sm={6} className="form-group">
							<InputField
								name="first_name"
								placeholder="Enter your Firstname"
								handleChange={this.handleChange}
								defaultValue={this.state.form.first_name}
								required
							/>
						</Col>
						<Col sm={6} className="form-group">
							<InputField
								name="last_name"
								placeholder="Enter your Lastname"
								handleChange={this.handleChange}
								defaultValue={this.state.form.last_name}
								required
							/>
						</Col>
						<Col sm={6} className="form-group">
							<InputField
								name="email"
								placeholder="Enter your Email address"
								handleChange={this.handleChange}
								defaultValue={this.state.form.email}
								required
							/>
						</Col>
						<Col sm={6} className="form-group">
							<InputField
								name="phone"
								placeholder="Enter your Phone Number"
								handleChange={this.handleChange}
								defaultValue={this.state.form.phone}
								required
							/>
						</Col>
						{this.props.method === "POST" ? (
							<React.Fragment>
								<Col sm={6} className="form-group">
									<InputPasswordField
										name="password"
										placeholder="Enter your password"
										handleChange={this.handleChange}
										required
									/>
								</Col>
								<Col sm={6} className="form-group">
									<InputPasswordField
										name="password_confirmation"
										placeholder="Enter Confirm password"
										handleChange={this.handleChange}
										required
									/>
								</Col>
							</React.Fragment>
						) : null}
						<Col sm={6} className="form-group">
							<label>Assign Roles</label>
							<InputSelectField
								name="roles"
								placeholder="Assign Roles"
								option={rolesOptions}
								onChange={(options, e) =>
									this.handleMultiSelect(e, options)
								}
								value={this.state.form.roles}
								required
							/>
						</Col>
						<Col sm={6} className="form-group">
							<label>Assign Permissions</label>
							<InputSelectField
								name="permissions"
								placeholder="Assign Permission"
								option={permissionOptions}
								onChange={(options, e) =>
									this.handleMultiSelect(e, options)
								}
								value={this.state.form.permissions}
								required
							/>
						</Col>
						<Col sm={12}>
							<Button type="submit" variant="primary">
								{this.props.submitText}
							</Button>
						</Col>
					</Row>
				</form>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users.users,
		user: state.user_first.user,
		user_fetched: state.user_first.fetched,
		role_fetched: state.role_first.fetched,
		permissions: state.permissions.permissions,
		roles: state.roles.roles,
	};
};

export default connect(mapStateToProps)(UserFormComponent);
