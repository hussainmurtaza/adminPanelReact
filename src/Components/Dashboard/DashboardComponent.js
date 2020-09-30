import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Select from "react-select";
import Headers from "Components/Header";
import Sidebar from "Components/Sidebar";

class Dashboard extends Component {
	render() {
		return (
			<React.Fragment>
				<Headers />
				<Sidebar active="dashboard" />

				<div className="content content-components">
					<div className="container">
						<h4 className="tx-color-01 mg-b-15">Dashboard Admin</h4>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Dashboard;
