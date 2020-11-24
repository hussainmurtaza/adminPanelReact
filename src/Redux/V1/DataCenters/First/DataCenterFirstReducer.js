import DATACENTER from "Redux/V1/DataCenters/First/DataCenterFirstActionType";

const DataCenterFirstReducer = (
	state = {
		loading: false,
		data_center: {},
		err_mess: null,
		fetched: false,
	},
	action
) => {
	switch (action.type) {
		case DATACENTER.DATACENTER_FIRST:
			return {
				...state,
				loading: true,
				fetched: false,
			};
		case DATACENTER.DATACENTER_FIRST_SUCCESS:
			return {
				...state,
				loading: false,
				data_center: action.response.data_center,
				fetched: true,
			};
		case DATACENTER.DATACENTER_FIRST_FAILED:
			return {
				...state,
				loading: false,
				err_mess: action.response,
				fetched: true,
			};
		default:
			return state;
	}
};

export default DataCenterFirstReducer;
