import React, { Component } from "react";
import Headers from "Components/Header";
import Sidebar from "Components/Sidebar";

class CreateUserComponent extends Component {
	render() {
		return (
			<React.Fragment>
				<Headers />
				<Sidebar />

				<div class="content content-components">
					<div class="container">
						<h4 class="tx-color-01 mg-b-15">Create New User</h4>

						<div class="form-group">
							<label>Firstname</label>
							<input
								type="text"
								class="form-control"
								placeholder="Enter your firstname"
							/>
						</div>
						<div class="form-group">
							<label>Lastname</label>
							<input
								type="text"
								class="form-control"
								placeholder="Enter your lastname"
							/>
						</div>
						<div class="form-group">
							<div class="d-flex justify-content-between mg-b-5">
								<label class="mg-b-0-f">Password</label>
							</div>
							<input
								type="password"
								class="form-control"
								placeholder="Enter your password"
							/>
						</div>
						<div class="form-group">
							<div class="d-flex justify-content-between mg-b-5">
								<label class="mg-b-0-f">Confirm Password</label>
							</div>
							<input
								type="password"
								class="form-control"
								placeholder="Enter Confirm password"
							/>
						</div>
						<div class="form-group">
							<label>Email address</label>
							<input
								type="email"
								class="form-control"
								placeholder="Enter your email address"
							/>
						</div>
						<div class="form-group">
							<label>Select Role</label>
							<select class="custom-select">
								<option selected>Select Role</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</div>
						<div class="form-group">
							<label>Assign Permissions</label>
							<select class="custom-select">
								<option selected>Assign Permissions</option>
								<option value="1">create</option>
								<option value="2">Editor</option>
							</select>
						</div>

						<button class="btn btn-brand-02 btn-block">
							Create User
						</button>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default CreateUserComponent;
