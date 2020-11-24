import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Headers from "Components/Header";
import Sidebar from "Components/Sidebar";
import HostNodeFormComponent from "Components/HostNodes/Forms/HostNodeFormComponent";

class HostNodeCreateComponent extends Component {
	render() {
		return (
			<React.Fragment>
				<Headers />
				<Sidebar active="create-hostnode" />
				<div className="content content-components">
					<div className="container">
						<Container>
							<h4 className="tx-color-01 mg-b-15">
								Create New HostNode
							</h4>
							<HostNodeFormComponent
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

export default HostNodeCreateComponent;
