import DATACENTER from "Redux/V1/DataCenters/Put/DataCenterPutActionType";

const DataCenterPutReducer = (
	state = {
		loading: false,
		success: false,
		data_center: {},
		err_mess: "",
	},
	action
) => {
	switch (action.type) {
		case DATACENTER.DATACENTER_PUT:
			return {
				...state,
				loading: true,
				err_mess: null,
			};
		case DATACENTER.DATACENTER_PUT_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				data_center: action.response.data_center,
			};
		case DATACENTER.DATACENTER_PUT_FAILED:
			return { ...state, loading: false, err_mess: action.response };
		default:
			return state;
	}
};

export default DataCenterPutReducer;
