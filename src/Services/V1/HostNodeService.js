import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const getAll = async () => {
	const response = await Gateway.authGateway("GET", V1.auth.hostnodes);
	return response;
};

const get = async (data) => {
	const response = await Gateway.authGateway(
		"GET",
		V1.auth.hostnodes + "/" + data
	);
	return response;
};

const hostNodeDelete = async (data) => {
	const response = await Gateway.authGateway(
		"DELETE",
		V1.auth.hostnodes + "/" + data
	);
	return response;
};

const HostNodeService = {
	getAll,
	get,
	hostNodeDelete,
};

export default HostNodeService;
