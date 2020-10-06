import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const getAll = async (data) => {
	const response = await Gateway.authGateway("GET", V1.auth.permissions);
	return response;
};

const PermissionService = {
	getAll,
};

export default PermissionService;
