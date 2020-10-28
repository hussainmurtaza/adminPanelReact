import INVOICE from "Redux/V1/Invoices/Filter/InvoiceFilterActionType";

const InvoiceFilterAction = {
	filterInvoices,
	filterInvoicesSuccess,
	filterInvoicesFailed,
};

function filterInvoices(data) {
	return {
		type: INVOICE.INVOICES_FILTER,
		request: data,
	};
}
function filterInvoicesSuccess(data) {
	return {
		type: INVOICE.INVOICES_FILTER_SUCCESS,
		response: data,
	};
}
function filterInvoicesFailed(data) {
	return {
		type: INVOICE.INVOICES_FILTER_FAILED,
		response: data,
	};
}

export default InvoiceFilterAction;
