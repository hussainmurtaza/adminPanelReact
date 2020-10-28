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
	//console.log(data,"service form data");
	const response = await Gateway.authGateway(
		"GET",
		V1.auth.customers + queryBody(data)
	);
	return response;
};

const queryBody = (data) => {
	let query = "?";

	query += `first_name=${data.first_name}&`;
	//query += `last_name=${data.last_name}&`;
	query += `email=${data.email}&`;
	query += `status=${data.status}&`;
	query += `created_at=${data.created_at}&`;

	//console.log(query,"query");

	if (
		query ===
		"?first_name=undefined&email=undefined&status=undefined&created_at=undefined&"
	) {
		query += `first_name=&`;
		//query += `last_name=&`;
		query += `email=&`;
		query += `status=&`;
		query += `created_at=&`;
	} else {
		query += `first_name=${data.first_name}&`;
		//query += `last_name=${data.last_name}&`;
		query += `email=${data.email}&`;
		query += `status=${data.status}&`;
		query += `created_at=${data.created_at}&`;
	}

	return query;

	//return query;
};

// const customerPostData = (data) => {
// 	let _data = {};
// 	_data.status = data.status;

// 	return JSON.stringify(_data);
// };

const put = async (id) => {
	const response = await Gateway.authGateway(
		"PUT",
		// `${V1.auth.customers}/${id}`
		V1.auth.customers_lock + "/" + id
	);
	return response;
};

const CustomerService = {
	getAll,
	get,
	filter,
	put,
};

export default CustomerService;
