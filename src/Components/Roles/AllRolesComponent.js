import React, { Component } from "react";
// import { Row, Col } from "react-bootstrap";
// import Select from "react-select";
import Headers from "Components/Header";
import Sidebar from "Components/Sidebar";

class AllUserComoponent extends Component {
	render() {
		return (
			<React.Fragment>
				<Headers />
				<Sidebar />
				<div>All Roles</div>
			</React.Fragment>
		);
	}
}

export default AllUserComoponent;
