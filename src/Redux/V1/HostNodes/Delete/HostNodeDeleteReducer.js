import HOSTNODE from "Redux/V1/HostNodes/Delete/HostNodeDeleteActionType";

const HostNodeDeleteReducer = (
	state = {
		loading: false,
		success: false,
		hostnode_delete: {},
		err_mess: "",
	},
	action
) => {
	switch (action.type) {
		case HOSTNODE.HOSTNODE_DELETE:
			return {
				...state,
				loading: true,
				err_mess: null,
			};
		case HOSTNODE.HOSTNODE_DELETE_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				hostnode_delete: action.response,
			};
		case HOSTNODE.HOSTNODE_DELETE_FAILED:
			return { ...state, loading: false, err_mess: action.response };
		default:
			return state;
	}
};

export default HostNodeDeleteReducer;
