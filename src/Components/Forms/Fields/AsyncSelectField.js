import React from "react";
import AsyncSelect from "react-select/async";
import CustomersAction from "Redux/V1/Customers/Get/CustomerGetAction";
import CustomerService from "Services/V1/CustomerService";
import DataCentersAction from "Redux/V1/DataCenters/Get/DataCenterGetAction";
import DataCenterService from "Services/V1/DataCenterService";
import ContainerGetAction from "Redux/V1/Container/Get/ContainerGetAction";
import ContainerService from "Services/V1/ContainerService";
import DomainGetAction from "Redux/V1/Sites/Domain/Get/DomainGetAction";
import DomainService from "Services/V1/DomainService";

class AsyncSelectField extends React.Component {
	state = {
		form: {
			customers: null,
			identities: null,
			domains: null,
			locations: null,
		},
	};
	loadOptions = async (input, callback) => {
		const data = await this.smartSearchFilter(input);
		const result = data.map((d) => {
			return {
				value: `${d.id}`,
				label: `${d.value}`,
			};
		});

		callback(result);
	};

	smartSearchFilter = async (value) => {
		if (value.length > 2 && value.trim()) {
			if (this.props.name === "customers") {
				this.props.dispatch(
					CustomersAction.getCustomers({
						field: this.props.name,
						value: value,
					})
				);
				const response = await CustomerService.search({
					field: "full_name",
					value: value,
				});

				return response.data.search_result;
			}

			if (this.props.name === "domains") {
				this.props.dispatch(
					DomainGetAction.getDomains({
						field: this.props.name,
						value: value,
					})
				);
				const response = await DomainService.search({
					field: "domain",
					value: value,
				});

				return response.data.search_result;
			}

			if (this.props.name === "identities") {
				this.props.dispatch(
					ContainerGetAction.getContainers({
						field: this.props.name,
						value: value,
					})
				);
				const response = await ContainerService.search({
					field: "identity",
					value: value,
				});

				return response.data.search_result;
			}

			if (this.props.name === "locations") {
				this.props.dispatch(
					DataCentersAction.getDataCenters({
						field: this.props.name,
						value: value,
					})
				);
				const response = await DataCenterService.search({
					field: "location",
					value: value,
				});

				return response.data.search_result;
			}
		}
	};
	handleMultiSelect = (e, options) => {
		let { form } = this.state;
		form[e.name] = options;
		this.setState({
			form,
		});
		if (e.name === "customers") {
			localStorage.setItem(
				"customers",
				JSON.stringify(this.state.form.customers)
			);
		}
		if (e.name === "identities") {
			localStorage.setItem(
				"identities",
				JSON.stringify(this.state.form.identities)
			);
		}
		if (e.name === "domains") {
			localStorage.setItem(
				"domains",
				JSON.stringify(this.state.form.domains)
			);
		}
		if (e.name === "locations") {
			localStorage.setItem(
				"locations",
				JSON.stringify(this.state.form.locations)
			);
		}
	};

	render() {
		return (
			<React.Fragment>
				<div>
					<AsyncSelect
						isMulti
						cacheOptions
						delimiter=","
						loadOptions={this.loadOptions}
						placeholder={this.props.placeholder}
						name={this.props.name}
						defaultValue={this.props.defaultValue}
						onChange={(options, e) =>
							this.handleMultiSelect(e, options)
						}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default AsyncSelectField;
