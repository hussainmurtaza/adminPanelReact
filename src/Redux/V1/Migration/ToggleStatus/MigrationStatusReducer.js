import MIGRATION from "Redux/V1/Migration/ToggleStatus/MigrationStatusActionType";

const MigrationStatusReducer = (
	state = {
		loading: false,
		success: false,
		migration_status: {},
		err_mess: "",
	},
	action
) => {
	switch (action.type) {
		case MIGRATION.MIGRATION_STATUS:
			return {
				...state,
				loading: true,
				err_mess: null,
			};
		case MIGRATION.MIGRATION_STATUS_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				migration_status: action.response.migration_status,
			};
		case MIGRATION.MIGRATION_STATUS_FAILED:
			return { ...state, loading: false, err_mess: action.response };
		default:
			return state;
	}
};

export default MigrationStatusReducer;
