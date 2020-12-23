import PermissionHelper from "Helpers/PermissionHelper";
import React, { Component } from "react";

class Sidebar extends Component {
	render() {
		return (
			<React.Fragment>
				<div
					id="sidebarMenu"
					className="sidebar sidebar-fixed sidebar-components"
				>
					<div className="sidebar-header">
						<a href="/" id="mainMenuOpen">
							<i data-feather="menu"></i>
						</a>
						<h5>Components</h5>
						<a href="/" id="sidebarMenuClose">
							<i data-feather="x"></i>
						</a>
					</div>
					<div className="sidebar-body">
						<ul className="sidebar-nav">
							{PermissionHelper.validate([
								"access_all",
								"dashboard_all",
							]) ? (
								<li className="nav-item">
									<a
										href="/dashboard"
										className={
											this.props.active === "dashboard"
												? "active nav-link"
												: "nav-link"
										}
									>
										<i data-feather="layout"></i> Dashboard
									</a>
								</li>
							) : null}
							{PermissionHelper.validate([
								"access_all",
								"users_all",
								"users_create",
								"users_read",
							]) ? (
								<li
									className={
										this.props.active === "create-user" ||
										this.props.active === "users"
											? "nav-item show"
											: "nav-item"
									}
								>
									<a
										href="/"
										className={
											this.props.active ===
												"create-user" ||
											this.props.active === "users"
												? "active nav-link with-sub"
												: "nav-link with-sub"
										}
									>
										<i data-feather="users"></i> Users
									</a>

									<nav className="nav">
										{PermissionHelper.validate([
											"access_all",
											"users_all",
											"users_read",
											"users_update",
											"users_delete",
										]) ? (
											<a
												href="/users"
												className={
													this.props.active ===
													"users"
														? "active"
														: ""
												}
											>
												All Users
											</a>
										) : null}
										{PermissionHelper.validate([
											"access_all",
											"users_all",
											"users_create",
										]) ? (
											<a
												href="/create-user"
												className={
													this.props.active ===
													"create-user"
														? "active"
														: ""
												}
											>
												Create User
											</a>
										) : null}
									</nav>
								</li>
							) : null}
							{PermissionHelper.validate([
								"access_all",
								"roles_all",
								"roles_create",
								"roles_read",
							]) ? (
								<li
									className={
										this.props.active === "roles" ||
										this.props.active === "create-roles"
											? "nav-item show"
											: "nav-item"
									}
								>
									<a
										href="/"
										className={
											this.props.active === "roles" ||
											this.props.active === "create-roles"
												? "active nav-link with-sub"
												: "nav-link with-sub"
										}
									>
										<i data-feather="globe"></i>
										Roles
									</a>
									<nav className="nav">
										{PermissionHelper.validate([
											"access_all",
											"roles_all",
											"roles_read",
											"roles_update",
											"roles_delete",
										]) ? (
											<a
												href="/roles"
												className={
													this.props.active ===
													"roles"
														? "active"
														: ""
												}
											>
												{" "}
												All Roles
											</a>
										) : null}
										{PermissionHelper.validate([
											"access_all",
											"roles_all",
											"roles_create",
										]) ? (
											<a
												href="/create-roles"
												className={
													this.props.active ===
													"create-roles"
														? "active"
														: ""
												}
											>
												Create Role
											</a>
										) : null}
									</nav>
								</li>
							) : null}
							{PermissionHelper.validate([
								"access_all",
								"customers_all",
								"customers_read",
							]) ? (
								<li
									className={
										this.props.active === "customers"
											? "nav-item show"
											: "nav-item"
									}
								>
									<a
										href="/"
										className={
											this.props.active === "customers"
												? "active nav-link with-sub"
												: "nav-link with-sub"
										}
									>
										<i data-feather="user"></i>
										Customers
									</a>
									<nav className="nav">
										<a
											href="/customers"
											className={
												this.props.active ===
												"customers"
													? "active"
													: ""
											}
										>
											All Customers
										</a>
									</nav>
								</li>
							) : null}
							{PermissionHelper.validate([
								"access_all",
								"sites_all",
								"sites_read",
							]) ? (
								<li
									className={
										this.props.active === "sites"
											? "nav-item show"
											: "nav-item"
									}
								>
									<a
										href="/"
										className={
											this.props.active === "sites"
												? "active nav-link with-sub"
												: "nav-link with-sub"
										}
									>
										<i data-feather="layers"></i>
										Sites
									</a>
									<nav className="nav">
										<a
											href="/sites"
											className={
												this.props.active === "sites"
													? "active"
													: ""
											}
										>
											All Sites
										</a>
									</nav>
								</li>
							) : null}
							{PermissionHelper.validate([
								"access_all",
								"invoices_all",
								"invoices_read",
							]) ? (
								<li
									className={
										this.props.active === "invoices"
											? "nav-item show"
											: "nav-item"
									}
								>
									<a
										href="/"
										className={
											this.props.active === "invoices"
												? "active nav-link with-sub"
												: "nav-link with-sub"
										}
									>
										<i data-feather="inbox"></i>
										Invoices
									</a>
									<nav className="nav">
										<a
											href="/invoices"
											className={
												this.props.active === "invoices"
													? "active"
													: ""
											}
										>
											All Invoices
										</a>
									</nav>
								</li>
							) : null}
							{PermissionHelper.validate([
								"access_all",
								"migrations_all",
								"migrations_read",
							]) ? (
								<li
									className={
										this.props.active === "migrations"
											? "nav-item show"
											: "nav-item"
									}
								>
									<a
										href="/"
										className={
											this.props.active === "migrations"
												? "active nav-link with-sub"
												: "nav-link with-sub"
										}
									>
										<i data-feather="grid"></i>
										Migrations
									</a>
									<nav className="nav">
										<a
											href="/migrations"
											className={
												this.props.active ===
												"migrations"
													? "active"
													: ""
											}
										>
											All Migration
										</a>
										<a href="/migrations?status=new_request">
											New Request
										</a>
										<a href="/migrations?status=logins_verified">
											Logins Verified
										</a>
										<a href="/migrations?status=migration_started">
											Migration Started
										</a>
										<a href="/migrations?status=migration_completed">
											Migration Completed
										</a>
										<a href="/migrations?status=optimization_started">
											Optimization Started
										</a>
										<a href="/migrations?status=optimization_completed">
											Optimization Completed
										</a>
										<a href="/migrations?status=staging_site_live">
											Staging Site Live
										</a>
										<a href="/migrations?status=dns_changes_requested">
											DNS Changes Requested
										</a>
										<a href="/migrations?status=dns_changes_completed">
											DNS Changes Completed
										</a>
										<a href="/migrations?status=site_live">
											Site Live
										</a>
										<a href="/migrations?status=migration_closed">
											Migration Closed
										</a>
									</nav>
								</li>
							) : null}
							{PermissionHelper.validate([
								"access_all",
								"host_nodes_all",
								"host_nodes_read",
								"host_nodes_create",
							]) ? (
								<li
									className={
										this.props.active === "hostnodes" ||
										this.props.active === "create-hostnode"
											? "nav-item show"
											: "nav-item"
									}
								>
									<a
										href="/"
										className={
											this.props.active === "hostnodes" ||
											this.props.active ===
												"create-hostnode"
												? "active nav-link with-sub"
												: "nav-link with-sub"
										}
									>
										<i data-feather="package"></i>
										Host Nodes
									</a>
									<nav className="nav">
										{PermissionHelper.validate([
											"access_all",
											"host_nodes_all",
											"host_nodes_read",
											"host_nodes_update",
											"host_nodes_delete",
										]) ? (
											<a
												href="/hostnodes"
												className={
													this.props.active ===
													"hostnodes"
														? "active"
														: ""
												}
											>
												All Host Nodes
											</a>
										) : null}
										{PermissionHelper.validate([
											"access_all",
											"host_nodes_all",
											"host_nodes_create",
										]) ? (
											<a
												href="/create-hostnode"
												className={
													this.props.active ===
													"create-hostnode"
														? "active"
														: ""
												}
											>
												Create Host Nodes
											</a>
										) : null}
									</nav>
								</li>
							) : null}
							{PermissionHelper.validate([
								"access_all",
								"data_centers_all",
								"data_centers_read",
							]) ? (
								<li
									className={
										this.props.active === "datacenters" ||
										this.props.active ===
											"create-datacenter"
											? "nav-item show"
											: "nav-item"
									}
								>
									<a
										href="/"
										className={
											this.props.active ===
												"datacenters" ||
											this.props.active ===
												"create-datacenter"
												? "active nav-link with-sub"
												: "nav-link with-sub"
										}
									>
										<i data-feather="database"></i>
										Data Centers
									</a>
									<nav className="nav">
										{PermissionHelper.validate([
											"access_all",
											"data_centers_all",
											"data_centers_read",
											"data_centers_update",
											"data_centers_delete",
										]) ? (
											<a
												href="/datacenters"
												className={
													this.props.active ===
													"datacenters"
														? "active"
														: ""
												}
											>
												{" "}
												All Data Centers
											</a>
										) : null}
										{PermissionHelper.validate([
											"access_all",
											"data_centers_all",
											"data_centers_create",
										]) ? (
											<a
												href="/create-datacenter"
												className={
													this.props.active ===
													"create-datacenter"
														? "active"
														: ""
												}
											>
												Create Data Center
											</a>
										) : null}
									</nav>
								</li>
							) : null}
						</ul>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Sidebar;
