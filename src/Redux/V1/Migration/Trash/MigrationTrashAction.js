import MIGRATION from "Redux/V1/Migration/Trash/MigrationTrashActionType";

const migrationTrash = (data) => {
    return {
        type: MIGRATION.MIGRATION_TRASH,
        request: data,
    };
};
const migrationTrashSuccess = (data) => {
    return {
        type: MIGRATION.MIGRATION_TRASH_SUCCESS,
        response: data,
    };
};
const migrationTrashFailed = (data) => {
    return {
        type: MIGRATION.MIGRATION_TRASH_FAILED,
        response: data,
    };
};

const MigrationTrashAction = {
    migrationTrash,
    migrationTrashSuccess,
    migrationTrashFailed,
};

export default MigrationTrashAction;
