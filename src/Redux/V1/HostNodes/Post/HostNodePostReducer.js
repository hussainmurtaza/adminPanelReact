import HOSTNODE from "Redux/V1/HostNodes/Post/HostNodeActionType";

const PostHostNode = (
	state = {
		loading: false,
		success: false,
		host_node: [],
	},
	action
) => {
	switch (action.type) {
		case HOSTNODE.HOSTNODE_POST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case HOSTNODE.HOSTNODE_POST_SUCCESS:
			return {
				...state,
				loading: false,
				host_node: action.response.host_node,
				success: true,
			};
		case HOSTNODE.HOSTNODE_POST_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default PostHostNode;
