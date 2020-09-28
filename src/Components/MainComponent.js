import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "Components/Auth/LoginComponent";

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Redirect to="/" />
                </Switch>
                <ToastContainer />
            </React.Fragment>
        );
    }
}

export default Main;
