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
									href="dashboard"
									//className="nav-link active"
									className={
										this.props.active === "dashboard"
											? "active nav-link"
											: "nav-link"
									}
								>
									<i data-feather="layout"></i> Dashboard
								</a>
							</li>
							<li className="nav-item">
								<a
									href="create-user"
									//className="nav-link"
									className={
										this.props.active === "create-user"
											? "active nav-link"
											: "nav-link"
									}
								>
									<i data-feather="grid"></i> Create Site
								</a>
							</li>
							<li className="nav-item">
								<a href="/" className="nav-link with-sub">
									<i data-feather="users"></i> Users
								</a>
								<nav className="nav">
									<a href="create-user">Create User</a>
									<a href="update-user">Update User</a>
									<a href="delete-user">Delete User</a>
									<a href="user-list">User List</a>
									<a href="user-single">Single User</a>
								</nav>
							</li>
							{/* <li className="nav-item show">
								<a href="/" className="nav-link with-sub">
									<i data-feather="layers"></i> UI Elements
								</a>
								<nav className="nav">
									<a href="el-accordion.html">Accordion</a>
									<a href="el-alerts.html">Alerts</a>
									<a href="el-avatar.html">Avatar</a>
									<a href="el-badge.html">Badge</a>
									<a href="el-breadcrumbs.html">
										Breadcrumbs
									</a>
									<a href="el-buttons.html">Buttons</a>
									<a href="el-button-groups.html">
										Button Groups
									</a>
									<a href="el-cards.html">Cards</a>
									<a href="el-carousel.html">Carousel</a>
									<a href="el-collapse.html">Collapse</a>
									<a href="el-dropdown.html">Dropdown</a>
									<a href="el-icons.html">Icons</a>
									<a href="el-images.html">Images</a>
									<a href="el-list-group.html">List Group</a>
									<a href="el-marker.html">Marker</a>
									<a href="el-media-object.html">
										Media Object
									</a>
									<a href="el-modal.html">Modal</a>
									<a href="el-navs.html">Navs</a>
									<a href="el-navbar.html">Navbar</a>
									<a href="el-off-canvas.html">Off-Canvas</a>
									<a href="el-pagination.html">Pagination</a>
									<a href="el-placeholder.html">
										Placeholder
									</a>
									<a href="el-popovers.html">Popovers</a>
									<a href="el-progress.html">Progress</a>
									<a href="el-steps.html">Steps</a>
									<a href="el-scrollbar.html">Scrollbar</a>
									<a href="el-scrollspy.html">Scrollspy</a>
									<a href="el-spinners.html">Spinners</a>
									<a href="el-tab.html">Tab</a>
									<a href="el-toast.html">Toast </a>
									<a href="el-tooltips.html">Tooltips</a>
									<a href="el-table-basic.html">
										Table Basic
									</a>
									<a href="el-table-advanced.html">
										Table Advanced
									</a>
								</nav>
							</li>
							<li className="nav-item show">
								<a href="/" className="nav-link with-sub">
									<i data-feather="package"></i> Utilities
								</a>
								<nav className="nav">
									<a href="util-animation.html">Animation</a>
									<a href="util-background.html">
										Background
									</a>
									<a href="util-border.html">Border</a>
									<a href="util-display.html">Display</a>
									<a href="util-divider.html">Divider</a>
									<a href="util-flex.html">Flex</a>
									<a href="util-height.html">Height</a>
									<a href="util-margin.html">Margin</a>
									<a href="util-padding.html">Padding</a>
									<a href="util-position.html">Position</a>
									<a href="util-typography.html">
										Typography
									</a>
									<a href="util-width.html">Width</a>
									<a href="util-extras.html">Extras</a>
								</nav>
							</li>
							<li className="nav-item show">
								<a href="/" className="nav-link with-sub">
									<i data-feather="inbox"></i> Forms
								</a>
								<nav className="nav">
									<a href="form-elements.html">
										Form Elements
									</a>
									<a href="form-input-group.html">
										Input Group
									</a>
									<a href="form-input-tags.html">
										Input Tags
									</a>
									<a href="form-input-masks.html">
										Input Masks
									</a>
									<a href="form-layouts.html">Form Layouts</a>
									<a href="form-validation.html">
										Form Validation
									</a>
									<a href="form-wizard.html">Form Wizard</a>
									<a href="form-text-editor.html">
										Text Editor
									</a>
									<a href="form-rangeslider.html">
										Range Slider
									</a>
									<a href="form-datepicker.html">
										Date Pickers
									</a>
									<a href="form-select2.html">Select2</a>
									<a href="form-search.html">Search</a>
								</nav>
							</li>
							<li className="nav-item show">
								<a href="/" className="nav-link with-sub">
									<i data-feather="pie-chart"></i> Charts
								</a>
								<nav className="nav">
									<a href="chart-flot.html">Flot</a>
									<a href="chart-chartjs.html">ChartJS</a>
									<a href="chart-peity.html">Peity</a>
									<a href="chart-sparkline.html">Sparkline</a>
									<a href="chart-morris.html">Morris</a>
								</nav>
							</li>
							<li className="nav-item show">
								<a href="/" className="nav-link with-sub">
									<i data-feather="map-pin"></i> Maps
								</a>
								<nav className="nav">
									<a href="map-google.html">Google Maps</a>
									<a href="map-leaflet.html">Leaflet Maps</a>
									<a href="map-vector.html">Vector Maps</a>
								</nav>
							</li> */}
						</ul>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Sidebar;
