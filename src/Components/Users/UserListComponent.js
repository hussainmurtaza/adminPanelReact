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

class UserListComponent extends Component {
	componentDidMount() {
		this.props.dispatch(UsersAction.getUsers());
	}
	userDelete = (id) => {
		this.props.dispatch(UserDeleteAction.deleteUser(id));
	};

	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="users" />

					<div className="content content-components">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">User List</h4>
							<div className="user-list-page">
								<Table striped bordered hover>
									<thead>
										<tr className="text-center">
											<th>First Name</th>
											<th>Last Name</th>
											<th>Email</th>
											<th>Status</th>
											<th>Created At</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{this.props.users.map((user) => (
											<tr>
												<td>{user.first_name}</td>
												<td>{user.last_name}</td>
												<td>{user.email}</td>
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
	};
};

export default connect(mapStateToProps)(UserListComponent);
