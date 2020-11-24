import HOSTNODE from "Redux/V1/HostNodes/Get/HostNodeGetActionType";

const HostNodeDetails = (
	state = {
		loading: false,
		host_nodes: [],
	},
	action
) => {
	switch (action.type) {
		case HOSTNODE.HOSTNODES_GET:
			return {
				...state,
				loading: true,
			};
		case HOSTNODE.HOSTNODES_GET_SUCCESS:
			return {
				...state,
				loading: false,
				host_nodes: action.response.host_nodes,
			};
		case HOSTNODE.HOSTNODES_GET_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default HostNodeDetails;
