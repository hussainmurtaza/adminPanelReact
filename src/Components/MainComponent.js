import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import Login from "Components/Auth/LoginComponent";
import Dashboard from "Components/Dashboard/DashboardComponent";

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Redirect to="/" />
                </Switch>
                <ToastContainer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Auth: state.Login,
    };
};

export default connect(mapStateToProps)(Main);
