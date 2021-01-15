import React, { Component } from "react";
import { Table } from "react-bootstrap";
import TimeStampHelper from "Helpers/TimeStampHelper";
import Capitilize from "Helpers/CapitilizeHelper";

class SiteCustomer extends Component {
	render() {
		const userData = this.props.site.user;
		return (
			<React.Fragment>
				<h4 className="page-header mg-b-15 mt-4">Customer Details</h4>
				<Table striped bordered hover className="site-update-table">
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Status</th>
							<th>Created At</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{userData.first_name}</td>
							<td>{userData.last_name}</td>
							<td>{userData.email}</td>
							<td>{Capitilize.capital(`${userData.status}`)}</td>
							<td>
								{TimeStampHelper.standardDateFormat(
									userData.created_at
								)}
							</td>
						</tr>
					</tbody>
				</Table>
			</React.Fragment>
		);
	}
}

export default SiteCustomer;
