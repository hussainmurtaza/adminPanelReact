import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const getAll = async (data) => {
	const response = await Gateway.authGateway("GET", V1.auth.users);
	return response;
};

// const userBody = (data) => {
// 	let _data = {};
// 	//_data. = data.email;
// 	return JSON.stringify(_data);
// };

const UserService = {
	getAll,
};

export default UserService;
