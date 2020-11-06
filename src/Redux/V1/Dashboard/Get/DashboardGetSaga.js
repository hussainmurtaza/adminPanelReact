import { takeEvery, put } from "redux-saga/effects";
import DASHBOARD from "Redux/V1/Dashboard/Get/DashboardGetActionType";
import DashboardAction from "Redux/V1/Dashboard/Get/DashboardGetAction";
import DashboardService from "Services/V1/DashboardService";

function* dashboardGet() {
	try {
		const response = yield DashboardService.get();
		if (response.success) {
			yield put(DashboardAction.getDashboardSuccess(response.data));
		} else {
			yield put(DashboardAction.getDashboardFailed(response.error));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* DashboardGetSaga() {
	yield takeEvery(DASHBOARD.DASHBOARD_GET, dashboardGet);
}
