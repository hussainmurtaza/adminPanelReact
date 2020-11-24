import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import HostNodeFormComponent from "Components/HostNodes/Forms/HostNodeFormComponent";

class HostNodeUpdateComponent extends Component {
	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="hostnodes" />
					<div className="content content-components">
						<div className="container">
							<Container>
								<h4 className="tx-color-01 mg-b-15">
									Update HostNode
								</h4>
								<HostNodeFormComponent
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

export default HostNodeUpdateComponent;
