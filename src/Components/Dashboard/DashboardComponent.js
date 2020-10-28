import React, { Component } from "react";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import "Assets/css/dashboard.css";
import { Row, Col } from "react-bootstrap";

class DashboardComponent extends Component {
	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="dashboard" />

					<div className="content content-components dashboard-page">
						<div className="container">
							<h1 className="df-title">Dashboard</h1>
							<Row>
								<Col sm={3}>
									<div className="dashboard-cards pd-20">
										<div className="mg-r-10 float-left">
											<i data-feather="globe" className="wd-50 ht-50"></i>
										</div>
										<div class="card-heading">Total Live Sites</div>
										<span className="card-number">100</span>
									</div>
								</Col>
								<Col sm={3}>
									<div className="dashboard-cards pd-20">
										<div className="mg-r-10 float-left">
											<i data-feather="globe" className="wd-50 ht-50"></i>
										</div>
										<div class="card-heading">Total Staging Sites</div>
										<span className="card-number">50</span>
									</div>
								</Col>
								<Col sm={3}>
									<div className="dashboard-cards pd-20">
										<div className="mg-r-10 float-left">
											<i data-feather="globe" className="wd-50 ht-50"></i>
										</div>
										<div class="card-heading">Total Revenue</div>
										<span className="card-number">$1000</span>
									</div>
								</Col>
								<Col sm={3}>
									<div className="dashboard-cards pd-20">
										<div className="mg-r-10 float-left">
											<i data-feather="globe" className="wd-50 ht-50"></i>
										</div>
										<div class="card-heading">Total Customers</div>
										<span className="card-number">100</span>
									</div>
								</Col>
								<Col sm={3}>
									<div className="dashboard-cards pd-20">
										<div className="mg-r-10 float-left">
											<i data-feather="globe" className="wd-50 ht-50"></i>
										</div>
										<div class="card-heading">Total Invoices</div>
										<span className="card-number">100</span>
									</div>
								</Col>
							</Row>
							<div className="row">
								<div className="col-sm-3">
									<div className="bg-white bd pd-20">
										<div className="mg-r-10 float-left"><i data-feather="users" className="wd-50 ht-50 tx-gray-500"></i></div>
										<h5>Users</h5>
										<a href="users" className="tx-medium">View Users <i className="icon ion-md-arrow-forward mg-l-5"></i></a>
									</div>
								</div>
								<div className="col-sm-3 mg-t-20 mg-sm-t-0">
									<div className="bg-white bd pd-20">
										<div className="mg-r-10 float-left"><i data-feather="globe" className="wd-50 ht-50 tx-gray-500"></i></div>
										<h5>Roles</h5>
										<a href="roles" className="tx-medium">View Roles <i className="icon ion-md-arrow-forward mg-l-5"></i></a>
									</div>
								</div>
								<div className="col-sm-3 mg-t-20 mg-sm-t-0">
									<div className="bg-white bd pd-20">
										<div className="mg-r-10 float-left"><i data-feather="user" className="wd-50 ht-50 tx-gray-500"></i></div>
										<h5>Customers</h5>
										<a href="customers" className="tx-medium">View Customers <i className="icon ion-md-arrow-forward mg-l-5"></i></a>
									</div>
								</div>
								<div className="col-sm-3 mg-t-20 mg-sm-t-0">
									<div className="bg-white bd pd-20">
										<div className="mg-r-10 float-left"><i data-feather="layers" className="wd-50 ht-50 tx-gray-500"></i></div>
										<h5>Sites</h5>
										<a href="sites" className="tx-medium">View Sites <i className="icon ion-md-arrow-forward mg-l-5"></i></a>
									</div>
								</div>
								<div className="col-sm-3 mg-t-20 mg-sm-t-25">
									<div className="bg-white bd pd-20">
										<div className="mg-r-10 float-left"><i data-feather="inbox" className="wd-50 ht-50 tx-gray-500"></i></div>
										<h5>Invoices</h5>
										<a href="invoices" className="tx-medium">View Invoices <i className="icon ion-md-arrow-forward mg-l-5"></i></a>
									</div>
								</div>
								<div className="col-sm-3 mg-t-20 mg-sm-t-25">
									<div className="bg-white bd pd-20">
										<div className="mg-r-10 float-left"><i data-feather="grid" className="wd-50 ht-50 tx-gray-500"></i></div>
										<h5>Migrations</h5>
										<a href="migrations" className="tx-medium">View Migrations <i className="icon ion-md-arrow-forward mg-l-5"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</TemplateMain>
			</React.Fragment >
		);
	}
}

export default DashboardComponent;
