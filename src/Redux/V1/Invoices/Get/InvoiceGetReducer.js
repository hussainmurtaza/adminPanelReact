import INVOICES from "Redux/V1/Invoices/Get/InvoiceGetActionType";

const InvoicesDetails = (
	state = {
		loading: false,
		invoices: [],
	},
	action
) => {
	switch (action.type) {
		case INVOICES.GET_INVOICES:
			return {
				...state,
				loading: true,
				error: null,
			};
		case INVOICES.GET_INVOICES_SUCCESS:
			return {
				...state,
				loading: false,
				invoices: action.response.invoices,
			};
		case INVOICES.GET_INVOICES_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default InvoicesDetails;
