import HOSTNODE from "Redux/V1/HostNodes/Put/HostNodePutActionType";

const HostNodePutAction = {
	hostNodePut,
	hostNodePutSuccess,
	hostNodePutFailed,
};

function hostNodePut(data) {
	return {
		type: HOSTNODE.HOSTNODE_PUT,
		request: data,
	};
}
function hostNodePutSuccess(data) {
	return {
		type: HOSTNODE.HOSTNODE_PUT_SUCCESS,
		response: data,
	};
}
function hostNodePutFailed(data) {
	return {
		type: HOSTNODE.HOSTNODE_PUT_FAILED,
		response: data,
	};
}

export default HostNodePutAction;
