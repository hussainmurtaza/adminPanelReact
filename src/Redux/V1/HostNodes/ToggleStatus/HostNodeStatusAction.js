import HOSTNODE from "Redux/V1/HostNodes/ToggleStatus/HostNodeStatusActionType";

const HostNodeStatusAction = {
	hostNodeStatus,
	hostNodeStatusSuccess,
	hostNodeStatusFailed,
};

function hostNodeStatus(data) {
	return {
		type: HOSTNODE.HOSTNODE_STATUS,
		request: data,
	};
}
function hostNodeStatusSuccess(data) {
	return {
		type: HOSTNODE.HOSTNODE_STATUS_SUCCESS,
		response: data,
	};
}
function hostNodeStatusFailed(data) {
	return {
		type: HOSTNODE.HOSTNODE_STATUS_FAILED,
		response: data,
	};
}

export default HostNodeStatusAction;
