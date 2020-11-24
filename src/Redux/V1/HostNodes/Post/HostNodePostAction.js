import HOSTNODE from "Redux/V1/HostNodes/Post/HostNodeActionType";

const HostNodePostAction = {
	postHostNode,
	postHostNodeSuccess,
	postHostNodeFailed,
};

function postHostNode(data) {
	return {
		type: HOSTNODE.HOSTNODE_POST,
		request: data,
	};
}

function postHostNodeSuccess(data) {
	return {
		type: HOSTNODE.HOSTNODE_POST_SUCCESS,
		response: data,
	};
}

function postHostNodeFailed(data) {
	return {
		type: HOSTNODE.HOSTNODE_POST_FAILED,
		response: data,
	};
}

export default HostNodePostAction;
