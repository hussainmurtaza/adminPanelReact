import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const getAll = async (data) => {
	const response = await Gateway.authGateway("GET", V1.auth.roles);
	return response;
};

const get = async (data) => {
	const response = await Gateway.authGateway(
		"GET",
		V1.auth.roles + "/" + data
	);
	return response;
};

const post = async (data) => {
	const response = await Gateway.authGateway(
		"POST",
		V1.auth.roles,
		rolePostData(data)
	);
	return response;
};

const rolePostData = (data) => {
	let _data = {};
	_data.name = data.name;
	_data.permissions = data.permissions.map((permission) => {
		return permission.label;
	});

	return JSON.stringify(_data);
};

const roleDelete = async (data) => {
	const response = await Gateway.authGateway(
		"DELETE",
		V1.auth.roles + "/" + data
	);
	return response;
};
const put = async (data) => {
	const response = await Gateway.authGateway("PUT", V1.auth.roles);
	return response;
};

const RoleService = {
	getAll,
	get,
	post,
	roleDelete,
	put,
};

export default RoleService;
