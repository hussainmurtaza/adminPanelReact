import { takeEvery, put } from "redux-saga/effects";
import MIGRATION from "Redux/V1/Migration/Get/MigrationGetActionType";
import MigrationsAction from "Redux/V1/Migration/Get/MigrationGetAction";
import MigrationService from "Services/V1/MigrationService";

function* migrationGet() {
	try {
		const response = yield MigrationService.getAll();
		if (response.success) {
			yield put(MigrationsAction.getMigrationsSuccess(response.data));
		} else {
			yield put(MigrationsAction.getMigrationsFailed(response.error));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* MigrationGetSaga() {
	yield takeEvery(MIGRATION.MIGRATIONS_GET, migrationGet);
}
