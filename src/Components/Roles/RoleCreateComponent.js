import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Headers from "Components/Header";
import Sidebar from "Components/Sidebar";
import InputSelectField from "Components/Forms/Fields/InputSelectField";
import { connect } from "react-redux";
import PostRolesAction from "Redux/V1/Roles/Post/RolePostAction";
import RolesAction from "Redux/V1/Roles/Get/RoleGetAction";
// import Select from "react-select";
import PermissionAction from "Redux/V1/Permissions/Get/PermissionGetAction";
import InputField from "Components/Forms/Fields/InputTextField";

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
									<Col sm={12}>
										<InputField
											label="Enter your Role Name"
											type="text"
											name="name"
											placeholder="Enter your Role Name"
											handleChange={this.handleChange}
										/>
									</Col>
									<Col sm={12} className="form-group">
										<label>Assign Permission</label>
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
										/>

									</Col>
									<Col sm={12}>
										<Button type="submit" variant="primary">
											Create
										</Button>
									</Col>

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
