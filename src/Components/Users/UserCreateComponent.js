import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Select from "react-select";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import { connect } from "react-redux";
//import PostUsersAction from "Redux/V1/Users/Post/UserPostAction";
import UsersAction from "Redux/V1/Users/Post/UserPostAction";

class CreateUserComponent extends Component {
	state = {
		form: {
			first_name: null,
			last_name: null,
			password: null,
			password_confirmation: null,
			email: null,
			phone: null,
			roles: ["admin"],
			permissions: [],
		},
	};
	componentDidMount() {
		//this.props.dispatch(PostUsersAction.postUsers());
		// console.log(PostUsersAction.postUsers(), "Create-api");
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(UsersAction.postUsers(this.state.form));
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
		const options = [
			{ value: "1", label: "admin" },
			{ value: "2", label: "admin" },
			{ value: "3", label: "admin" },
			{ value: "4", label: "admin" },
			{ value: "5", label: "admin" },
		];
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="create-user" />
					<h4 className="tx-color-01 mg-b-15">Create New User</h4>
					<div className="content content-components">
						<div className="container">
							<Container>
								<h4 className="tx-color-01 mg-b-15">
									Create New User
								</h4>
								<form
									method="POST"
									onSubmit={this.handleSubmit}
								>
									<Row>
										<Col sm={6} className="form-group">
											<label>Firstname</label>
											<input
												type="text"
												name="first_name"
												className="form-control"
												placeholder="Enter your firstname"
												onChange={this.handleChange}
											/>
										</Col>
										<Col sm={6} className="form-group">
											<label>Lastname</label>
											<input
												type="text"
												name="last_name"
												className="form-control"
												placeholder="Enter your lastname"
												onChange={this.handleChange}
											/>
										</Col>
										<Col sm={6} className="form-group">
											<label>Email address</label>
											<input
												type="email"
												name="email"
												className="form-control"
												placeholder="Enter your email address"
												onChange={this.handleChange}
											/>
										</Col>
										<Col sm={6} className="form-group">
											<label>Phone Number</label>
											<input
												type="text"
												name="phone"
												className="form-control"
												placeholder="Enter your Phone Number"
												onChange={this.handleChange}
											/>
										</Col>
										<Col sm={6} className="form-group">
											<div className="d-flex justify-content-between mg-b-5">
												<label className="mg-b-0-f">
													Password
												</label>
											</div>
											<input
												type="password"
												name="password"
												className="form-control"
												placeholder="Enter your password"
												onChange={this.handleChange}
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
												name="password_confirmation"
												className="form-control"
												placeholder="Enter Confirm password"
												onChange={this.handleChange}
											/>
										</Col>
										<Col sm={6} className="form-group">
											<label>Assign Roles</label>
											<Select
												isMulti
												name="roles"
												options={options}
												classNameName="basic-multi-select"
												classNameNamePrefix="select"
												placeholder="Select Roles"
												onChange={this.handleChange}
											/>
										</Col>
										<Col sm={6} className="form-group">
											<label>Assign Permissions</label>
											<Select
												isMulti
												name="permissions"
												options={options}
												classNameName="basic-multi-select"
												classNameNamePrefix="select"
												placeholder="Select Permissions"
												onChange={this.handleChange}
											/>
										</Col>
										<Col sm={12}>
											<button
												type="submit"
												className="btn btn-brand-02 btn-block"
											>
												Create User
											</button>
										</Col>
									</Row>
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
		users: state.users.users,
	};
};

export default connect(mapStateToProps)(CreateUserComponent);
