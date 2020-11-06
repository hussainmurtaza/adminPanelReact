import React, { Component } from "react";
import { Col } from "react-bootstrap";

class DashboardViewComponent extends Component {
	render() {
		return (
			<React.Fragment>
				<Col sm={3}>
					<div className="bg-white bd pd-20 mg-b-25">
						<div className="mg-r-10 float-left">
							<i data-feather={this.props.icon} className="wd-50 ht-50 tx-gray-500"></i>
						</div>
						<h5>{this.props.heading}</h5>
						<a href={this.props.link} className="tx-medium">
							{this.props.linkText}
							<i className="icon ion-md-arrow-forward mg-l-5"></i>
						</a>
					</div>
				</Col>
			</React.Fragment >
		);
	}
}

export default DashboardViewComponent;
