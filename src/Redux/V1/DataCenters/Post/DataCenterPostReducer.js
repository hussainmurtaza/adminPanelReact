import DATACENTER from "Redux/V1/DataCenters/Post/DataCenterPostActionType";

const DataCenterPostReducer = (
	state = {
		loading: false,
		success: false,
		data_center: [],
	},
	action
) => {
	switch (action.type) {
		case DATACENTER.DATACENTER_POST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case DATACENTER.DATACENTER_POST_SUCCESS:
			return {
				...state,
				loading: false,
				data_center: action.response.data_center,
				success: true,
			};
		case DATACENTER.DATACENTER_POST_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default DataCenterPostReducer;
