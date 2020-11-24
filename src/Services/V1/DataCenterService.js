import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const getAll = async () => {
	const response = await Gateway.authGateway("GET", V1.auth.data_centers);
	return response;
};

const get = async (data) => {
	const response = await Gateway.authGateway(
		"GET",
		V1.auth.data_centers + "/" + data
	);
	return response;
};

const post = async (data) => {
	const response = await Gateway.authGateway(
		"POST",
		V1.auth.data_centers,
		dataCenterPostData(data)
	);
	return response;
};

const dataCenterPostData = (data) => {
	let _data = {};
	_data.location = data.location;
	_data.provider_name = data.provider_name;
	_data.status = data.status.value;
	_data.identity = data.identity;
	_data.default = data.default.value;
	return JSON.stringify(_data);
};

const dataCenterDelete = async (data) => {
	const response = await Gateway.authGateway(
		"DELETE",
		V1.auth.data_centers + "/" + data
	);
	return response;
};
const put = async (data, id) => {
	const response = await Gateway.authGateway(
		"PUT",
		`${V1.auth.data_centers}/${id}`,
		dataCenterPostData(data)
	);
	return response;
};

const DataCenterService = {
	getAll,
	get,
	post,
	dataCenterDelete,
	put,
};

export default DataCenterService;
