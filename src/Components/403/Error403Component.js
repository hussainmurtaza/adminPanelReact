import React, { Component } from "react";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";

class Error403Component extends Component {
	render() {
		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="403" />

					<div className="content content-components page-404">
						<div className="container">
							<div className="ht-100p d-flex flex-column align-items-center justify-content-center">
								<div className="wd-70p wd-sm-250 wd-lg-300 mg-b-15">
									<img
										src="/assets/img/logo.gif"
										alt="logo"
										className="img-fluid"
									/>
								</div>
								<h1 className="tx-color-01 tx-24 tx-sm-32 tx-lg-36 mg-xl-b-5">
									Oops 403! Unauthorized access.
								</h1>
								<p className="tx-color-03 mg-b-30 text-center">
									We appologies for the inconvenience, but you
									are not authorized to visit this page.
									<br />
									If you believe this is an error, please
									contact your account manage.
								</p>
							</div>
						</div>
					</div>
				</TemplateMain>
			</React.Fragment>
		);
	}
}

export default Error403Component;
