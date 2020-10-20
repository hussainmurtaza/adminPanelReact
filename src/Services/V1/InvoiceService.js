import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const getAll = async (data) => {
	const response = await Gateway.authGateway("GET", V1.auth.invoices);
	return response;
};

const get = async (data) => {
	const response = await Gateway.authGateway(
		"GET",
		V1.auth.invoices + "/" + data
	);
	return response;
};

const filter = async (data) => {
	const response = await Gateway.authGateway(
		"GET",
		V1.auth.invoices + queryBody(data) ,
	);
	return response;
};

const queryBody = (data) => {
	let query = "?";

	query += `fullname=${data.fullname}&`;
	query += `reference=${data.reference}&`;
	query += `status=${data.status}&`;
	//query += `primary_domain_name=${data.primary_domain_name}&`;
	query += `created_at=${data.created_at}&`;

	if (query === '?fullname=undefined&reference=undefined&status=undefined&created_at=undefined&') {
		query += `fullname=&`;
		query += `reference=&`;
		query += `status=&`;
		//query += `primary_domain_name=&`;
		query += `created_at=&`;
	}
	// else {
	// 	query += `fullname=${data.customer}&`;
	// 	query += `reference=${data.reference}&`;
	// 	query += `status=${data.status}&`;
	// 	//query += `primary_domain_name=${data.primary_domain_name}&`;
	// 	query += `created_at=${data.created_at}&`;
	// }

	return query;
};

const InvoiceService = {
	getAll,
	get,
	filter,
};

export default InvoiceService;
