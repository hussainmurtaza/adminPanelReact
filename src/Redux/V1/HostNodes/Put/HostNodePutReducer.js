import HOSTNODE from "Redux/V1/HostNodes/Put/HostNodePutActionType";

const HostNodePutReducer = (
	state = {
		loading: false,
		success: false,
		host_node: {},
		err_mess: "",
	},
	action
) => {
	switch (action.type) {
		case HOSTNODE.HOSTNODE_PUT:
			return {
				...state,
				loading: true,
				err_mess: null,
			};
		case HOSTNODE.HOSTNODE_PUT_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				host_node: action.response.host_node,
			};
		case HOSTNODE.HOSTNODE_PUT_FAILED:
			return { ...state, loading: false, err_mess: action.response };
		default:
			return state;
	}
};

export default HostNodePutReducer;
