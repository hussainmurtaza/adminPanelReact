import INVOICES from "Redux/V1/Invoices/Get/InvoiceGetActionType";

const InvoicesAction = {
	getInvoices,
	getInvoicesSuccess,
	getInvoicesFailed,
};

function getInvoices() {
	return {
		type: INVOICES.GET_INVOICES,
	};
}
function getInvoicesSuccess(data) {
	return {
		type: INVOICES.GET_INVOICES_SUCCESS,
		response: data,
	};
}
function getInvoicesFailed(data) {
	return {
		type: INVOICES.GET_INVOICES_FAILED,
		response: data,
	};
}

export default InvoicesAction;
