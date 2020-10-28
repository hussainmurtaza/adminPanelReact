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
							<h1 className="df-title">Dashboard</h1>
							<div className="row tx-14">
								<div className="col-sm-4">
									<div className="bg-white bd pd-20 pd-lg-30 d-flex flex-column justify-content-end">
										<div className="mg-b-25"><i data-feather="users" className="wd-50 ht-50 tx-gray-500"></i></div>
										<h5 className="tx-inverse mg-b-20">Users</h5>

										<a href="users" className="tx-medium">View Users <i className="icon ion-md-arrow-forward mg-l-5"></i></a>
									</div>
								</div>
								<div className="col-sm-4 mg-t-20 mg-sm-t-0">
									<div className="bg-white bd pd-20 pd-lg-30 d-flex flex-column justify-content-end">
										<div className="mg-b-25"><i data-feather="globe" className="wd-50 ht-50 tx-gray-500"></i></div>
										<h5 className="tx-inverse mg-b-20">Roles</h5>

										<a href="roles" className="tx-medium">View Roles <i className="icon ion-md-arrow-forward mg-l-5"></i></a>
									</div>
								</div>
								<div className="col-sm-4 mg-t-20 mg-sm-t-0">
									<div className="bg-white bd pd-20 pd-lg-30 d-flex flex-column justify-content-end">
										<div className="mg-b-25"><i data-feather="user" className="wd-50 ht-50 tx-gray-500"></i></div>
										<h5 className="tx-inverse mg-b-20">Customers</h5>

										<a href="customers" className="tx-medium">View Customers <i className="icon ion-md-arrow-forward mg-l-5"></i></a>
									</div>
								</div>
								<div className="col-sm-4 mg-t-20 mg-sm-t-25">
									<div className="bg-white bd pd-20 pd-lg-30 d-flex flex-column justify-content-end">
										<div className="mg-b-25"><i data-feather="layers" className="wd-50 ht-50 tx-gray-500"></i></div>
										<h5 className="tx-inverse mg-b-20">Sites</h5>

										<a href="sites" className="tx-medium">View Sites <i className="icon ion-md-arrow-forward mg-l-5"></i></a>
									</div>
								</div>
								<div className="col-sm-4 mg-t-20 mg-sm-t-25">
									<div className="bg-white bd pd-20 pd-lg-30 d-flex flex-column justify-content-end">
										<div className="mg-b-25"><i data-feather="inbox" className="wd-50 ht-50 tx-gray-500"></i></div>
										<h5 className="tx-inverse mg-b-20">Invoices</h5>

										<a href="invoices" className="tx-medium">View Invoices <i className="icon ion-md-arrow-forward mg-l-5"></i></a>
									</div>
								</div>
								<div className="col-sm-4 mg-t-20 mg-sm-t-25">
									<div className="bg-white bd pd-20 pd-lg-30 d-flex flex-column justify-content-end">
										<div className="mg-b-25"><i data-feather="grid" className="wd-50 ht-50 tx-gray-500"></i></div>
										<h5 className="tx-inverse mg-b-20">Migrations</h5>

										<a href="migrations" className="tx-medium">View Migrations <i className="icon ion-md-arrow-forward mg-l-5"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</TemplateMain>
			</React.Fragment>
		);
	}
}

export default DashboardComponent;
