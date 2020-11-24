import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import RoleFormComponent from "Components/Roles/Forms/RoleFormComponent";

class RoleUpdateComponent extends Component {
	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="roles" />
					<div className="content content-components">
						<div className="container">
							<Container>
								<h4 className="tx-color-01 mg-b-15">
									Update Role
								</h4>
								<RoleFormComponent
									method="PUT"
									params={this.props.match.params.id}
									submitText="Update"
								/>
							</Container>
						</div>
					</div>
				</TemplateMain>
			</React.Fragment>
		);
	}
}

export default RoleUpdateComponent;
