import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import UserFormComponent from "Components/Users/Forms/UserFormComponent";

class CreateUserComponent extends Component {
	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="create-user" />
					<h4 className="tx-color-01 mg-b-15">Create New User</h4>
					<div className="content content-components">
						<div className="container">
							<Container>
								<h4 className="tx-color-01 mg-b-15">
									Create New User
								</h4>
								<UserFormComponent
									method="POST"
									params={this.props.match.params.id}
									submitText="Create"
								/>
							</Container>
						</div>
					</div>
				</TemplateMain>
			</React.Fragment>
		);
	}
}

export default CreateUserComponent;
