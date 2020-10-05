import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Headers from "Components/Header";
import Sidebar from "Components/Sidebar";
// import InputField from "Components/Forms/Fields/InputField";
import InputSelectField from "Components/Forms/Fields/InputSelectField";
import { connect } from "react-redux";
import PostRolesAction from "Redux/V1/Roles/Post/RolePostAction";

class CreateRolesComponent extends Component {
	state = {
		form: {
			name: null,
			permissions: ["access_all"],
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
		console.log(this.state);
	};
	render() {
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
											placeholder="Enter your Phone Number"
											onChange={this.handleChange}
										/>
									</Col>
									<Col sm={12} className="form-group">
										<InputSelectField
											placeholder="Assign Permissions"
											name="permissions"
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
	};
};

export default connect(mapStateToProps)(CreateRolesComponent);
