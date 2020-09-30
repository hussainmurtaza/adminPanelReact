import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Headers from "Components/Header";
import Sidebar from "Components/Sidebar";

class UserListComponent extends Component {
	render() {
		return (
			<React.Fragment>
				<Headers />
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
									<tr>
										<td>Mark</td>
										<td>Otto</td>
										<td>markotto</td>
										<td>Manager</td>
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
									<tr>
										<td>Jacob</td>
										<td>Thornton</td>
										<td>markotto</td>
										<td>developer</td>
										<td>backend</td>
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
									<tr>
										<td>Jacob</td>
										<td>Thornton</td>
										<td>markotto</td>
										<td>developer</td>
										<td>frontend</td>
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
									<tr>
										<td>Jacob</td>
										<td>Thornton</td>
										<td>markotto</td>
										<td>developer</td>
										<td>frontend</td>
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
									<tr>
										<td>Jacob</td>
										<td>Thornton</td>
										<td>markotto</td>
										<td>developer</td>
										<td>frontend</td>
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
									<tr>
										<td>Jacob</td>
										<td>Thornton</td>
										<td>markotto</td>
										<td>developer</td>
										<td>frontend</td>
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
								</tbody>
							</Table>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default UserListComponent;
