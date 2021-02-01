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
import CustomerListComponent from "Components/Customers/CustomerListComponent";
import CustomerSingleComponent from "Components/Customers/CustomerSingleComponent";
import SiteListComponent from "Components/Sites/SiteListComponent";
import SiteSingleComponent from "Components/Sites/SiteSingleComponent";
import InvoiceListComponent from "Components/Invoices/InvoiceListComponent";
import InvoiceSingleComponent from "Components/Invoices/InvoiceSingleComponent";
import MigrationListComponent from "Components/Migration/MigrationListComponent";
import MigrationSingleComponent from "Components/Migration/MigrationSingleComponent";
import DataCenterListComponent from "Components/DataCenters/DataCenterListComponent";
import DataCenterSingleComponent from "Components/DataCenters/DataCenterSingleComponent";
import DataCenterUpdateComponent from "Components/DataCenters/DataCenterUpdateComponent";
import DataCenterCreateComponent from "Components/DataCenters/DataCenterCreateComponent";
import HostNodeListComponent from "Components/HostNodes/HostNodeListComponent";
import HostNodeUpdateComponent from "Components/HostNodes/HostNodeUpdateComponent";
import HostNodeSingleComponent from "Components/HostNodes/HostNodeSingleComponent";
import HostNodeCreateComponent from "Components/HostNodes/HostNodeCreateComponent";
import Error403Component from "Components/403/Error403Component";
import Permission from "Businesses/PermissionBusiness";
import SiteAllUpdateComponent from "Components/Sites/SiteAllUpdateComponent";
import PluginListComponent from "Components/Premiums/PremiumListComponent";
import PluginUpdateComponent from "Components/Premiums/PremiumUpdateComponent";
import PluginSingleComponent from "Components/Premiums/PremiumSingleComponent";
import PluginCreateComponent from "Components/Premiums/PremiumCreateComponent";
import VoucherListComponent from "Components/Vouchers/VoucherListComponent";
import VoucherCreateComponent from "Components/Vouchers/VoucherCreateComponent";
import VoucherSingleComponent from "Components/Vouchers/VoucherSingleComponent";
import VoucherUpdateComponent from "Components/Vouchers/VoucherUpdateComponent";

