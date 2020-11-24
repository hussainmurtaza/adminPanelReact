import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Headers from "Components/Header";
import Sidebar from "Components/Sidebar";
import RoleFormComponent from "Components/Roles/Forms/RoleFormComponent";

class RoleCreateComponent extends Component {
	render() {
		return (
			<React.Fragment>
				<Headers />
				<Sidebar active="create-roles" />
				<div className="content content-components">
					<div className="container">
						<Container>
							<h4 className="tx-color-01 mg-b-15">
								Create New Roles
							</h4>
							<RoleFormComponent
								method="POST"
								params={this.props.match.params.id}
								submitText="Create"
							/>
						</Container>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default RoleCreateComponent;
