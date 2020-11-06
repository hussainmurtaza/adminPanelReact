import React, { Component } from "react";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import "Assets/css/dashboard.css";
import DashboardCardComponent from "Components/Dashboard/Ui/DashboardCardComponent";
import { connect } from "react-redux";
import DashboardAction from "Redux/V1/Dashboard/Get/DashboardGetAction";
import DashboardViewComponent from "./Ui/DashboardViewComponent";
import { Row, Col } from "react-bootstrap";

class DashboardComponent extends Component {
	componentDidMount() {
		this.props.dispatch(DashboardAction.getDashboard());
	}
	render() {
		const dashboard = this.props.dashboards;
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="dashboard" />

					<div className="content content-components dashboard-page">
						<div className="container">
							<h4 className="tx-color-01 mg-b-15">Dashboard</h4>
							<Row>
								<DashboardCardComponent
									heading="Total Live Sites"
									number={dashboard.liveSites}
									icon="globe"
								/>

								<DashboardCardComponent
									heading="Total Staging Sites"
									number={dashboard.staging}
									icon="globe"
								/>

								<DashboardCardComponent
									heading="Total Revenue"
									number={dashboard.invoicesPaid}
									icon="dollar-sign"
								/>

								<DashboardCardComponent
									heading="Total Customers"
									number={dashboard.customer}
									icon="users"
								/>

								<DashboardCardComponent
									heading="Total Invoices"
									number={dashboard.invoices}
									icon="file-text"
								/>
							</Row>

							<div className="row">
								<DashboardViewComponent
									heading="Users"
									link="users"
									linkText="View Users"
									icon="users"
								/>
								<DashboardViewComponent
									heading="Roles"
									link="roles"
									linkText="View Roles"
									icon="globe"
								/>
								<DashboardViewComponent
									heading="Customers"
									link="customers"
									linkText="View Customers"
									icon="user"
								/>
								<DashboardViewComponent
									heading="Sites"
									link="sites"
									linkText="View Sites"
									icon="layers"
								/>
								<DashboardViewComponent
									heading="Invoices"
									link="invoices"
									linkText="View Invoices"
									icon="inbox"
								/>
								<DashboardViewComponent
									heading="Migrations"
									link="migrations"
									linkText="View Migrations"
									icon="grid"
								/>
							</div>
						</div>
					</div>
				</TemplateMain>
			</React.Fragment >
		);
	}
}

const mapStateToProps = (state) => {
	return {
		dashboards: state.dashboards.dashboard,
	};
};

export default connect(mapStateToProps)(DashboardComponent);
