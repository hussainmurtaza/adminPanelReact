import DASHBOARD from "Redux/V1/Dashboard/Get/DashboardGetActionType";

const DashboardDetails = (
	state = {
		loading: false,
		dashboard: [],
	},
	action
) => {
	switch (action.type) {
		case DASHBOARD.DASHBOARD_GET:
			return {
				...state,
				loading: true,
				error: null,
			};
		case DASHBOARD.DASHBOARD_GET_SUCCESS:
			return {
				...state,
				loading: false,
				dashboard: action.response.dashboard,
			};
		case DASHBOARD.DASHBOARD_GET_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default DashboardDetails;
