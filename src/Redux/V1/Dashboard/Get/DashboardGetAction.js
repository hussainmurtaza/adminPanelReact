import DASHBOARD from "Redux/V1/Dashboard/Get/DashboardGetActionType";

const DashboardAction = {
	getDashboard,
	getDashboardSuccess,
	getDashboardFailed,
};

function getDashboard() {
	return {
		type: DASHBOARD.DASHBOARD_GET,
	};
}
function getDashboardSuccess(data) {
	return {
		type: DASHBOARD.DASHBOARD_GET_SUCCESS,
		response: data,
	};
}
function getDashboardFailed(data) {
	return {
		type: DASHBOARD.DASHBOARD_GET_FAILED,
		response: data,
	};
}

export default DashboardAction;