class Main extends Component {
    render() {
        const loggedIn = this.props.Auth.isAuthenticated;
        const PrivateRoute = ({ component: Component, ...rest }) => {
            const Components = Permission.checkPermissions(Component, rest);
            return (
                <Route
                    {...rest}
                    render={(props) =>
                        loggedIn ? (
                            <Components {...props} />
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
        };
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
                        permissions={["access_all", "dashboard_all"]}
                    />
                    <PrivateRoute
                        exact
                        path="/users"
                        component={UserListComponent}
                        permissions={[
                            "access_all",
                            "users_all",
                            "users_read",
                            "users_delete",
                        ]}
                    />
                    <PrivateRoute
                        exact
                        path="/user/:id"
                        component={UserSingleComponent}
                        permissions={["access_all", "users_all", "users_read"]}
                    />
                    <PrivateRoute
                        exact
                        path="/user-update/:id"
                        component={UserUpdateComponent}
                        permissions={[
                            "access_all",
                            "users_all",
                            "users_update",
                        ]}
                    />
                    <PrivateRoute
                        exact
                        path="/create-user"
                        component={CreateUserComponent}
                        permissions={[
                            "access_all",
                            "users_all",
                            "users_create",
                        ]}
                    />
                    <PrivateRoute
                        exact
                        path="/roles"
                        component={RoleListComponent}
                        permissions={[
                            "access_all",
                            "roles_all",
                            "roles_read",
                            "roles_delete",
                        ]}
                    />
                    <PrivateRoute
                        exact
                        path="/create-roles"
                        component={RoleCreateComponent}
                        permissions={[
                            "access_all",
                            "roles_all",
                            "roles_create",
                        ]}
                    />
                    <PrivateRoute
                        exact
                        path="/role/:id"
                        component={RoleSingleComponent}
                        permissions={["access_all", "roles_all", "roles_read"]}
                    />
                    <PrivateRoute
                        exact
                        path="/update-role/:id"
                        component={RoleUpdateComponent}
                        permissions={[
                            "access_all",
                            "roles_all",
                            "roles_update",
                        ]}
                    />
                    <PrivateRoute
                        exact
                        path="/customers"
                        component={CustomerListComponent}
                        permissions={[
                            "access_all",
                            "customers_all",
                            "customers_read",
                        ]}
                    />
                    <PrivateRoute
                        exact
                        path="/customer/:id"
                        component={CustomerSingleComponent}
                        permissions={[
                            "access_all",
                            "customers_all",
                            "customers_read",
                        ]}
                    />
                    <PrivateRoute
                        exact
                        path="/sites"
                        component={SiteListComponent}
                        permissions={["access_all", "sites_all", "sites_read"]}
                    />
                    <PrivateRoute
                        exact
                        path="/site/:host"
                        component={SiteSingleComponent}
                        permissions={["access_all", "sites_all", "sites_read"]}
                    />
                    <PrivateRoute
                        exact
                        path="/update-sites"
                        component={SiteAllUpdateComponent}
                        permissions={["access_all", "sites_update"]}
                    />
                    <PrivateRoute
                        exact
                        path="/invoices"
                        component={InvoiceListComponent}
                        permissions={[
                            "access_all",
                            "invoices_all",
                            "invoices_read",
                        ]}
                    />
                    <PrivateRoute
                        exact
                        path="/invoice/:id"
                        component={InvoiceSingleComponent}
                        permissions={[
                            "access_all",
                            "invoices_all",
                            "invoices_read",
                        ]}
                    />
                    <PrivateRoute
                        exact
                        path="/migrations"
                        component={MigrationListComponent}
                        permissions={[
                            "access_all",
                            "migrations_all",
                            "migrations_read",
                        ]}
                    />
                    <PrivateRoute
                        exact
                        path="/migration/:id"
                        component={MigrationSingleComponent}
                        permissions={[
                            "access_all",
                            "migrations_all",
                            "migrations_read",
                        ]}
                    />
                    <PrivateRoute
                        exact
                        path="/datacenters"
                        component={DataCenterListComponent}
                        permissions={[
                            "access_all",
                            "data_centers_all",
                            "data_centers_read",
                            "data_centers_delete",
                        ]}
                    />
                    <PrivateRoute
                        exact
                        path="/create-datacenter"
                        component={DataCenterCreateComponent}
                        permissions={[
                            "access_all",
                            "data_centers_all",
                            "data_centers_create",
                        ]}
                    />
                    <PrivateRoute
                        exact
                        path="/datacenter/:id"
                        component={DataCenterSingleComponent}
                        permissions={[
                            "access_all",
                            "data_centers_all",
                            "data_centers_read",
                        ]}
                    />
                    <PrivateRoute
                        exact
                        path="/update-datacenter/:id"
                        component={DataCenterUpdateComponent}
                        permissions={[
                            "access_all",
                            "data_centers_all",
                            "data_centers_update",
                        ]}
                    />

                    <PrivateRoute
                        exact
                        path="/hostnodes"
                        component={HostNodeListComponent}
                        permissions={[
                            "access_all",
                            "host_nodes_all",
                            "host_nodes_read",
                            "host_nodes_delete",
                        ]}
                    />

                    <PrivateRoute
                        exact
                        path="/hostnode/:id"
                        component={HostNodeSingleComponent}
                        permissions={[
                            "access_all",
                            "host_nodes_all",
                            "host_nodes_read",
                        ]}
                    />

                    <PrivateRoute
                        exact
                        path="/hostnode-update/:id"
                        component={HostNodeUpdateComponent}
                        permissions={[
                            "access_all",
                            "host_nodes_all",
                            "host_nodes_update",
                        ]}
                    />

                    <PrivateRoute
                        exact
                        path="/create-hostnode"
                        component={HostNodeCreateComponent}
                        permissions={[
                            "access_all",
                            "host_nodes_all",
                            "host_nodes_create",
                        ]}
                    />
                    {/* PremiumPlugins Routes */}

                    <PrivateRoute
                        exact
                        path="/plugins"
                        component={PluginListComponent}
                        permissions={[
                            "access_all",
                            "premium_plugins_all",
                            "premium_plugins_read",
                            "premium_plugins_create	",
                            "premium_plugins_delete",
                        ]}
                    />

                    <PrivateRoute
                        exact
                        path="/plugin/:id"
                        component={PluginSingleComponent}
                        permissions={[
                            "access_all",
                            "premium_plugins_all",
                            "premium_plugins_update",
                        ]}
                    />

                    <PrivateRoute
                        exact
                        path="/create-plugin"
                        component={PluginCreateComponent}
                        permissions={[
                            "access_all",
                            "premium_plugins_all",
                            "premium_plugins_create",
                        ]}
                    />

                    <PrivateRoute
                        exact
                        path="/update-plugin/:id"
                        component={PluginUpdateComponent}
                        permissions={[
                            "access_all",
                            "premium_plugins_all",
                            "premium_plugins_update",
                        ]}
                    />

                    <PrivateRoute
                        exact
                        path="/403"
                        component={Error403Component}
                        permissions={["403"]}
                    />

                    {/* Voucher Routes================ */}
                    <PrivateRoute
                        exact
                        path="/vouchers"
                        component={VoucherListComponent}
                        permissions={[
                            "access_all",
                            "data_centers_all",
                            "data_centers_read",
                            "data_centers_delete",
                        ]}
                    />

                    <PrivateRoute
                        exact
                        path="/voucher/:id"
                        component={VoucherSingleComponent}
                        permissions={[
                            "access_all",
                            "host_nodes_all",
                            "host_nodes_read",
                        ]}
                    />

                    <PrivateRoute
                        exact
                        path="/update-voucher/:id"
                        component={VoucherUpdateComponent}
                        permissions={[
                            "access_all",
                            "host_nodes_all",
                            "host_nodes_update",
                        ]}
                    />

                    <PrivateRoute
                        exact
                        path="/create-voucher"
                        component={VoucherCreateComponent}
                        permissions={[
                            "access_all",
                            "host_nodes_all",
                            "host_nodes_create",
                        ]}
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
