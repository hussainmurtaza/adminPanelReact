import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const get = async (data) => {
	const response = await Gateway.authGateway(
		"GET",
		V1.auth.wordpress.details + data
	);
	return response;
};

const put = async (data) => {
	const _data = wordpressBody(data);
	const response = await Gateway.authGateway(
		"PUT",
		V1.auth.wordpress.update + data.identity,
		_data
	);
	return response;
};
const wordpressBody = (data) => {
	let _data = {};
	_data.type = data.type;
	_data.name = data.slug;
	return JSON.stringify(_data);
};

const refresh = async (data) => {
	const response = await Gateway.authGateway(
		"GET",
		`${V1.auth.wordpress.refresh}${data}`
	);
	return response;
};
const WordpressService = {
	get,
	put,
	refresh,
};

export default WordpressService;
