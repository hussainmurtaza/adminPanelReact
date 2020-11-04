import MIGRATION from "Redux/V1/Migration/First/MigrationFirstActionType";

const invoiceDetails = (
	state = {
		loading: false,
		migration: {
			customer: {},
			site: {},
		},
		err_mess: null,
	},
	action
) => {
	switch (action.type) {
		case MIGRATION.MIGRATION_FIRST:
			return {
				...state,
				loading: true,
			};
		case MIGRATION.MIGRATION_FIRST_SUCCESS:
			return {
				...state,
				loading: false,
				migration: action.response.migration,
			};
		case MIGRATION.MIGRATION_FIRST_FAILED:
			return {
				...state,
				loading: false,
				err_mess: action.response,
			};
		default:
			return state;
	}
};

export default invoiceDetails;
