import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
// import Select from "react-select";
import Headers from "Components/Header";
import Sidebar from "Components/Sidebar";
import InputSelectField from "Components/Forms/Fields/InputSelectField";
import InputField from "Components/Forms/Fields/InputField";

class RoleUpdateComponent extends Component {
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
				<Sidebar active="all-roles" />
				<div className="content content-components">
					<div className="container">
						<Container>
							<h4 className="tx-color-01 mg-b-15">Update Role</h4>
							<Row>
								<Col sm={12} className="form-group">
									<label>Roll Name</label>
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
							<Button variant="primary">Update</Button>{" "}
						</Container>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default RoleUpdateComponent;
