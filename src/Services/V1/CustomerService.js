import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const getAll = async (data) => {
	const response = await Gateway.authGateway("GET", V1.auth.customers);
	return response;
};

const get = async (data) => {
	const response = await Gateway.authGateway(
		"GET",
		V1.auth.customers + "/" + data
	);
	return response;
};

const filter = async (data) => {
	const response = await Gateway.authGateway(
		"GET",
		V1.auth.customers + "?" + queryBody(data)
	);
	return response;
};

const queryBody = (data) => {
	let query = data;
	return query;
};

const put = async (id) => {
	const response = await Gateway.authGateway(
		"PUT",
		// `${V1.auth.customers}/${id}`
		V1.auth.customers_lock + "/" + id
	);
	return response;
};

const search = async (data) => {
	const response = await Gateway.authGateway(
		"GET",
		`${V1.auth.customers}/search${smartSearchBody(data)}`
	);
	return response;
};

const smartSearchBody = (data) => {
	let query = "?";

	query += `field=${data.field}&`;
	query += `value=${data.value}`;

	return query;
};

const CustomerService = {
	getAll,
	get,
	filter,
	put,
	search,
};

export default CustomerService;
