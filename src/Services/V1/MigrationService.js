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

const put = async (data) => {
	//console.log(data, "datastatus");
	const response = await Gateway.authGateway(
		"PUT",
		V1.migration.migration_status + data
	);
	return response;
};

const MigrationService = {
	getAll,
	get,
	put,
};

export default MigrationService;
