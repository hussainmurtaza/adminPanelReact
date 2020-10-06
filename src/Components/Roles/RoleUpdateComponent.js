import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
// import Select from "react-select";
import Sidebar from "Components/Sidebar";
import InputSelectField from "Components/Forms/Fields/InputSelectField";
import InputField from "Components/Forms/Fields/InputField";
import TemplateMain from "Templates/TemplateMain";
import { connect } from "react-redux";
import PutRolesAction from "Redux/V1/Roles/Put/RolePutAction";

class RoleUpdateComponent extends Component {
	componentDidMount() {
		console.log(this.props.match.params.id);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(PutRolesAction.putRoles(this.state.form));
		console.log(this.state.form);
	};
	render() {
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
								<form
									method="POST"
									onSubmit={this.handleSubmit}
								>
									<Row>
										<Col sm={12} className="form-group">
											<InputField
												label="Enter your firstname"
												name="first_name"
												required="required"
											/>
										</Col>
										<Col sm={12} className="form-group">
											<InputSelectField
												placeholder="Assign Permissions"
												name="assign_permission"
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
		roles: state.roles.roles,
	};
};

export default connect(mapStateToProps)(RoleUpdateComponent);
