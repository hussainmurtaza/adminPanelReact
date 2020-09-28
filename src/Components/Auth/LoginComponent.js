import React, { Component } from "react";

class Login extends Component {
    render() {
        return (
            <section id="login" className="w-100">
                <div className="content content-fixed content-auth">
                    <div className="container">
                        <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
                            <div className="media-body align-items-center d-none d-lg-flex">
                                <div className="mx-wd-600">
                                    <img
                                        src="/assets/img/login-form.png"
                                        className="img-fluid"
                                        alt="Login Form"
                                    />
                                </div>
                            </div>
                            {/* media-body */}
                            <div className="sign-wrapper mg-lg-l-50 mg-xl-l-60">
                                <div className="wd-100p">
                                    <h3 className="tx-color-01 mg-b-5">
                                        Sign In
                                    </h3>
                                    <p className="tx-color-03 tx-16 mg-b-40">
                                        Welcome Admin! Please signin to
                                        continue.
                                    </p>
                                    form
                                </div>
                            </div>
                            {/* sign-wrapper */}
                        </div>
                        {/* media */}
                    </div>
                    {/* container */}
                </div>
            </section>
        );
    }
}

export default Login;
