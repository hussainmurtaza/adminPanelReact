import HOSTNODE from "Redux/V1/HostNodes/First/HostNodeFirstActionType";

const hostNodeDetails = (
	state = {
		loading: false,
		host_node: {},
		err_mess: null,
	},
	action
) => {
	switch (action.type) {
		case HOSTNODE.HOSTNODE_FIRST:
			return {
				...state,
				loading: true,
			};
		case HOSTNODE.HOSTNODE_FIRST_SUCCESS:
			return {
				...state,
				loading: false,
				host_node: action.response.host_node,
			};
		case HOSTNODE.HOSTNODE_FIRST_FAILED:
			return {
				...state,
				loading: false,
				err_mess: action.response,
			};
		default:
			return state;
	}
};

export default hostNodeDetails;
