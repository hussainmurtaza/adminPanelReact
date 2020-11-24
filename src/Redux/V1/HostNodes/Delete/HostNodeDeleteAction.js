import HOSTNODE from "Redux/V1/HostNodes/Delete/HostNodeDeleteActionType";

const HostNodeDeleteAction = {
	deleteHostNode,
	deleteHostNodeSuccess,
	deleteHostNodeFailed,
};

function deleteHostNode(data) {
	return {
		type: HOSTNODE.HOSTNODE_DELETE,
		request: data,
	};
}
function deleteHostNodeSuccess(data) {
	return {
		type: HOSTNODE.HOSTNODE_DELETE_SUCCESS,
		response: data,
	};
}
function deleteHostNodeFailed(data) {
	return {
		type: HOSTNODE.HOSTNODE_DELETE_FAILED,
		response: data,
	};
}

export default HostNodeDeleteAction;
