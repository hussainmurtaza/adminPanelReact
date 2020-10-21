import INVOICE from "Redux/V1/Invoices/First/InvoiceFirstActionType";

const invoiceDetails = (
	state = {
		loading: false,
		invoice: {
			customer: {
				first_name: null,
				last_name: null,
				status: null,
				created_at: null,
				total_sites: null,
				contact: [{
					email: null,
				}]
			},
		},
		err_mess: null,
	},
	action
) => {
	switch (action.type) {
		case INVOICE.INVOICE_FIRST:
			return {
				...state,
				loading: true,
			};
		case INVOICE.INVOICE_FIRST_SUCCESS:
			return {
				...state,
				loading: false,
				invoice: action.response.invoice,
			};
		case INVOICE.INVOICE_FIRST_FAILED:
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
