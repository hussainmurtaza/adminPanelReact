import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import InputUpdateField from "Components/Forms/Fields/InputUpdateField";
import { connect } from "react-redux";
import SingleSelectField from "Components/Forms/Fields/SingleSelectField";
import DataCenterPostAction from "Redux/V1/DataCenters/Post/DataCenterPostAction";
import DataCenterPutAction from "Redux/V1/DataCenters/Put/DataCenterPutAction";
import DataCenterFirstAction from "Redux/V1/DataCenters/First/DataCenterFirstAction";
import Capitilize from "Helpers/CapitilizeHelper";

class DataCenterFormComponent extends Component {
	state = {
		form: {
			location: null,
			provider_name: null,
			default: "",
			identity: null,
			status: "",
		},
		default_data: false,
	};
	componentDidMount() {
		if (this.props.method === "PUT")
			this.props.dispatch(
				DataCenterFirstAction.dataCenterFirst(this.props.params)
			);
	}
	handleChange = (e) => {
		let { form } = this.state;
		form[e.target.name] = e.target.value;

		this.setState({
			form,
		});
		//console.log(form, "form");
	};
	handleSelect = (e, options) => {
		let { form } = this.state;
		form[e.name] = options;
		this.setState({
			form,
		});
	};
	handleSubmit = (e) => {
		if (this.props.method === "PUT") {
			e.preventDefault();
			this.props.dispatch(
				DataCenterPutAction.dataCenterPut({
					form: this.state.form,
					id: this.props.params,
				})
			);
		}
		if (this.props.method === "POST") {
			e.preventDefault();
			this.props.dispatch(
				DataCenterPostAction.postDataCenters(this.state.form)
			);
			//console.log(this.state.form);
		}
	};

	setDefaultData = () => {
		if (this.props.method === "PUT") {
			const { form, default_data } = this.state;
			if (default_data === false) {
				setTimeout(() => {
					form.location = this.props.data_center.location;
					form.provider_name = this.props.data_center.provider_name;
					form.identity = this.props.data_center.identity;
					form.default = {
						value: this.props.data_center.default,
						label: Capitilize.capital(
							`${this.props.data_center.default}`
						),
					};

					form.status = {
						value: this.props.data_center.status,
						label: Capitilize.capital(
							`${this.props.data_center.status}`
						),
					};

					this.setState({
						form,
						default_data: this.props.data_center_fetched,
					});
				}, 100);
			}
		}
	};

	render() {
		const data_center = this.props.data_center;
		const status_options = [
			{ value: "active", label: "Active" },
			{ value: "blocked", label: "Blocked" },
		];
		const default_options = [
			{ value: "true", label: "True" },
			{ value: "false", label: "False" },
		];
		this.setDefaultData();
		return (
			<React.Fragment>
				<form method={this.props.method} onSubmit={this.handleSubmit}>
					<Row>
						<Col sm={6}>
							<InputUpdateField
								type="text"
								name="location"
								placeholder="Enter Location"
								onChange={this.handleChange}
								defaultValue={data_center.location}
								required
							/>
						</Col>
						<Col sm={6}>
							<InputUpdateField
								type="text"
								name="provider_name"
								placeholder="Enter Provider Name"
								onChange={this.handleChange}
								defaultValue={data_center.provider_name}
								required
							/>
						</Col>
						<Col sm={6}>
							<SingleSelectField
								name="status"
								options={status_options}
								onChange={(options, e) =>
									this.handleSelect(e, options)
								}
								placeholder="Enter Status"
								defaultValue={this.state.form.status}
								required
							/>
						</Col>
						<Col sm={6}>
							<InputUpdateField
								type="text"
								name="identity"
								placeholder="Enter Identity"
								onChange={this.handleChange}
								defaultValue={data_center.identity}
								required
							/>
						</Col>
						<Col sm={6}>
							<SingleSelectField
								name="default"
								options={default_options}
								onChange={(options, e) =>
									this.handleSelect(e, options)
								}
								placeholder="Enter Default"
								defaultValue={this.state.form.default}
								required
							/>
						</Col>
					</Row>
					<Button type="submit" variant="primary" className="mt-3">
						{this.props.submitText}
					</Button>
				</form>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		data_center: state.data_center_first.data_center,
		data_center_fetched: state.data_center_first.fetched,
	};
};

export default connect(mapStateToProps)(DataCenterFormComponent);
