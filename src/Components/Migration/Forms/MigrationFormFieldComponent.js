import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import InputUpdateField from "Components/Forms/Fields/InputUpdateField";
import { connect } from "react-redux";
import CheckboxField from "Components/Forms/Fields/CheckboxField";
import SingleSelectField from "Components/Forms/Fields/SingleSelectField";
import MigrationPutAction from "Redux/V1/Migration/Put/MigrationPutAction";
import MIGRATIONOPTIONS from "Constants/MigrationOptions";

class MigrationFormComponent extends Component {
	state = {
		form: {
			agency_name: null,
			wp_admin_user: null,
			wp_admin_password: null,
			wp_admin_url: null,
			domain_register_url: null,
			domain_register_username: null,
			domain_register_password: null,
			current_host_name: null,
			current_host_username: null,
			current_host_password: null,
			transfer_protocol: null,
			port: null,
			host_location: null,
			username: null,
			password: null,
			hear_about_us: null,
			on_staging: false,
			multisite: false,
			directories: null,

			report_url: null,
			mobile_page_speed_before: null,
			mobile_page_speed_after: null,
			desktop_page_speed_before: null,
			desktop_page_speed_after: null,
			mailgun_dkm_host: null,
			mailgun_dkm_record: null,
			bv_verified: false,
			smtp_verified: false,
			qa_verified: false,
			virusdie_verified: false,
			nitro_verified: false,
			status: null,
		},
		default_data: false,
	};

	handleChange = (e) => {
		let { form } = this.state;
		form[e.target.name] = e.target.value;

		this.setState({
			form,
		});
		console.log(form, "form");
	};
	handleSelect = (e, options) => {
		let { form } = this.state;
		form[e.name] = options;
		this.setState({
			form,
		});
		console.log(form, "form");
	};

	handleSwitch = (e) => {
		const target = e.target;
		const { form } = this.state;
		const value =
			target.type === "checkbox" ? target.checked : target.value;
		form[target.name] = value;
		this.setState({
			form,
		});
		console.log(form, "form");
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(
			MigrationPutAction.migrationPut({
				form: this.state.form,
				id: this.props.migration.id,
			})
		);
	};
	setDefaultData = () => {
		const { form, default_data } = this.state;
		if (default_data === false) {
			setTimeout(() => {
				form.agency_name = this.props.migration.agency_name;
				form.wp_admin_user = this.props.migration.wp_admin_user;
				form.wp_admin_password = this.props.migration.wp_admin_password;
				form.wp_admin_url = this.props.migration.wp_admin_url;
				form.domain_register_url = this.props.migration.domain_register_url;
				form.domain_register_username = this.props.migration.domain_register_username;
				form.domain_register_password = this.props.migration.domain_register_password;
				form.current_host_name = this.props.migration.current_host_name;
				form.current_host_username = this.props.migration.current_host_username;
				form.current_host_password = this.props.migration.current_host_password;
				form.port = this.props.migration.port;
				form.host_location = this.props.migration.host_location;
				form.username = this.props.migration.username;
				form.password = this.props.migration.password;
				form.hear_about_us = this.props.migration.hear_about_us;
				form.directories = this.props.migration.directories;

				form.report_url = this.props.migration.report_url;
				form.mobile_page_speed_before = this.props.migration.mobile_page_speed_before;
				form.mobile_page_speed_after = this.props.migration.mobile_page_speed_after;
				form.desktop_page_speed_before = this.props.migration.desktop_page_speed_before;
				form.desktop_page_speed_after = this.props.migration.desktop_page_speed_after;
				form.mailgun_dkm_host = this.props.migration.mailgun_dkm_host;
				form.mailgun_dkm_record = this.props.migration.mailgun_dkm_record;

				form.smtp_verified = this.props.migration.smtp_verified;
				form.bv_verified = this.props.migration.bv_verified;
				form.qa_verified = this.props.migration.qa_verified;
				form.virusdie_verified = this.props.migration.virusdie_verified;
				form.nitro_verified = this.props.migration.nitro_verified;
				form.on_staging = this.props.migration.on_staging;
				form.multisite = this.props.migration.multisite;
				form.transfer_protocol = {
					value: this.props.migration.transfer_protocol,
					label: this.props.migration.transfer_protocol,
				};
				const status_options = MIGRATIONOPTIONS.filter(
					(option) => option.value === this.props.migration.status
				);
				form.status = status_options["0"];

				this.setState({
					form,
					default_data: this.props.migration_fetched,
				});
			}, 100);
		}
	};

