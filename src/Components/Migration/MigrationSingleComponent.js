import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import { Table } from "react-bootstrap";

class MigrationSingleComponent extends Component {

	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="migrations" />

					<div className="content content-components">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">
								Migration Details
							</h4>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Field</th>
										<th>Value</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Agency Name</td>
										<td>Freelancer</td>
									</tr>
									<tr>
										<td>Wordpress Admin User</td>
										<td>admin</td>
									</tr>
									<tr>
										<td>Wordpress Admin Password</td>
										<td>admin</td>
									</tr>
									<tr>
										<td>Custom WP-Admin URL</td>
										<td>http://bionicwp.pk</td>
									</tr>
									<tr>
										<td>Domain Register Url</td>
										<td>admin</td>
									</tr>
									<tr>
										<td>Domain Register Username</td>
										<td>admin</td>
									</tr>
									<tr>
										<td>Domain Register Password</td>
										<td>admin</td>
									</tr>
									<tr>
										<td>Current Host Name</td>
										<td>admin</td>
									</tr>
									<tr>
										<td>Current Host Username</td>
										<td>admin</td>
									</tr>
									<tr>
										<td>Current Host Password</td>
										<td>admin</td>
									</tr>
									<tr>
										<td>ftp/sftp</td>
										<td>sftp</td>
									</tr>
									<tr>
										<td>Port</td>
										<td>1234</td>
									</tr>
									<tr>
										<td>Host Location</td>
										<td>admin</td>
									</tr>
									<tr>
										<td>Username</td>
										<td>admin</td>
									</tr>
									<tr>
										<td>Password</td>
										<td>admin</td>
									</tr>
									<tr>
										<td>How did you hear about us ?</td>
										<td>Facebook</td>
									</tr>
									<tr>
										<td>Would you like to put your site on our staging enviroment first ?</td>
										<td>yes</td>
									</tr>
									<tr>
										<td>Is this site a multisite?</td>
										<td>No</td>
									</tr>
									<tr>
										<td>Are there any important directories in the root?</td>
										<td>No</td>
									</tr>
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
		invoice: state.invoice_first.invoice,
	};
};

export default connect(mapStateToProps)(MigrationSingleComponent);
