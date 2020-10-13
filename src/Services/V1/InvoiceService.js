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

const InvoiceService = {
	getAll,
	get,
};

export default InvoiceService;
