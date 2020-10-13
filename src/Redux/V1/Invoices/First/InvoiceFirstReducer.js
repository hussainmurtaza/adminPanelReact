import INVOICE_DETAILS from "Redux/V1/Invoices/First/InvoiceFirstActionType";

const siteDetails = (
	state = {
		loading: false,
		invoice: {
			customer: {
				first_name: null,
				last_name: null,
				status: null,
				created_at: null,
				total_sites: null,
				contact:[{
					email: null,
				}]
			},
		},
		err_mess: null,
	},
	action
) => {
	switch (action.type) {
		case INVOICE_DETAILS.INVOICE_DETAILS_GET:
			return {
				...state,
				loading: true,
			};
		case INVOICE_DETAILS.INVOICE_DETAILS_GET_SUCCESS:
			return {
				...state,
				loading: false,
				invoice: action.response.invoice,
			};
		case INVOICE_DETAILS.INVOICE_DETAILS_GET_FAILED:
			return {
				...state,
				loading: false,
				err_mess: action.response,
			};
		default:
			return state;
	}
};

export default siteDetails;
