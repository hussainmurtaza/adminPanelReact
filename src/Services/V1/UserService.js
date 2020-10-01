import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const getAll = async (data) => {
	const response = await Gateway.authGateway("GET", V1.auth.users);
	return response;
};

const post = async (data) => {
	const response = await Gateway.authGateway("POST", V1.auth.users);
	return response;
};

const UserService = {
	getAll,
	post,
};

export default UserService;
