import { takeEvery, put } from "redux-saga/effects";
import MIGRATION from "Redux/V1/Migration/Trash/MigrationTrashActionType";
import MigrationTrashAction from "Redux/V1/Migration/Trash/MigrationTrashAction";
import MigrationService from "Services/V1/MigrationService";

function* migrationTrash(data) {
    try {
        const response = yield MigrationService.migrationTrash(data.request);
        if (response.success) {
            yield put(
                MigrationTrashAction.migrationTrashSuccess(response.data)
            );
        } else {
            yield put(
                MigrationTrashAction.migrationTrashFailed(response.error)
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* MigrationTrashSaga() {
    yield takeEvery(MIGRATION.MIGRATION_TRASH, migrationTrash);
}
