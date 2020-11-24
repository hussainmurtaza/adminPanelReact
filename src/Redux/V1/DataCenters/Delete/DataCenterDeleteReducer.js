import DATACENTER from "Redux/V1/DataCenters/Delete/DataCenterDeleteActionType";

const DataCenterDeleteReducer = (
	state = {
		loading: false,
		success: false,
		datacenter_delete: {},
		err_mess: "",
	},
	action
) => {
	switch (action.type) {
		case DATACENTER.DATACENTER_DELETE:
			return {
				...state,
				loading: true,
				err_mess: null,
			};
		case DATACENTER.DATACENTER_DELETE_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				datacenter_delete: action.response,
			};
		case DATACENTER.DATACENTER_DELETE_FAILED:
			return { ...state, loading: false, err_mess: action.response };
		default:
			return state;
	}
};

export default DataCenterDeleteReducer;
