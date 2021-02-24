import MIGRATION from "Redux/V1/Migration/Trash/MigrationTrashActionType";

const MigrationTrashReducer = (
    state = {
        loading: false,
        success: false,
        migrations: [],
        pagination: "",
    },
    action
) => {
    switch (action.type) {
        case MIGRATION.MIGRATION_TRASH:
            return {
                ...state,
                loading: true,
                error: null,
                migrations: [],
                pagination: "",
            };
        case MIGRATION.MIGRATION_TRASH_SUCCESS:
            return {
                ...state,
                loading: false,
                migrations: action.response.trashed_migrations,
                pagination: action.response.pagination,
            };
        case MIGRATION.MIGRATION_TRASH_FAILED:
            return {
                ...state,
                loading: false,
                error: action.response,
                migrations: [],
                pagination: "",
            };
        default:
            return state;
    }
};
export default MigrationTrashReducer;
