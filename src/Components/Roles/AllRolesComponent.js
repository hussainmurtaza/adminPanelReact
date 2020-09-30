import React, { Component } from "react";
import { Container } from "react-bootstrap";
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
				<Sidebar />
				<div className="content content-components">
					<div className="container">
						<Container>
							<h4 className="tx-color-01 mg-b-15">All Roles</h4>
							<Table className="" striped>
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
										<td></td>
										<td></td>
									</tr>

									<tr>
										<td>Assistant</td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td>Employee</td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td>Merchant</td>
										<td></td>
									</tr>
									<tr>
										<td colSpan="2">Passenger</td>
										<td></td>
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
