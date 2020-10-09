import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Headers from "Components/Header";
import Sidebar from "Components/Sidebar";
// import InputField from "Components/Forms/Fields/InputField";
//import InputSelectField from "Components/Forms/Fields/InputSelectField";
import { connect } from "react-redux";
import PostRolesAction from "Redux/V1/Roles/Post/RolePostAction";
import RolesAction from "Redux/V1/Roles/Get/RoleGetAction";
import Select from "react-select";
import PermissionAction from "Redux/V1/Permissions/Get/PermissionGetAction";

class RoleCreateComponent extends Component {
	state = {
		form: {
			name: null,
			permissions: [],
		},
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(PostRolesAction.postRoles(this.state.form));
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
	componentDidMount() {
		this.props.dispatch(RolesAction.getRoles());
		this.props.dispatch(PermissionAction.getPermission());
	}

	// getOptions() {
	// 	const options = this.props.permissions.map((d) => ({
	// 		value: d.id,
	// 		label: d.name,
	// 	}));

	// 	this.setState({ selectOptions: options });
	// }
	// getPermission = () => {
	// 	return this.props.roles.map((role) => {
	// 		return role.permissions.map((permission) => {
	// 			return <option value={permission.id}>{permission.name}</option>;
	// 		});
	// 	});
	// };
	// getOptions = () => {
	// 	return this.props.permissions.map((c) => {
	// 		return <option value={c.id}>{c.name}</option>;
	// 	});
	// };
	render() {
		const options = this.props.permissions.map(function (permission) {
			return { value: permission.id, label: permission.name };
		});
		return (
			<React.Fragment>
				<Headers />
				<Sidebar active="create-roles" />
				<div className="content content-components">
					<div className="container">
						<Container>
							<h4 className="tx-color-01 mg-b-15">
								Create New Roles
							</h4>
							<form method="POST" onSubmit={this.handleSubmit}>
								<Row>
									<Col sm={12} className="form-group">
										{/* <InputField
											label="Enter your Role Name"
											name="role_name"
											required="required"
										/> */}
										<label>Enter your Role Name</label>
										<input
											type="text"
											name="name"
											className="form-control"
											placeholder="Enter your Role Name"
											onChange={this.handleChange}
										/>
									</Col>
									<Col sm={12} className="form-group">
										<label>Assign Permission</label>
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
										/>
									</Col>
									<Col sm={12}>
										<Button type="submit" variant="primary">
											Create
										</Button>
									</Col>
									{/* <Col sm={12}>
										{this.props.roles.map((role) => (
											<tr>
												{role.name}
												{role.permissions.map(
													(permission) => (
														<td>
															{permission.name}
														</td>
													)
												)}
											</tr>
										))}
									</Col> */}
								</Row>
							</form>
						</Container>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		roles: state.roles.roles,
		permissions: state.permissions.permissions,
	};
};

export default connect(mapStateToProps)(RoleCreateComponent);
