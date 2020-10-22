import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import UsersAction from "Redux/V1/Users/Get/UserGetAction";
import UserDeleteAction from "Redux/V1/Users/Delete/UserDeleteAction";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
// import queryString from 'query-string';
// import UserFilterAction from "Redux/V1/Users/Filter/UserFilterAction";
// import UserSearchAction from "Redux/V1/Users/Search/UserSearchAction";
import FilterForm from "Components/Forms/FilterForm";
//import InputSelectField from "../Forms/Fields/InputSelectField";

class UserListComponent extends Component {
	componentDidMount() {
		//const value = queryString.parse(this.props.location.search);
		this.props.dispatch(UsersAction.getUsers());
		//this.props.dispatch(UserFilterAction.filterUsers(value));
	}
	userDelete = (id) => {
		this.props.dispatch(UserDeleteAction.deleteUser(id));
	};

	// handleChange = (e) => {
	// 	console.log("Value:", e.target.value);
	// };

	render() {
		//const search = this.props.user_search;
		// const search = this.props.user_search.map(function (user) {
		// 	return { value: user.first_name };
		// });

		// console.log(search, "firstname search");
		// const first_name = this.props.users.map(function (user) {
		// 	return { value: user.first_name, label: user.first_name };
		// });
		// const last_name = this.props.users.map(function (user) {
		// 	return { value: user.last_name, label: user.last_name };
		// });
		// const status = [
		// 	{ value: 'active', label: 'Active' },
		// 	{ value: 'pending', label: 'Pending' },
		// 	{ value: 'blocked', label: 'Blocked' }
		// ]
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="users" />

					<div className="content content-components">
						<div className="container">

							<FilterForm
								fields={
									[
										'async',
										//'user_search',
										'user_status',
										'user_date'
									]
								}
							/>


							{/* <FilterForm
								option1={first_name}
								name1="first_name"
								placeholder1="Search By First Name"
								option2={last_name}
								name2="last_name"
								placeholder2="Search By Last Name"
								option3={status}
								name3="status"
								placeholder3="Search By Status"
								dateName="created_at"
								datePlaceholder="Search By Created Date"
							/> */}

							{/* <form>
								<Form.Row className="align-items-center mb-4">
									<Col md="3">
										<input
											type="text"
											name="name"
											placeholder="Search"
											className="form-control"
										//onChange={this.handleChange}
										/>
									</Col>
									<Col md="3">
										<Button
											type="submit"
											className="btn btn-brand-02 btn-block"
										>
											Search
											</Button>
									</Col>
								</Form.Row>
							</form> */}

							<Table>
								<tbody>

								</tbody>
							</Table>

							<h4 className="tx-color-01 mg-b-15">User List</h4>
							<div className="user-list-page">
								<Table striped bordered hover>
									<thead>
										<tr>
											<th>First Name</th>
											<th>Last Name</th>
											<th>Email</th>
											<th>Status</th>
											<th>Created At</th>
											<th className="text-center">Action</th>
										</tr>
									</thead>
									<tbody>
										{this.props.users.map((user) => (
											<tr>
												<td>
													<a
														href={
															"/user-update/" +
															user.id
														}
													>
														{user.first_name}
													</a>
												</td>
												<td><a
													href={
														"/user-update/" +
														user.id
													}
												>
													{user.last_name}
												</a>
												</td>
												<td><a
													href={
														"/user-update/" +
														user.id
													}
												>{user.email}</a>
												</td>
												<td>{user.status}</td>
												<td>
													{TimeStampHelper.standardDateFormat(
														`${user.created_at}`
													)}
												</td>

												<td className="text-center">
													<a
														href={
															"/user/" + user.id
														}
														className="btn btn-link"
														title="View"
													>
														<FontAwesomeIcon
															icon={faEye}
														/>
													</a>{" "}
													<a
														className="btn btn-link"
														title="Edit"
														href={
															"/user-update/" +
															user.id
														}
													>
														<FontAwesomeIcon
															icon={faPencilAlt}
														/>
													</a>{" "}
													<button
														className="btn btn-link text-danger"
														title="Delete"
														onClick={() =>
															this.userDelete(
																user.id
															)
														}
													>
														<FontAwesomeIcon
															icon={faTrash}
														/>
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</Table>
							</div>
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
		//user_filter: state.user_filter.users,
		user_search: state.user_search.users,
	};
};

export default connect(mapStateToProps)(UserListComponent);
