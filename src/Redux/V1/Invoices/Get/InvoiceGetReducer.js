import INVOICES from "Redux/V1/Invoices/Get/InvoiceGetActionType";

const InvoicesDetails = (
	state = {
		loading: false,
		invoices: [],
	},
	action
) => {
	switch (action.type) {
		case INVOICES.INVOICES_GET:
			return {
				...state,
				loading: true,
				error: null,
			};
		case INVOICES.INVOICES_GET_SUCCESS:
			return {
				...state,
				loading: false,
				invoices: action.response.invoices,
			};
		case INVOICES.INVOICES_GET_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default InvoicesDetails;
