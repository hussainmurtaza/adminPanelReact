import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Login from "Components/Auth/LoginComponent";

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={Login} />
                <Redirect to="/" />
            </Switch>
        );
    }
}

export default Main;
