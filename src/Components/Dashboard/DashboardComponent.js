import React, { Component } from "react";
import LogoutHelper from "Helpers/LogoutHelper";
class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hello Admin</h1>
                <button
                    className="btn btn-primary"
                    onClick={() => LogoutHelper.logout()}
                >
                    Logout
                </button>
            </React.Fragment>
        );
    }
}

export default Dashboard;
