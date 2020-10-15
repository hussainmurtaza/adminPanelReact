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
	//console.log(data,"service form data");
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
	query += `customer_email=${data.customer_email}&`;

	return query;
};

const SiteService = {
	getAll,
	get,
	filter,
};

export default SiteService;
