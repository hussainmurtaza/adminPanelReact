import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Select from "react-select";
import Sidebar from "Components/Sidebar";
import { connect } from "react-redux";
import TemplateMain from "Templates/TemplateMain";
import UserDetailsAction from "Redux/V1/Users/First/UserFirstAction";
import UsersPutAction from "Redux/V1/Users/Put/UserPutAction";
import PermissionAction from "Redux/V1/Permissions/Get/PermissionGetAction";
import RolesAction from "Redux/V1/Roles/Get/RoleGetAction";

class CustomerUpdateComponent extends Component {
	state = {
		form: {
			first_name: null,
			last_name: null,
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
		this.props.dispatch(
			UserDetailsAction.userDetail(this.props.match.params.id)
		);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(
			UsersPutAction.userPut({
				form: this.state.form,
				id: this.props.match.params.id,
			})
		);
		console.log(this.state.form);
	};
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
	// setDefaultData = () => {
	// 	const { form, default_data } = this.state;
	// 	if (default_data === false) {
	// 		setTimeout(() => {
	// 			form.name = this.props.role.name;
	// 			form.permissions = this.props.role.permissions.map(
	// 				(permission) => {
	// 					return { value: permission.id, label: permission.name };
	// 				}
	// 			);

	// 			this.setState({ form, default_data: this.props.role_fetched });
	// 		}, 100);
	// 	}
	// };
	render() {
		const options = this.props.permissions.map(function (permission) {
			return { value: permission.id, label: permission.name };
		});
		const rolesOptions = this.props.roles.map(function (role) {
			return { value: role.id, label: role.name };
		});
		console.log(rolesOptions, "role options");
		//this.setDefaultData();
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="users" />

					<div className="content content-components">
						<div className="container">
							<Container>
								<h4 className="tx-color-01 mg-b-15">
									Update User
								</h4>
								<form method="PUT" onSubmit={this.handleSubmit}>
									<Row>
										<Col sm={6} className="form-group">
											<label>Firstname</label>
											<input
												type="text"
												name="first_name"
												className="form-control"
												placeholder="Enter your firstname"
												onChange={this.handleChange}
												defaultValue={
													this.props.user.first_name
												}
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
												defaultValue={
													this.props.user.last_name
												}
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
												defaultValue={
													this.props.user.email
												}
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
												defaultValue={
													this.props.user.phone
												}
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
												Update User
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
		user: state.user_first.user,
		role_fetched: state.role_first.fetched,
		permissions: state.permissions.permissions,
		roles: state.roles.roles,
	};
};

export default connect(mapStateToProps)(CustomerUpdateComponent);
