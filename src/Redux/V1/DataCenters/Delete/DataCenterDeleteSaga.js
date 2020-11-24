import { takeEvery, put } from "redux-saga/effects";
import DATACENTER from "Redux/V1/DataCenters/Delete/DataCenterDeleteActionType";
import DataCenterDeleteAction from "Redux/V1/DataCenters/Delete/DataCenterDeleteAction";
import DataCenterGetAction from "Redux/V1/DataCenters/Get/DataCenterGetAction";
import DataCenterService from "Services/V1/DataCenterService";
import ToastHelper from "Helpers/ToastHelper";

function* dataCenterDELETE(data) {
	try {
		const response = yield DataCenterService.dataCenterDelete(data.request);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(
				DataCenterDeleteAction.deleteDataCenterSuccess(response.data)
			);
			yield put(DataCenterGetAction.getDataCenters());
		} else {
			ToastHelper.error(response.error.message);
			yield put(
				DataCenterDeleteAction.deleteDataCenterFailed(response.error)
			);
		}
	} catch (error) {
		ToastHelper.error();
	}
}

export function* DataCenterDeleteSaga() {
	yield takeEvery(DATACENTER.DATACENTER_DELETE, dataCenterDELETE);
}
