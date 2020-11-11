import HOSTNODE from "Redux/V1/HostNodes/First/HostNodeFirstActionType";

const HostNodeFirstAction = {
	hostNodeFirst,
	hostNodeFirstSuccess,
	hostNodeFirstFailed,
};

function hostNodeFirst(data) {
	return {
		type: HOSTNODE.HOSTNODE_FIRST,
		request: data,
	};
}
function hostNodeFirstSuccess(data) {
	return {
		type: HOSTNODE.HOSTNODE_FIRST_SUCCESS,
		response: data
	};
}
function hostNodeFirstFailed(data) {
	return {
		type: HOSTNODE.HOSTNODE_FIRST_FAILED,
		response: data,
	};
}

export default HostNodeFirstAction;
