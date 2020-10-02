import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const getAll = async (data) => {
	const response = await Gateway.authGateway("GET", V1.auth.users);
	return response;
};

const post = async (data) => {
	const response = await Gateway.authGateway(
		"POST",
		V1.auth.users,
		userPostData(data)
	);
	return response;
};

const userPostData = (data) => {
	let _data = {};
	_data.first_name = data.first_name;
	_data.last_name = data.last_name;
	_data.email = data.email;
	_data.password = data.password;
	_data.password_confirmation = data.password_confirmation;
	_data.roles = data.roles;
	// _data.roles = ["admin", "user", "support"];
	_data.permissions = data.permissions;

	return JSON.stringify(_data);
};

const userDelete = async (data) => {
	const response = await Gateway.authGateway(
		"DELETE",
		V1.auth.users + "/" + data
	);
	return response;
};
const UserService = {
	getAll,
	post,
	userDelete,
};

export default UserService;
