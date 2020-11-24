import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import DataCenterFormComponent from "Components/DataCenters/Forms/DataCenterFormComponent";

class DataCenterUpdateComponent extends Component {
	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="datacenters" />
					<div className="content content-components">
						<div className="container">
							<Container>
								<h4 className="tx-color-01 mg-b-15">
									Update Data Center
								</h4>
								<DataCenterFormComponent
									method="PUT"
									submitText="Update"
									params={this.props.match.params.id}
								/>
							</Container>
						</div>
					</div>
				</TemplateMain>
			</React.Fragment>
		);
	}
}

export default DataCenterUpdateComponent;
