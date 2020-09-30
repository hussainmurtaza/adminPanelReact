import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Select from "react-select";
import Headers from "Components/Header";
import Sidebar from "Components/Sidebar";

class DeleteUserComponent extends Component {
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
				<Sidebar active="create-user" />

				<div className="content content-components">
					<div className="container">
						<h4 className="tx-color-01 mg-b-15">Delete User</h4>
						<Row>
							<Col sm={6} className="form-group">
								<label>Firstname</label>
								<input
									type="text"
									className="form-control"
									placeholder="Enter your firstname"
								/>
							</Col>
							<Col sm={6} className="form-group">
								<label>Lastname</label>
								<input
									type="text"
									className="form-control"
									placeholder="Enter your lastname"
								/>
							</Col>
							<Col sm={6} className="form-group">
								<div className="d-flex justify-content-between mg-b-5">
									<label className="mg-b-0-f">Password</label>
								</div>
								<input
									type="password"
									className="form-control"
									placeholder="Enter your password"
								/>
							</Col>
							<Col sm={6} className="form-group">
								<div className="d-flex justify-content-between mg-b-5">
									<label className="mg-b-0-f">
										Confirm Password
									</label>
								</div>
								<input
									type="password"
									className="form-control"
									placeholder="Enter Confirm password"
								/>
							</Col>
							<Col sm={12} className="form-group">
								<label>Email address</label>
								<input
									type="email"
									className="form-control"
									placeholder="Enter your email address"
								/>
							</Col>
							<Col sm={6} className="form-group">
								<label>Assign Roles</label>
								<Select
									isMulti
									name="colors"
									options={options}
									classNameName="basic-multi-select"
									classNameNamePrefix="select"
									placeholder="Select Roles"
								/>
							</Col>
							<Col sm={6} className="form-group">
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
							<Col sm={12}>
								<button className="btn btn-brand-02 btn-block">
									Create User
								</button>
							</Col>
						</Row>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default DeleteUserComponent;
