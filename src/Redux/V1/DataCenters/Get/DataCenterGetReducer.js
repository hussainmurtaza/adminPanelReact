import DATACENTER from "Redux/V1/DataCenters/Get/DataCenterGetActionType";

const DataCenterDetails = (
	state = {
		loading: false,
		data_centers: [],
	},
	action
) => {
	switch (action.type) {
		case DATACENTER.DATACENTERS_GET:
			return {
				...state,
				loading: true,
			};
		case DATACENTER.DATACENTERS_GET_SUCCESS:
			return {
				...state,
				loading: false,
				data_centers: action.response.data_centers,
			};
		case DATACENTER.DATACENTERS_GET_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default DataCenterDetails;
