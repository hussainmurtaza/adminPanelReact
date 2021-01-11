import INVOICE from "Redux/V1/Invoices/Filter/InvoiceFilterActionType";

const InvoiceFilterReducer = (
	state = {
		loading: false,
		success: false,
		invoices: [],
		pagination: "",
	},
	action
) => {
	switch (action.type) {
		case INVOICE.INVOICE_FILTER:
			return {
				...state,
				loading: true,
				error: null,
			};
		case INVOICE.INVOICE_FILTER_SUCCESS:
			return {
				...state,
				loading: false,
				invoices: action.response.invoices,
				pagination: action.response.pagination,
			};
		case INVOICE.INVOICE_FILTER_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default InvoiceFilterReducer;