	render() {
		const migration = this.state.form;
		const select_ftp_sftp_options = [
			{ value: "ftp", label: "ftp" },
			{ value: "sftp", label: "sftp" },
		];

		this.setDefaultData();
		return (
			<React.Fragment>
				<form method="PUT" onSubmit={this.handleSubmit}>
					<Row>
						<Col sm={4}>
							<InputUpdateField
								type="text"
								name="agency_name"
								placeholder="Agency Name"
								onChange={this.handleChange}
								defaultValue={migration.agency_name}
								required
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="text"
								name="wp_admin_user"
								placeholder="Wordpress Admin User"
								onChange={this.handleChange}
								defaultValue={migration.wp_admin_user}
								required
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="text"
								name="wp_admin_password"
								placeholder="Wordpress Admin Password"
								onChange={this.handleChange}
								defaultValue={migration.wp_admin_password}
								required
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="text"
								name="wp_admin_url"
								placeholder="Custom WP-Admin URL"
								onChange={this.handleChange}
								defaultValue={migration.wp_admin_url}
								required
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="text"
								name="domain_register_url"
								placeholder="Domain Register Url"
								onChange={this.handleChange}
								defaultValue={migration.domain_register_url}
								required
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="text"
								name="domain_register_username"
								placeholder="Domain Register Username"
								onChange={this.handleChange}
								defaultValue={
									migration.domain_register_username
								}
								required
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="text"
								name="domain_password"
								placeholder="Domain Register Password"
								onChange={this.handleChange}
								defaultValue={
									migration.domain_register_password
								}
								required
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="text"
								name="current_host_name"
								placeholder="Current Host Name"
								onChange={this.handleChange}
								defaultValue={migration.current_host_name}
								required
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="text"
								name="current_host_username"
								placeholder="Current Host Username"
								onChange={this.handleChange}
								defaultValue={migration.current_host_username}
								required
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="text"
								name="current_host_password"
								placeholder="Current Host Password"
								onChange={this.handleChange}
								defaultValue={migration.current_host_password}
								required
							/>
						</Col>
						<Col sm={4}>
							<SingleSelectField
								name="transfer_protocol"
								options={select_ftp_sftp_options}
								onChange={(options, e) =>
									this.handleSelect(e, options)
								}
								placeholder="Select FTP/SFTP"
								defaultValue={this.state.form.transfer_protocol}
								required
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="text"
								name="port"
								placeholder="Port"
								onChange={this.handleChange}
								defaultValue={migration.port}
								required
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="text"
								name="host_location"
								placeholder="Host Location"
								onChange={this.handleChange}
								defaultValue={migration.host_location}
								required
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="text"
								name="username"
								placeholder="Username"
								onChange={this.handleChange}
								defaultValue={migration.username}
								required
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="text"
								name="password"
								placeholder="Password"
								onChange={this.handleChange}
								defaultValue={migration.password}
								required
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="text"
								name="hear_about_us"
								placeholder="How did you hear about us?"
								onChange={this.handleChange}
								defaultValue={migration.hear_about_us}
								required
							/>
						</Col>
						<Col sm={4}>
							<CheckboxField
								id="on_staging"
								name="on_staging"
								checked={migration.on_staging}
								onChange={this.handleSwitch}
								title="On Staging"
							/>
						</Col>
						<Col sm={4}>
							<CheckboxField
								id="multisite"
								name="multisite"
								checked={migration.multisite}
								onChange={this.handleSwitch}
								title="Is this site a multisite?"
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="text"
								name="directories"
								placeholder="Any directories in the root?"
								onChange={this.handleChange}
								defaultValue={migration.directories}
							/>
						</Col>
						<Col sm={4}>
							<SingleSelectField
								name="status"
								options={MIGRATIONOPTIONS}
								onChange={(options, e) =>
									this.handleSelect(e, options)
								}
								placeholder="Select Status"
								defaultValue={this.state.form.status}
							/>
						</Col>
					</Row>
					<hr />
					<Row>
						<Col sm={4}>
							<InputUpdateField
								type="text"
								name="report_url"
								placeholder="Report URL"
								onChange={this.handleChange}
								defaultValue={migration.report_url}
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="number"
								name="mobile_page_speed_before"
								placeholder="Mobile PageSpeed - Before"
								onChange={this.handleChange}
								defaultValue={
									migration.mobile_page_speed_before
								}
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="number"
								name="mobile_page_speed_after"
								placeholder="Mobile PageSpeed - After"
								onChange={this.handleChange}
								defaultValue={migration.mobile_page_speed_after}
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="number"
								name="desktop_page_speed_before"
								placeholder="Desktop PageSpeed - Before"
								onChange={this.handleChange}
								defaultValue={
									migration.desktop_page_speed_before
								}
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="number"
								name="desktop_page_speed_after"
								placeholder="Desktop PageSpeed - After"
								onChange={this.handleChange}
								defaultValue={
									migration.desktop_page_speed_after
								}
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="text"
								name="mailgun_dkm_host"
								placeholder="Mailgun DKIM Host"
								onChange={this.handleChange}
								defaultValue={migration.mailgun_dkm_host}
							/>
						</Col>
						<Col sm={4}>
							<InputUpdateField
								type="text"
								name="mailgun_dkm_record"
								placeholder="Mailgun DKIM Record"
								onChange={this.handleChange}
								defaultValue={migration.mailgun_dkm_record}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<CheckboxField
								id="smtp_verified"
								name="smtp_verified"
								checked={migration.smtp_verified}
								onChange={this.handleSwitch}
								title="SMTP Verified"
							/>
						</Col>
						<Col>
							<CheckboxField
								id="bv_verified"
								name="bv_verified"
								checked={migration.bv_verified}
								onChange={this.handleSwitch}
								title="BV - Verified"
							/>
						</Col>
						<Col>
							<CheckboxField
								id="virusdie_verified"
								name="virusdie_verified"
								checked={migration.virusdie_verified}
								onChange={this.handleSwitch}
								title="VirusDie - Verified"
							/>
						</Col>
						<Col>
							<CheckboxField
								id="qa_verified"
								name="qa_verified"
								checked={migration.qa_verified}
								onChange={this.handleSwitch}
								title="QA - Verified"
							/>
						</Col>
						<Col>
							<CheckboxField
								id="nitro_verified"
								name="nitro_verified"
								checked={migration.nitro_verified}
								onChange={this.handleSwitch}
								title="Nitro"
							/>
						</Col>
					</Row>
					<Button
						type="submit"
						variant="primary"
						className="btn-brand-02 btn-block col-md-4"
					>
						Update
					</Button>{" "}
				</form>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		migration: state.migration_first.migration,
		migration_fetched: state.migration_first.fetched,
	};
};

export default connect(mapStateToProps)(MigrationFormComponent);
