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
import Confirm from "Helpers/ConfirmationHelper";

class RoleListComponent extends Component {
	componentDidMount() {
		this.props.dispatch(RolesAction.getRoles());
	}
	roleDelete = (id) => {
		//this.props.dispatch(RoleDeleteAction.deleteRole(id));
		Confirm(this.props.dispatch, RoleDeleteAction.deleteRole(id));
	};
	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="roles" />
					<div className="content content-components roleslist-page">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">All Roles</h4>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Name</th>
										<th className="permissions">
											Permissions
										</th>
										<th className="actions">Actions</th>
									</tr>
								</thead>
								<tbody>
									{this.props.roles.map((role) => (
										<tr>
											<td>{role.name}</td>
											<td className="permissions">
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
