import React, { Component } from "react";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";

class DashboardComponent extends Component {
	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="dashboard" />

					<div className="content content-components">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">
								Dashboard Admin
							</h4>
						</div>
					</div>
				</TemplateMain>
			</React.Fragment>
		);
	}
}

export default DashboardComponent;
