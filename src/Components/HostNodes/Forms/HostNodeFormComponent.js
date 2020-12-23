import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import InputUpdateField from "Components/Forms/Fields/InputUpdateField";
import { connect } from "react-redux";
import SingleSelectField from "Components/Forms/Fields/SingleSelectField";
import HostNodePutAction from "Redux/V1/HostNodes/Put/HostNodePutAction";
import HostNodeFirstAction from "Redux/V1/HostNodes/First/HostNodeFirstAction";
import DataCentersAction from "Redux/V1/DataCenters/Get/DataCenterGetAction";
import HostNodePostAction from "Redux/V1/HostNodes/Post/HostNodePostAction";
import Capitilize from "Helpers/CapitilizeHelper";

class HostNodeFormComponent extends Component {
	state = {
		form: {
			public_ip: null,
			ram: null,
			disk: null,
			cpu: null,
			status: "",
			bandwidth: null,
			identity: null,
			available_ram: null,
			available_cpu: null,
			available_disk: null,
			available_bandwith: null,
			server: null,
			private_ip: null,
			data_center_id: "",
		},
		default_data: false,
	};
	componentDidMount() {
		if (this.props.method === "PUT")
			this.props.dispatch(
				HostNodeFirstAction.hostNodeFirst(this.props.params)
			);
		this.props.dispatch(DataCentersAction.getDataCenters());
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
				HostNodePutAction.hostNodePut({
					form: this.state.form,
					id: this.props.params,
				})
			);
		}
		if (this.props.method === "POST") {
			e.preventDefault();
			this.props.dispatch(
				HostNodePostAction.postHostNode(this.state.form)
			);
			//console.log(this.state.form);
		}
	};

	setDefaultData = () => {
		if (this.props.method === "PUT") {
			const { form, default_data } = this.state;
			if (default_data === false) {
				setTimeout(() => {
					form.public_ip = this.props.hostnode.public_ip;
					form.ram = this.props.hostnode.ram;
					form.disk = this.props.hostnode.disk;
					form.cpu = this.props.hostnode.cpu;
					form.bandwidth = this.props.hostnode.bandwidth;
					form.identity = this.props.hostnode.identity;
					form.available_ram = this.props.hostnode.available_ram;
					form.available_cpu = this.props.hostnode.available_cpu;
					form.available_disk = this.props.hostnode.available_disk;
					form.available_bandwith = this.props.hostnode.available_bandwith;
					form.server = this.props.hostnode.server;
					form.private_ip = this.props.hostnode.private_ip;
					form.data_center_id = {
						value: this.props.hostnode.data_center_id,
						label: this.props.hostnode.location,
					};
					form.status = {
						value: this.props.hostnode.status,
						label: Capitilize.capital(
							`${this.props.hostnode.status}`
						),
					};

					this.setState({
						form,
						default_data: this.props.hostnode_fetched,
					});
				}, 100);
			}
		}
	};

	render() {
		const options = this.props.data_centers.map(function (datacenter) {
			return { value: datacenter.id, label: datacenter.location };
		});

		const status_options = [
			{ value: "active", label: "Active" },
			{ value: "blocked", label: "Blocked" },
		];
		this.setDefaultData();
		return (
			<React.Fragment>
				<form method={this.props.method} onSubmit={this.handleSubmit}>
					<Row>
						<Col sm={6}>
							<InputUpdateField
								type="text"
								name="public_ip"
								placeholder="Enter Public IP"
								onChange={this.handleChange}
								defaultValue={this.props.hostnode.public_ip}
								pattern="((^|\.)((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]?\d))){4}$"
								required
							/>
						</Col>
						<Col sm={6}>
							<InputUpdateField
								type="number"
								name="ram"
								placeholder="Enter Ram"
								onChange={this.handleChange}
								defaultValue={this.props.hostnode.ram}
								required
							/>
						</Col>
						<Col sm={6}>
							<InputUpdateField
								type="number"
								name="disk"
								placeholder="Enter Disk"
								onChange={this.handleChange}
								defaultValue={this.props.hostnode.disk}
								required
							/>
						</Col>
						<Col sm={6}>
							<InputUpdateField
								type="number"
								name="cpu"
								placeholder="Enter CPU"
								onChange={this.handleChange}
								defaultValue={this.props.hostnode.cpu}
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
								name="bandwidth"
								placeholder="Enter Bandwidth"
								onChange={this.handleChange}
								defaultValue={this.props.hostnode.bandwidth}
								required
							/>
						</Col>
						<Col sm={6}>
							<InputUpdateField
								type="text"
								name="identity"
								placeholder="Enter Identity"
								onChange={this.handleChange}
								defaultValue={this.props.hostnode.identity}
								required
							/>
						</Col>
						<Col sm={6}>
							<InputUpdateField
								type="number"
								name="available_ram"
								placeholder="Enter Available Ram"
								onChange={this.handleChange}
								defaultValue={this.props.hostnode.available_ram}
								required
							/>
						</Col>
						<Col sm={6}>
							<InputUpdateField
								type="number"
								name="available_cpu"
								placeholder="Enter Available CPU"
								onChange={this.handleChange}
								defaultValue={this.props.hostnode.available_cpu}
								required
							/>
						</Col>
						<Col sm={6}>
							<InputUpdateField
								type="number"
								name="available_disk"
								placeholder="Enter Available Disk"
								onChange={this.handleChange}
								defaultValue={
									this.props.hostnode.available_disk
								}
								required
							/>
						</Col>
						<Col sm={6}>
							<InputUpdateField
								type="number"
								name="available_bandwith"
								placeholder="Enter Available Bandwith"
								onChange={this.handleChange}
								defaultValue={
									this.props.hostnode.available_bandwith
								}
								required
							/>
						</Col>
						<Col sm={6}>
							<InputUpdateField
								type="text"
								name="server"
								placeholder="Enter Server"
								onChange={this.handleChange}
								defaultValue={this.props.hostnode.server}
								required
							/>
						</Col>
						<Col sm={6}>
							<InputUpdateField
								type="text"
								name="private_ip"
								placeholder="Enter Private IP"
								onChange={this.handleChange}
								defaultValue={this.props.hostnode.private_ip}
								required
							/>
						</Col>
						<Col sm={6}>
							<SingleSelectField
								name="data_center_id"
								options={options}
								onChange={(options, e) =>
									this.handleSelect(e, options)
								}
								placeholder="Enter Data Center"
								defaultValue={this.state.form.data_center_id}
								required
							/>
						</Col>
					</Row>
					<Button type="submit" variant="primary">
						{this.props.submitText}
					</Button>{" "}
				</form>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		hostnode: state.hostnode_first.host_node,
		hostnode_fetched: state.hostnode_first.fetched,
		data_centers: state.data_centers.data_centers,
	};
};

export default connect(mapStateToProps)(HostNodeFormComponent);
