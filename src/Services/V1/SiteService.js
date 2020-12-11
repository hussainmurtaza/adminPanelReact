import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

// const getAll = async (data) => {
// 	const response = await Gateway.authGateway("GET", V1.auth.sites);
// 	return response;
// };

const get = async (data) => {
	const response = await Gateway.authGateway(
		"GET",
		V1.auth.sites + "/" + data
	);
	return response;
};

const filter = async (data) => {
	const response = await Gateway.authGateway(
		"GET",
		V1.auth.sites + "?" + queryBody(data)
	);
	return response;
};

const queryBody = (data) => {
	let query = data;
	return query;
};

const quickLogin = (identity) => {
	const response = Gateway.authGateway(
		"GET",
		`${V1.auth.site_operation.quick_login}${identity}`
	);
	return response;
};
const search = async (data) => {
	const response = await Gateway.authGateway(
		"GET",
		`${V1.auth.sites}/search${smartSearchBody(data)}`
	);
	return response;
};

const smartSearchBody = (data) => {
	//console.log(data, "data");
	let query = "?";

	query += `field=${data.field}&`;
	query += `value=${data.value}`;

	return query;
};

const SiteService = {
	//getAll,
	get,
	filter,
	quickLogin,
	search,
};

export default SiteService;
