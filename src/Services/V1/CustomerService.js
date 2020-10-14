import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const getAll = async (data) => {
	//console.log(data,"service form data");
	const response = await Gateway.authGateway(
		"GET", 
		V1.auth.customers + queryBody(data) ,
		);
	return response;
};


const queryBody = (data) => {
	let query = "?";
	query += `first_name=${data.first_name}&`;
	query += `last_name=${data.last_name}&`;
	query += `email=${data.email}&`;
	query += `status=${data.status}&`;

	return query;
};


const get = async (data) => {
	const response = await Gateway.authGateway(
		"GET",
		V1.auth.customers + "/" + data
	);
	return response;
};

const CustomerService = {
	getAll,
	get,
};

export default CustomerService;
