import MIGRATION from "Redux/V1/Migration/Get/MigrationGetActionType";

const MigrationsAction = {
	getMigrations,
	getMigrationsSuccess,
	getMigrationsFailed,
};

function getMigrations() {
	return {
		type: MIGRATION.MIGRATIONS_GET,
	};
}
function getMigrationsSuccess(data) {
	return {
		type: MIGRATION.MIGRATIONS_GET_SUCCESS,
		response: data,
	};
}
function getMigrationsFailed(data) {
	return {
		type: MIGRATION.MIGRATIONS_GET_FAILED,
		response: data,
	};
}

export default MigrationsAction;
