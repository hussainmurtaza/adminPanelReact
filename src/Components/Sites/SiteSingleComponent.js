import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Sidebar from "Components/Sidebar";
import CustomerDetailsAction from "Redux/V1/Customers/First/CustomerFirstAction";
import MainComponent from "Components/MainComponent";

class CustomerSingleComponent extends Component {
	state = {
		id: "",
	};

	componentDidMount() {
		this.props.dispatch(
			CustomerDetailsAction.customerDetail(this.props.match.params.id)
		);
	}

	render() {
		return (
			<React.Fragment>
				<MainComponent>
					<Sidebar active="users" />

					<div className="content content-components">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">Update User</h4>
							<Row>
								<Col sm={6} className="form-group">
									<label>Firstname</label>
									<input
										type="text"
										className="form-control"
										placeholder="Enter your firstname"
										value={this.props.customer.first_name}
									/>
								</Col>
								<Col sm={6} className="form-group">
									<label>Lastname</label>
									<input
										type="text"
										className="form-control"
										placeholder="Enter your lastname"
										value={this.props.customer.last_name}
									/>
								</Col>
								<Col sm={6} className="form-group">
									<label>Status</label>
									<input
										type="status"
										className="form-control"
										placeholder="Status"
										value={this.props.customer.status}
									/>
								</Col>
								{/* <Col sm={6} className="form-group">
									<label>Roles</label>
									<div>
										<Badge variant="primary">
											{roleData}
										</Badge>{" "}
									</div>
								</Col>
								<Col sm={6} className="form-group">
									<label>Permissions</label>
									<div>
										<Badge variant="primary">
											{permissionData}
										</Badge>{" "}
									</div>
								</Col> */}
							</Row>
						</div>
					</div>
				</MainComponent>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		customer: state.customer_first.customer,
	};
};

export default connect(mapStateToProps)(CustomerSingleComponent);
