import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const getAll = async (data) => {
	const response = await Gateway.authGateway("GET", V1.auth.roles);
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
	_data.permissions = data.permissions;

	return JSON.stringify(_data);
};

const RoleService = {
	getAll,
	post,
};

export default RoleService;
