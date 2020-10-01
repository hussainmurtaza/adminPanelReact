import React, { Component } from "react";
import { Container, Badge } from "react-bootstrap";
// import Select from "react-select";
import Headers from "Components/Header";
import Sidebar from "Components/Sidebar";
import Table from "react-bootstrap/Table";
import "../../../src/Assets/css/roles.css";

class AllUserComoponent extends Component {
	render() {
		return (
			<React.Fragment>
				<Headers />
				<Sidebar active="all-roles" />
				<div className="content content-components">
					<div className="container">
						<Container>
							<h4 className="tx-color-01 mg-b-15">All Roles</h4>
							<Table striped>
								<thead>
									<tr>
										{/* <th>#</th> */}
										<th> Name</th>
										<th>Permissions</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Admin</td>
										<td className="badge-group">
											<Badge variant="danger">
												access All
											</Badge>
										</td>
										<td>
											<div className="actions">
												<a
													href="/role-info"
													data-toggle="tooltip"
													title="Role Info."
												>
													<i data-feather="eye"></i>
												</a>
												<a
													href="/update-role"
													data-toggle="tooltip"
													title="Update Role"
												>
													<i data-feather="edit"></i>
												</a>
												<a
													href="#"
													data-toggle="tooltip"
													title="Delete Role"
												>
													<i data-feather="trash"></i>
												</a>
											</div>
										</td>
									</tr>

									<tr>
										<td>Assistant</td>
										<td className="badge-group">
											{" "}
											<Badge variant="danger">
												vehicle All
											</Badge>{" "}
											<Badge variant="danger">
												passenger All
											</Badge>
										</td>
										<td>
											<div className="actions">
												<a
													href="/role-info"
													data-toggle="tooltip"
													title="Role Info."
												>
													<i data-feather="eye"></i>
												</a>
												<a
													href="/update-role"
													data-toggle="tooltip"
													title="Update Role"
												>
													<i data-feather="edit"></i>
												</a>
												<a
													href="#"
													data-toggle="tooltip"
													title="Delete Role"
												>
													<i data-feather="trash"></i>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td>Bibi</td>
										<td className="badge-group">
											<Badge variant="danger">
												access All
											</Badge>
											<Badge variant="danger">
												passenger add
											</Badge>
											<Badge variant="danger">
												merchant delete
											</Badge>
											<Badge variant="danger">
												both add
											</Badge>
										</td>
										<td>
											<div className="actions">
												<a
													href="/role-info"
													data-toggle="tooltip"
													title="Role Info."
												>
													<i data-feather="eye"></i>
												</a>
												<a
													href="/update-role"
													data-toggle="tooltip"
													title="Update Role"
												>
													<i data-feather="edit"></i>
												</a>
												<a
													href="#"
													data-toggle="tooltip"
													title="Delete Role"
												>
													<i data-feather="trash"></i>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td>Employee</td>
										<td></td>
										<td>
											<div className="actions">
												<a
													href="/role-info"
													data-toggle="tooltip"
													title="Role Info."
												>
													<i data-feather="eye"></i>
												</a>
												<a
													href="/update-role"
													data-toggle="tooltip"
													title="Update Role"
												>
													<i data-feather="edit"></i>
												</a>
												<a
													href="#"
													data-toggle="tooltip"
													title="Delete Role"
												>
													<i data-feather="trash"></i>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td>Merchant</td>
										<td className="badge-group">
											<Badge variant="danger">
												access All
											</Badge>
											<Badge variant="danger">
												passenger add
											</Badge>
											<Badge variant="danger">
												merchant delete
											</Badge>
											<Badge variant="danger">
												both add
											</Badge>
										</td>
										<td>
											<div className="actions">
												<a
													href="/role-info"
													data-toggle="tooltip"
													title="Role Info."
												>
													<i data-feather="eye"></i>
												</a>
												<a
													href="/update-role"
													data-toggle="tooltip"
													title="Update Role"
												>
													<i data-feather="edit"></i>
												</a>
												<a
													href="#"
													data-toggle="tooltip"
													title="Delete Role"
												>
													<i data-feather="trash"></i>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td colSpan="2">Passenger</td>
										<td>
											<div className="actions">
												<a
													href="/role-info"
													data-toggle="tooltip"
													title="Role Info."
												>
													<i data-feather="eye"></i>
												</a>
												<a
													href="/update-role"
													data-toggle="tooltip"
													title="Update Role"
												>
													<i data-feather="edit"></i>
												</a>
												<a
													href="#"
													data-toggle="tooltip"
													title="Delete Role"
												>
													<i data-feather="trash"></i>
												</a>
											</div>
										</td>
									</tr>
								</tbody>
							</Table>
						</Container>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default AllUserComoponent;
