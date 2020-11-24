import { takeEvery, put } from "redux-saga/effects";
import DATACENTER from "Redux/V1/DataCenters/Put/DataCenterPutActionType";
import DataCenterPutAction from "Redux/V1/DataCenters/Put/DataCenterPutAction";
import DataCenterService from "Services/V1/DataCenterService";
import ToastHelper from "Helpers/ToastHelper";

function* dataCenterPut(data) {
	try {
		const response = yield DataCenterService.put(
			data.request.form,
			data.request.id
		);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(DataCenterPutAction.dataCenterPutSuccess(response.data));
		} else {
			ToastHelper.error(response.error.message);
			yield put(DataCenterPutAction.dataCenterPutFailed(response.error));
		}
	} catch (error) {
		ToastHelper.error();
	}
}

export function* DataCenterPutSaga() {
	yield takeEvery(DATACENTER.DATACENTER_PUT, dataCenterPut);
}
