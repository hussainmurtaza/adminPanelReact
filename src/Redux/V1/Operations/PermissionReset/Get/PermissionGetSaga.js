import { takeEvery, put } from "redux-saga/effects";
import OPERATION from "Redux/V1/Operations/ActionType";
import PermissionsResetAction from "Redux/V1/Operations/PermissionReset/Get/PermissionGetAction";
import OperationService from "Services/V1/OperationService";
import ToastHelper from "Helpers/ToastHelper";

function* permissionsGet(data) {
    try {
        ToastHelper.info();
        const response = yield OperationService.permissionsGet(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                PermissionsResetAction.permissionsResetSuccess(response.data)
            );
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                PermissionsResetAction.permissionsResetFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* permissionsGetSaga() {
    yield takeEvery(OPERATION.PERMISSIONS_RESET, permissionsGet);
}
