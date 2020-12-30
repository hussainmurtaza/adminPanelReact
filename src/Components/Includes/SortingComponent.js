import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	// faSortDown,
	// faSortUp,
	faSort,
} from "@fortawesome/free-solid-svg-icons";
import UrlHelper from "Helpers/UrlHelper";

class SortingComponent extends Component {
	state = {
		status: 0,
	};
	handleSort = (e) => {
		e.preventDefault();
		let orderBy = "desc";
		// if (JSON.parse(localStorage.getItem("orderBy")) === null) {
		// 	orderBy = "desc";
		// 	localStorage.setItem("orderBy", JSON.stringify(orderBy));
		// } else if (JSON.parse(localStorage.getItem("orderBy")) === "desc") {
		// 	orderBy = "asc";
		// 	localStorage.setItem("orderBy", JSON.stringify(orderBy));
		// } else if (JSON.parse(localStorage.getItem("orderBy")) === "asc") {
		// 	orderBy = null;
		// 	localStorage.setItem("orderBy", JSON.stringify(orderBy));
		// }

		const target = e.currentTarget.attributes["name"].value;
		const params = UrlHelper.parseParams(window.location.search);

		if (params.order_by === "desc" && params.column === target) {
			orderBy = "asc";
		} else if (params.order_by === "asc" && params.column === target) {
			orderBy = "";
		}
		params.order_by = orderBy;
		params.column = target;
		window.location.href = `
		${window.location.origin}${window.location.pathname}?${UrlHelper.stringify(
			params
		)}`;
	};
	render() {
		// if (!window.location.search) {
		// 	localStorage.removeItem("orderBy");
		// }

		return (
			<th
				className="sort-btn"
				onClick={(e) => this.handleSort(e, 0)}
				name={this.props.name}
			>
				<span>{this.props.title}</span>
				<FontAwesomeIcon icon={faSort} className="float-right" />
				{/* {JSON.parse(localStorage.getItem("orderBy")) === "asc" ? (
					<FontAwesomeIcon
						icon={faSortDown}
						className="float-right"
					/>
				) : null}
				{JSON.parse(localStorage.getItem("orderBy")) === "desc" ? (
					<FontAwesomeIcon icon={faSortUp} className="float-right" />
				) : null}
				{JSON.parse(localStorage.getItem("orderBy")) === null ? (
					<FontAwesomeIcon icon={faSort} className="float-right" />
				) : null} */}
			</th>
		);
	}
}

export default SortingComponent;
