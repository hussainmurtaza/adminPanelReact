import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const getAll = async (data) => {
	const response = await Gateway.authGateway("GET", V1.auth.sites);
	return response;
};

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
		V1.auth.sites + queryBody(data) ,
	);
	return response;
};

const queryBody = (data) => {
	let query = "?";

	query += `site_name=${data.site_name}&`;
	query += `identity=${data.identity}&`;
	query += `created_at=${data.created_at}&`;

	if (query === '?site_name=undefined&identity=undefined&created_at=undefined&') {
		query += `site_name=&`;
		query += `identity=&`;
		query += `created_at=&`;
	}
	else {
		query += `site_name=${data.site_name}&`;
		query += `identity=${data.identity}&`;
		query += `created_at=${data.created_at}&`;
	}

	return query;
};

const SiteService = {
	getAll,
	get,
	filter,
};

export default SiteService;
