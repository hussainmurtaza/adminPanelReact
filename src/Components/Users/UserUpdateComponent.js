import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import UserFormComponent from "Components/Users/Forms/UserFormComponent";

class UserUpdateComponent extends Component {
	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="users" />

					<div className="content content-components">
						<div className="container">
							<Container>
								<h4 className="tx-color-01 mg-b-15">
									Update User
								</h4>
								<UserFormComponent
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

export default UserUpdateComponent;
