import { takeEvery, put } from "redux-saga/effects";
import MIGRATION from "Redux/V1/Migration/First/MigrationFirstActionType";
import MigrationFirstAction from "Redux/V1/Migration/First/MigrationFirstAction";
import MigrationService from "Services/V1/MigrationService";

function* migrationDetails(data) {
	try {
		const response = yield MigrationService.get(data.request);
		if (response.success) {
			yield put(MigrationFirstAction.migrationFirstSuccess(response.data));
		} else {
			yield put(
				MigrationFirstAction.migrationFirstFailed(response.error.message)
			);
		}
	} catch (error) {
		console.log(error);
	}
}

export function* MigrationFirstSaga() {
	yield takeEvery(MIGRATION.MIGRATION_FIRST, migrationDetails);
}
