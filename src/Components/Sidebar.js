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
										this.props.active === "create-user" ||
											this.props.active === "users"
											? "active nav-link with-sub"
											: "nav-link with-sub"
									}
								>
									<i data-feather="users"></i> Users
								</a>
								<nav className="nav">
									<a
										href="/users"
										className={
											this.props.active === "users"
												? "active"
												: ""
										}
									>
										All Users
									</a>
									<a
										href="/create-user"
										className={
											this.props.active === "create-user"
												? "active"
												: ""
										}
									>
										Create User
									</a>
								</nav>
							</li>
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
									<a
										href="/roles"
										className={
											this.props.active === "roles"
												? "active"
												: ""
										}
									>
										{" "}
										All Roles
									</a>
									<a
										href="/create-roles"
										className={
											this.props.active === "create-roles"
												? "active"
												: ""
										}
									>
										Create Role
									</a>
								</nav>
							</li>
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
											this.props.active === "customers"
												? "active"
												: ""
										}
									>
										All Customers
									</a>
								</nav>
							</li>
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
									Migration
								</a>
								<nav className="nav">
									<a
										href="/migrations"
										className={
											this.props.active === "migrations"
												? "active"
												: ""
										}
									>
										All Migration
									</a>
								</nav>
							</li>
						</ul>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Sidebar;
