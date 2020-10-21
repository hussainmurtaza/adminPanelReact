import INVOICES from "Redux/V1/Invoices/Get/InvoiceGetActionType";

const InvoicesAction = {
	getInvoices,
	getInvoicesSuccess,
	getInvoicesFailed,
};

function getInvoices() {
	return {
		type: INVOICES.INVOICES_GET,
	};
}
function getInvoicesSuccess(data) {
	return {
		type: INVOICES.INVOICES_GET_SUCCESS,
		response: data,
	};
}
function getInvoicesFailed(data) {
	return {
		type: INVOICES.INVOICES_GET_FAILED,
		response: data,
	};
}

export default InvoicesAction;
