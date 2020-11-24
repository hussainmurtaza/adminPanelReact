import { takeEvery, put } from "redux-saga/effects";
import DATACENTER from "Redux/V1/DataCenters/Post/DataCenterPostActionType";
import DataCenterPostAction from "Redux/V1/DataCenters/Post/DataCenterPostAction";
import DataCenterService from "Services/V1/DataCenterService";
import ToastHelper from "Helpers/ToastHelper";

function* dataCenterPOST(data) {
	try {
		const response = yield DataCenterService.post(data.request);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(
				DataCenterPostAction.postDataCentersSuccess(response.data)
			);
			setTimeout(function () {
				window.location.href = "/datacenters";
			}, 1000);
		} else {
			ToastHelper.error(response.error.message);
			yield put(
				DataCenterPostAction.postDataCentersFailed(response.error)
			);
		}
	} catch (error) {
		ToastHelper.error();
	}
}

export function* DataCenterPostSaga() {
	yield takeEvery(DATACENTER.DATACENTER_POST, dataCenterPOST);
}
