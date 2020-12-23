import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const getAll = async (data) => {
	const response = await Gateway.authGateway("GET", V1.auth.migrations);
	return response;
};

const get = async (data) => {
	const response = await Gateway.authGateway(
		"GET",
		V1.auth.migrations + "/" + data
	);
	return response;
};

const status = async (data) => {
	const response = await Gateway.authGateway(
		"PUT",
		V1.migration.migration_status + data
	);
	return response;
};

const put = async (data, id) => {
	const response = await Gateway.authGateway(
		"PUT",
		`${V1.auth.migrations}/${id}`,
		migrationBody(data)
	);
	return response;
};

const migrationBody = (data) => {
	let _data = {};
	_data.agency_name = data.agency_name;
	_data.wp_admin_user = data.wp_admin_user;
	_data.wp_admin_password = data.wp_admin_password;
	_data.wp_admin_url = data.wp_admin_url;
	_data.domain_register_url = data.domain_register_url;
	_data.domain_register_username = data.domain_register_username;
	_data.domain_register_password = data.domain_register_password;
	_data.current_host_name = data.current_host_name;
	_data.current_host_username = data.current_host_username;
	_data.current_host_password = data.current_host_password;
	_data.transfer_protocol = data.transfer_protocol.value;
	_data.port = data.port;
	_data.host_location = data.host_location;
	_data.username = data.username;
	_data.password = data.password;
	_data.hear_about_us = data.hear_about_us;
	_data.on_staging = data.on_staging;
	_data.multisite = data.multisite;
	_data.directories = data.directories;

	_data.report_url = data.report_url;
	_data.mobile_page_speed_before = data.mobile_page_speed_before;
	_data.mobile_page_speed_after = data.mobile_page_speed_after;
	_data.desktop_page_speed_before = data.desktop_page_speed_before;
	_data.desktop_page_speed_after = data.desktop_page_speed_after;
	_data.mailgun_dkm_host = data.mailgun_dkm_host;
	_data.mailgun_dkm_record = data.mailgun_dkm_record;
	_data.bv_verified = data.bv_verified;
	_data.smtp_verified = data.smtp_verified;
	_data.qa_verified = data.qa_verified;
	_data.virusdie_verified = data.virusdie_verified;
	_data.nitro_verified = data.nitro_verified;

	_data.status = data.status.value;

	return JSON.stringify(_data);
};

const MigrationService = {
	getAll,
	get,
	status,
	put,
};

export default MigrationService;
