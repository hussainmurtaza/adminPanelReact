import INVOICE from "Redux/V1/Invoices/Filter/InvoiceFilterActionType";

const InvoicesDetails = (
	state = {
		loading: false,
		success: false,
		invoices: [],
	},
	action
) => {
	switch (action.type) {
		case INVOICE.INVOICES_FILTER:
			return {
				...state,
				loading: true,
				error: null,
			};
		case INVOICE.INVOICES_FILTER_SUCCESS:
			return {
				...state,
				loading: false,
				invoices: action.response.invoices,
			};
		case INVOICE.INVOICES_FILTER_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default InvoicesDetails;
