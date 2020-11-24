import HOSTNODE from "Redux/V1/HostNodes/ToggleStatus/HostNodeStatusActionType";

const HostNodeStatusReducer = (
	state = {
		loading: false,
		success: false,
		hostnode_status: {},
		err_mess: "",
	},
	action
) => {
	switch (action.type) {
		case HOSTNODE.HOSTNODE_STATUS:
			return {
				...state,
				loading: true,
				err_mess: null,
			};
		case HOSTNODE.HOSTNODE_STATUS_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				hostnode_status: action.response.hostnode_status,
			};
		case HOSTNODE.HOSTNODE_STATUS_FAILED:
			return { ...state, loading: false, err_mess: action.response };
		default:
			return state;
	}
};

export default HostNodeStatusReducer;
