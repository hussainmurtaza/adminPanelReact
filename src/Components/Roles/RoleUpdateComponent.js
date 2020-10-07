import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Select from "react-select";
import Sidebar from "Components/Sidebar";
//import InputSelectField from "Components/Forms/Fields/InputSelectField";
//import InputField from "Components/Forms/Fields/InputField";
import TemplateMain from "Templates/TemplateMain";
import { connect } from "react-redux";
import PutRolesAction from "Redux/V1/Roles/Put/RolePutAction";
import PermissionAction from "Redux/V1/Permissions/Get/PermissionGetAction";
import RoleDetailsAction from "Redux/V1/Roles/First/RoleFirstAction";

class RoleUpdateComponent extends Component {
	state = {
		form: {
			name: null,
			permissions: [],
		},
		default_data: false,
	};
	componentDidMount() {
		this.props.dispatch(PermissionAction.getPermission());
		this.props.dispatch(
			RoleDetailsAction.roleDetail(this.props.match.params.id)
		);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(
			PutRolesAction.putRoles({
				form: this.state.form,
				id: this.props.match.params.id,
			})
		);
		console.log(this.state.form);
	};
	handleMultiSelect = (e, options) => {
		let { form } = this.state;
		form[e.name] = options;
		this.setState({
			form,
		});
	};

	setDefaultData = () => {
		const { form, default_data } = this.state;
		if (default_data === false) {
			setTimeout(() => {
				form.name = this.props.role.name;
				form.permissions = this.props.role.permissions.map(
					(permission) => {
						return { value: permission.id, label: permission.name };
					}
				);

				this.setState({ form, default_data: this.props.role_fetched });
			}, 100);
		}
	};

	render() {
		const options = this.props.permissions.map(function (permission) {
			return { value: permission.id, label: permission.name };
		});

		this.setDefaultData();

		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="roles" />
					<div className="content content-components">
						<div className="container">
							<Container>
								<h4 className="tx-color-01 mg-b-15">
									Update Role
								</h4>
								<form method="PUT" onSubmit={this.handleSubmit}>
									<Row>
										<Col sm={12} className="form-group">
											{/* <InputField
												label="Enter Role"
												name="name"
												required="required"
												value={this.props.role.name}
											/> */}
											<label>Enter Role</label>
											<input
												type="text"
												className="form-control"
												placeholder="Enter Role"
												defaultValue={
													this.state.form.name
												}
											/>
										</Col>
										<Col sm={12} className="form-group">
											{/* <InputSelectField
												placeholder="Assign Permissions"
												name="assign_permission"
											/> */}
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
												// defaultValue={permissionData}
											/>
										</Col>
									</Row>
									<Button type="submit" variant="primary">
										Update
									</Button>{" "}
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
		role: state.role_first.role,
		role_fetched: state.role_first.fetched,
		permissions: state.permissions.permissions,
	};
};

export default connect(mapStateToProps)(RoleUpdateComponent);
