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

	query += `fullname=${data.customer}&`;
	query += `site_name=${data.site_name}&`;
	query += `host_name=${data.host}&`;
	//query += `primary_domain_name=${data.primary_domain_name}&`;
	query += `created_at=${data.created_at}&`;

	if (query === '?fullname=undefined&site_name=undefined&host_name=undefined&created_at=undefined&') {
		query += `customer=&`;
		query += `site_name=&`;
		query += `host_name=&`;
		//query += `primary_domain_name=&`;
		query += `created_at=&`;
	}
	// else {
	// 	query += `customer=${data.customer}&`;
	// 	query += `site_name=${data.site_name}&`;
	// 	query += `host_name=${data.host}&`;
	// 	//query += `primary_domain_name=${data.primary_domain_name}&`;
	// 	query += `created_at=${data.created_at}&`;
	// }

	return query;
};

const SiteService = {
	getAll,
	get,
	filter,
};

export default SiteService;
