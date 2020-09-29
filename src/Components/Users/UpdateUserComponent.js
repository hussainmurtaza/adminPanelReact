import React, { Component } from "react";

class UpdateUserComponent extends Component {
	render() {
		return (
			<div class="content">
				<div class="container">
					<div class="media align-items-stretch justify-content-center ht-100p">
						<div class="sign-wrapper mg-lg-r-50 mg-xl-r-60">
							<div class="pd-t-20 wd-100p">
								<h4 class="tx-color-01 mg-b-5">Update User</h4>

								<div class="form-group">
									<label>Firstname</label>
									<input
										type="text"
										class="form-control"
										placeholder="Enter your firstname"
									/>
								</div>
								<div class="form-group">
									<label>Lastname</label>
									<input
										type="text"
										class="form-control"
										placeholder="Enter your lastname"
									/>
								</div>
								<div class="form-group">
									<div class="d-flex justify-content-between mg-b-5">
										<label class="mg-b-0-f">Password</label>
									</div>
									<input
										type="password"
										class="form-control"
										placeholder="Enter your password"
									/>
								</div>
								<div class="form-group">
									<div class="d-flex justify-content-between mg-b-5">
										<label class="mg-b-0-f">
											Confirm Password
										</label>
									</div>
									<input
										type="password"
										class="form-control"
										placeholder="Enter Confirm password"
									/>
								</div>
								<div class="form-group">
									<label>Email address</label>
									<input
										type="email"
										class="form-control"
										placeholder="Enter your email address"
									/>
								</div>

								<button class="btn btn-brand-02 btn-block">
									Update User
								</button>
							</div>
						</div>
						<div class="media-body pd-y-30 pd-lg-x-50 pd-xl-x-60 align-items-center d-none d-lg-flex pos-relative">
							<div class="mx-lg-wd-500 mx-xl-wd-550">
								<img
									src="/assets/img/login-form.png"
									className="img-fluid"
									alt="Login Form"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default UpdateUserComponent;
