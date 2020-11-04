import MIGRATION from "Redux/V1/Migration/First/MigrationFirstActionType";

const MigrationFirstAction = {
	migrationFirst,
	migrationFirstSuccess,
	migrationFirstFailed,
};

function migrationFirst(data) {
	return {
		type: MIGRATION.MIGRATION_FIRST,
		request: data,
	};
}
function migrationFirstSuccess(data) {
	return {
		type: MIGRATION.MIGRATION_FIRST_SUCCESS,
		response: data,
	};
}
function migrationFirstFailed(data) {
	return {
		type: MIGRATION.MIGRATION_FIRST_FAILED,
		response: data,
	};
}

export default MigrationFirstAction;
