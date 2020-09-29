import React, { Component } from "react";

class DeleteUserComponent extends Component {
	render() {
		return (
			<div class="content">
				<div class="container">
					<div class="media align-items-stretch justify-content-center ht-100p">
						<div class="sign-wrapper mg-lg-r-50 mg-xl-r-60">
							<div class="pd-t-20 wd-100p">
								<h4 class="tx-color-01 mg-b-5">Delete User</h4>

								<div class="form-group">
									<label>Delete user</label>
									<input
										type="text"
										class="form-control"
										placeholder="Delete user"
									/>
								</div>

								<button class="btn btn-brand-02 btn-block">
									Delete User
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

export default DeleteUserComponent;
