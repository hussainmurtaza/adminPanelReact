import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import Login from "Components/Auth/LoginComponent";
import Dashboard from "Components/Dashboard/DashboardComponent";

class Main extends Component {
    render() {
        console.log(this.props);
        const loggedIn = this.props.Auth.isAuthenticated;

        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route
                {...rest}
                render={(props) =>
                    loggedIn ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location },
                            }}
                        />
                    )
                }
            />
        );
        const GuestRoute = ({ component: Component, ...rest }) => (
            <Route
                {...rest}
                render={(props) =>
                    !loggedIn ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/dashboard",
                                state: { from: props.location },
                            }}
                        />
                    )
                }
            />
        );
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                    {/* <Redirect to="/dashboard" /> */}
                </Switch>
                <ToastContainer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Auth: state.login,
    };
};

export default connect(mapStateToProps)(Main);
