import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const getAll = async () => {
	const response = await Gateway.authGateway("GET", V1.auth.hostnodes);
	return response;
};

const get = async (data) => {
	const response = await Gateway.authGateway(
		"GET",
		V1.auth.hostnodes + "/" + data
	);
	return response;
};

const hostNodeDelete = async (data) => {
	const response = await Gateway.authGateway(
		"DELETE",
		V1.auth.hostnodes + "/" + data
	);
	return response;
};

const post = async (data) => {
	const response = await Gateway.authGateway(
		"POST",
		V1.auth.hostnodes,
		hostNodePostData(data)
	);
	return response;
};

const hostNodePostData = (data) => {
	let _data = {};
	_data.public_ip = data.public_ip;
	_data.ram = data.ram;
	_data.disk = data.disk;
	_data.cpu = data.cpu;
	_data.status = data.status.value;
	_data.bandwidth = data.bandwidth;
	_data.identity = data.identity;
	_data.available_ram = data.available_ram;
	_data.available_cpu = data.available_cpu;
	_data.available_disk = data.available_disk;
	_data.available_bandwith = data.available_bandwith;
	_data.server = data.server;
	_data.private_ip = data.private_ip;
	_data.data_center_id = data.data_center_id.value;

	return JSON.stringify(_data);
};

const put = async (data, id) => {
	const response = await Gateway.authGateway(
		"PUT",
		`${V1.auth.hostnodes}/${id}`,
		hostNodePostData(data)
	);
	return response;
};

const hostNodeStatus = async (data) => {
	console.log(data, "datastatus");
	const response = await Gateway.authGateway(
		"PUT",
		V1.hostnode.hostnode_status + data
	);
	return response;
};

const HostNodeService = {
	getAll,
	get,
	hostNodeDelete,
	post,
	put,
	hostNodeStatus,
};

export default HostNodeService;
