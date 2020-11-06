import React, { Component } from "react";
import { Col } from "react-bootstrap";

class DashboardCardComponent extends Component {
	render() {
		return (
			<React.Fragment>
				<Col sm={3}>
					<div className="dashboard-cards pd-20">
						<div className="mg-r-10 float-left">
							<i data-feather={this.props.icon} className="wd-50 ht-50"></i>
						</div>
						<div className="card-heading">{this.props.heading}</div>
						<span className="card-number">{this.props.number}</span>
					</div>
				</Col>
			</React.Fragment >
		);
	}
}

export default DashboardCardComponent;
