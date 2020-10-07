import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import Login from "Components/Auth/LoginComponent";
import DashboardComponent from "Components/Dashboard/DashboardComponent";
import CreateUserComponent from "Components/Users/UserCreateComponent";
import UserListComponent from "Components/Users/UserListComponent";
import UserSingleComponent from "Components/Users/UserSingleComponent";
import UserUpdateComponent from "Components/Users/UserUpdateComponent";
import RoleListComponent from "Components/Roles/RoleListComponent";
import RoleCreateComponent from "Components/Roles/RoleCreateComponent";
import RoleSingleComponent from "Components/Roles/RolesSingleComponent";
import RoleUpdateComponent from "Components/Roles/RoleUpdateComponent";
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
						component={DashboardComponent}
					/>
					<PrivateRoute
						exact
						path="/users"
						component={UserListComponent}
					/>
					<PrivateRoute
						exact
						path="/user/:id"
						component={UserSingleComponent}
					/>
					<PrivateRoute
						exact
						path="/user-update/:id"
						component={UserUpdateComponent}
					/>
					<PrivateRoute
						exact
						path="/create-user"
						component={CreateUserComponent}
					/>
					<PrivateRoute
						exact
						path="/roles"
						component={RoleListComponent}
					/>
					<PrivateRoute
						exact
						path="/create-roles"
						component={RoleCreateComponent}
					/>
					<PrivateRoute
						exact
						path="/role/:id"
						component={RoleSingleComponent}
					/>
					<PrivateRoute
						exact
						path="/update-role/:id"
						component={RoleUpdateComponent}
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
