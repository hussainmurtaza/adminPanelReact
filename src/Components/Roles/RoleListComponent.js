import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import Table from "react-bootstrap/Table";
import "Assets/css/roles.css";
import TemplateMain from "Templates/TemplateMain";
import { connect } from "react-redux";
import RolesAction from "Redux/V1/Roles/Get/RoleGetAction";
import RoleDeleteAction from "Redux/V1/Roles/Delete/RoleDeleteAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

class RoleListComponent extends Component {
	componentDidMount() {
		this.props.dispatch(RolesAction.getRoles());
	}
	roleDelete = (id) => {
		this.props.dispatch(RoleDeleteAction.deleteRole(id));
	};
	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="roles" />
					<div className="content content-components">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">All Roles</h4>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Name</th>
										<th>Permissions</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									{this.props.roles.map((role) => (
										<tr>
											<td>{role.name}</td>
											<td>
												{role.permissions.map(
													(permission) => (
														<Badge
															variant="primary"
															className="mr-2"
														>
															{permission.name}
														</Badge>
													)
												)}
											</td>
											<td className="actions">
												<a
													href={"/role/" + role.id}
													className="btn btn-link"
													title="View"
												>
													<FontAwesomeIcon
														icon={faEye}
													/>
												</a>
												<a
													href={
														"/update-role/" +
														role.id
													}
													className="btn btn-link"
													title="Edit"
												>
													<FontAwesomeIcon
														icon={faPencilAlt}
													/>
												</a>
												<button
													className="btn btn-link text-danger"
													title="Delete"
													onClick={() =>
														this.roleDelete(role.id)
													}
												>
													<FontAwesomeIcon
														icon={faTrash}
													/>
												</button>
											</td>
										</tr>
									))}
									{/* <tr>
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
													href="/update-role"
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
													href="/update-role"
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
													href="/update-role"
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
													href="/update-role"
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
													href="/update-role"
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
													href="/update-role"
													data-toggle="tooltip"
													title="Delete Role"
												>
													<i data-feather="trash"></i>
												</a>
											</div>
										</td>
									</tr> */}
								</tbody>
							</Table>
						</div>
					</div>
				</TemplateMain>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		roles: state.roles.roles,
	};
};

export default connect(mapStateToProps)(RoleListComponent);
