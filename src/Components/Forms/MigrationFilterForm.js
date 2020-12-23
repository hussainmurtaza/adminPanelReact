import React, { Component } from "react";
import { Row, Button, Col } from "react-bootstrap";
import { connect } from "react-redux";
import MigrationsFilterAction from "Redux/V1/Migration/Filter/MigrationFilterAction";
import queryString from "query-string";
import InputSelectField from "Components/Forms/Fields/InputSelectField";
import MIGRATIONAllOPTIONS from "Constants/MigrationAllOptions";

class MigrationFilterForm extends Component {
	componentDidMount() {
		const query = queryString.parse(this.props.location);
		for (const key of Object.keys(query)) {
			if (query[key] === "") {
				delete query[key];
			}
		}
		const params = Object.entries(query)
			.map(([key, value]) => key + "=" + value)
			.join("&");
		this.props.dispatch(MigrationsFilterAction.filterMigrations(params));
	}
	handleSelect = (e, options) => {
		localStorage.setItem(e.name, JSON.stringify(options));
	};
	render() {
		if (!this.props.location) {
			localStorage.removeItem("status");
		}
		const option2 = localStorage.getItem("status");
		const migration_options = JSON.parse(option2);
		return (
			<React.Fragment>
				<form>
					<Row>
						<Col md="6">
							<InputSelectField
								isMulti
								name="status"
								option={MIGRATIONAllOPTIONS}
								placeholder="Search By Status"
								onChange={(options, e) =>
									this.handleSelect(e, options)
								}
								defaultValue={migration_options}
								isClearable
								delimiter=","
							/>
						</Col>
						<Col md="6">
							<Button
								type="submit"
								className="btn btn-brand-02 btn-block"
							>
								Search
							</Button>
						</Col>
					</Row>
				</form>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		migration_filter: state.migration_filter,
	};
};

export default connect(mapStateToProps)(MigrationFilterForm);
