import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import Login from "Components/Auth/LoginComponent";
import Dashboard from "Components/Dashboard/DashboardComponent";
import CreateUserComponent from "Components/Users/CreateUserComponent";
import UpdateUserComponent from "Components/Users/UpdateUserComponent";
import DeleteUserComponent from "Components/Users/DeleteUserComponent";
import UserListComponent from "Components/Users/UserListComponent";

class Main extends Component {
	render() {
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
					<GuestRoute exact path="/login" component={Login} />
					<PrivateRoute
						exact
						path="/dashboard"
						component={Dashboard}
					/>
					<GuestRoute
						exact
						path="/create-user"
						component={CreateUserComponent}
					/>
					<GuestRoute
						exact
						path="/delete-user"
						component={DeleteUserComponent}
					/>
					<GuestRoute
						exact
						path="/update-user"
						component={UpdateUserComponent}
					/>
					<GuestRoute
						exact
						path="/user-list"
						component={UserListComponent}
					/>
					<Redirect to="/dashboard" />
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
