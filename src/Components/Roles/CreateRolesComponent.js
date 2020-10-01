import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Select from "react-select";
import Headers from "Components/Header";
import Sidebar from "Components/Sidebar";

class CreateRolesComponent extends Component {
	render() {
		const options = [
			{ value: "purple", label: "Purple" },
			{ value: "orange", label: "Orange" },
			{ value: "yellow", label: "Yellow" },
			{ value: "green", label: "Green" },
			{ value: "forest", label: "Forest" },
			{ value: "slate", label: "Slate" },
			{ value: "silver", label: "Silver" },
		];
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
							<Row>
								<Col sm={12} className="form-group">
									<label>Role Name</label>
									<input
										required
										type="text"
										className="form-control"
										placeholder="Enter your firstname"
									/>
								</Col>
								<Col sm={12} className="form-group">
									<label>Assign Permissions</label>
									<Select
										isMulti
										name="colors"
										options={options}
										classNameName="basic-multi-select"
										classNameNamePrefix="select"
										placeholder="Select Permissions"
									/>
								</Col>
							</Row>
							<Button variant="primary">Create</Button>{" "}
						</Container>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default CreateRolesComponent;
