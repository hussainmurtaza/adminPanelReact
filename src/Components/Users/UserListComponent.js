import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import UsersAction from "Redux/V1/Users/Get/UserGetAction";

class UserListComponent extends Component {
	componentDidMount() {
		this.props.dispatch(UsersAction.getUsers());
	}
	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="user-list" />

					<div className="content content-components">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">User List</h4>
							<div className="user-list-page">
								<Table striped bordered hover>
									<thead>
										<tr>
											<th>First Name</th>
											<th>Last Name</th>
											<th>Username</th>
											<th>Roles</th>
											<th>Permission</th>
											<th></th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										{this.props.users.map((user) => (
											<tr>
												<td>{user.first_name}</td>
												<td>{user.last_name}</td>
												<td>{user.email}</td>
												<td>{user.status}</td>
												<td>Server</td>
												<td className="text-center">
													<button className="btn btn-brand-02">
														View
													</button>
												</td>
												<td className="text-center">
													<button className="btn btn-danger">
														Delete
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
