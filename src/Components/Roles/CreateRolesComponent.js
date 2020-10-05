import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Headers from "Components/Header";
import Sidebar from "Components/Sidebar";
import InputField from "Components/Forms/Fields/InputField";
import InputSelectField from "Components/Forms/Fields/InputSelectField";

class CreateRolesComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				first_name: "",
			},
			err: [],
		};
	}
	render() {
		// const options = [
		// 	{ value: "purple", label: "Purple" },
		// 	{ value: "orange", label: "Orange" },
		// 	{ value: "yellow", label: "Yellow" },
		// 	{ value: "green", label: "Green" },
		// 	{ value: "forest", label: "Forest" },
		// 	{ value: "slate", label: "Slate" },
		// 	{ value: "silver", label: "Silver" },
		// ];
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
							<form>
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

export default CreateRolesComponent;
