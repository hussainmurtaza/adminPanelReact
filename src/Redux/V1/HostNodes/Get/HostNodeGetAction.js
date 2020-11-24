import HOSTNODE from "Redux/V1/HostNodes/Get/HostNodeGetActionType";

const HostNodesAction = {
	getHostNodes,
	getHostNodesSuccess,
	getHostNodesFailed,
};

function getHostNodes() {
	return {
		type: HOSTNODE.HOSTNODES_GET,
	};
}
function getHostNodesSuccess(data) {
	return {
		type: HOSTNODE.HOSTNODES_GET_SUCCESS,
		response: data,
	};
}
function getHostNodesFailed(data) {
	return {
		type: HOSTNODE.HOSTNODES_GET_FAILED,
		response: data,
	};
}

export default HostNodesAction;
