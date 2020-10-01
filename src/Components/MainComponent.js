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
import UserSingleComponent from "Components/Users/UserSingleComponent";
import AllRolesComponent from "Components/Roles/AllRolesComponent";
import CreateRolesComponent from "Components/Roles/CreateRolesComponent";
import RolesInfoComponent from "Components/Roles/RolesInfoComponent";
import UpdateRolesComponent from "Components/Roles/UpdateRolesComponent";
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
					<PrivateRoute
						exact
						path="/create-user"
						component={CreateUserComponent}
					/>
					<PrivateRoute
						exact
						path="/delete-user"
						component={DeleteUserComponent}
					/>
					<PrivateRoute
						exact
						path="/update-user"
						component={UpdateUserComponent}
					/>
					<PrivateRoute
						exact
						path="/user-list"
						component={UserListComponent}
					/>
					<PrivateRoute
						exact
						path="/all-user"
						component={UserListComponent}
					/>
					<PrivateRoute
						exact
						path="/user-single"
						component={UserSingleComponent}
					/>
					<PrivateRoute
						exact
						path="/all-roles"
						component={AllRolesComponent}
					/>
					<PrivateRoute
						exact
						path="/create-roles"
						component={CreateRolesComponent}
					/>
					<PrivateRoute
						exact
						path="/role-info"
						component={RolesInfoComponent}
					/>
					<PrivateRoute
						exact
						path="/update-role"
						component={UpdateRolesComponent}
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
