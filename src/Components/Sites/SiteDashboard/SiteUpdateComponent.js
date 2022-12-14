import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import WordpressUpdateAction from "Redux/V1/Sites/Wordpress/Put/WordpressPutAction";
import { ReactSVG } from "react-svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import WordpressRefreshAction from "Redux/V1/Sites/Wordpress/Refresh/WordpressGetAction";

class SiteUpdateComponent extends Component {
	update = (type, slug) => {
		const updateDetails = {
			identity: this.props.identity,
			type,
			slug,
		};
		this.props.dispatch(
			WordpressUpdateAction.wordpressUpdate(updateDetails)
		);
	};
	handleRefresh = () => {
		this.props.dispatch(
			WordpressRefreshAction.getWordpress(this.props.identity)
		);
	};

	render() {
		const wordpress = this.props.wordpress;
		const themes = this.props.wordpress.theme;
		const plugins = this.props.wordpress.plugin;
		let allThemes, allPlugins;
		const allThemes1 = themes.map((theme) => {
			return (
				<tr>
					<td>{theme.name}</td>
					<td>{theme.current_version}</td>
					<td>
						{theme.update_version === null
							? "Updated"
							: theme.update_version}
					</td>
					<td className="text-center">
						{theme.lock ? (
							<ReactSVG
								src="/assets/img/lock.svg"
								alt="lock"
								className="ml-1 lock-img"
							/>
						) : (
							<ReactSVG
								src="/assets/img/unlock.svg"
								alt="unlock"
								className="unlock-img"
							/>
						)}
						<button
							type="submit"
							disabled={
								theme.lock || theme.update_version === null
							}
							className={`btn btn-brand-02 ${
								this.props.wordpress_updates.update_slug ===
								theme.slug
									? "loading"
									: ""
							}`}
							onClick={() => this.update("theme", theme.slug)}
						>
							Update
						</button>
					</td>
				</tr>
			);
		});
		if (allThemes1.length === 0) {
			allThemes = <td colspan="100%">No Date Available</td>;
		} else {
			allThemes = allThemes1;
		}

		const allPlugins1 = plugins.map((plugin) => {
			return (
				<tr>
					<td>{plugin.name}</td>
					<td>{plugin.current_version}</td>
					<td>
						{plugin.update_version === null
							? "Updated"
							: plugin.update_version}
					</td>
					<td className="text-center">
						{plugin.lock ? (
							<ReactSVG
								src="/assets/img/lock.svg"
								alt="lock"
								className="ml-1 lock-img"
							/>
						) : (
							<ReactSVG
								src="/assets/img/unlock.svg"
								alt="unlock"
								className="unlock-img"
							/>
						)}
						<button
							type="submit"
							disabled={
								plugin.lock || plugin.update_version === null
							}
							className={`btn btn-brand-02 ${
								this.props.wordpress_updates.update_slug ===
								plugin.slug
									? "loading"
									: ""
							}`}
							onClick={() => this.update("plugin", plugin.slug)}
						>
							Update
						</button>
					</td>
				</tr>
			);
		});
		if (allPlugins1.length === 0) {
			allPlugins = <td colspan="100%">No Date Available</td>;
		} else {
			allPlugins = allPlugins1;
		}

		return (
			<React.Fragment>
				<h4 className="page-header mg-b-15 mt-4">
					WordPress Core
					<button
						className="btn btn-link"
						// onClick={() =>
						// 	this.props.dispatch(
						// 		WordpressRefreshAction.getWordpress(
						// 			this.props.site.container.identity
						// 		)
						// 	)
						// }
						onClick={this.handleRefresh}
					>
						<FontAwesomeIcon icon={faSync} />
					</button>
				</h4>
				<Table striped bordered hover className="site-update-table">
					<thead>
						<tr>
							<th>Wordpress</th>
							<th>Version</th>
							<th>Latest Version</th>
							<th className="site-update-table"></th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(wordpress.core).length ? (
							<tr>
								<td>core</td>
								<td>{wordpress.core.current_version}</td>
								<td>
									{wordpress.core.update_version === null
										? "Updated"
										: wordpress.core.update_version}
								</td>
								<td className="text-center">
									{wordpress.core.lock ? (
										<ReactSVG
											src="/assets/img/lock.svg"
											alt="lock"
											className="ml-1 lock-img"
										/>
									) : (
										<ReactSVG
											src="/assets/img/unlock.svg"
											alt="unlock"
											className="unlock-img"
										/>
									)}
									<button
										type="submit"
										disabled={
											wordpress.core.lock ||
											wordpress.core.update_version ===
												null
										}
										className={`btn btn-brand-02 
											${this.props.wordpress_updates.update_slug === "wp" ? "loading" : ""}`}
										onClick={() =>
											this.update("core", "wp")
										}
									>
										Update
									</button>
								</td>
							</tr>
						) : (
							<td colspan="100%">No Date Available</td>
						)}
					</tbody>
				</Table>

				<h4 className="page-header mg-b-15 mt-4">WordPress Themes</h4>
				<Table striped bordered hover className="site-update-table">
					<thead>
						<tr>
							<th>Theme Name</th>
							<th>Version</th>
							<th>Latest Version</th>
							<th className="site-update-table"></th>
						</tr>
					</thead>
					<tbody>{allThemes}</tbody>
				</Table>

				<h4 className="page-header mg-b-15 mt-4">WordPress Plugins</h4>
				<Table striped bordered hover className="site-update-table">
					<thead>
						<tr>
							<th>Plug-in Name</th>
							<th>Version</th>
							<th>Latest Version</th>
							<th className="site-update-table"></th>
						</tr>
					</thead>
					<tbody>{allPlugins}</tbody>
				</Table>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		wordpress: state.wordpress,
		wordpress_updates: state.wordpress_updates,
		//site: state.site_first.site,
	};
};

export default connect(mapStateToProps)(SiteUpdateComponent);
