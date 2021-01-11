import INVOICE from "Redux/V1/Invoices/Filter/InvoiceFilterActionType";

const invoiceFilter = (data) => {
	return {
		type: INVOICE.INVOICE_FILTER,
		request: data,
	};
};
const invoiceFilterSuccess = (data) => {
	return {
		type: INVOICE.INVOICE_FILTER_SUCCESS,
		response: data,
	};
};
const invoiceFilterFailed = (data) => {
	return {
		type: INVOICE.INVOICE_FILTER_FAILED,
		response: data,
	};
};
const InvoiceFilterAction = {
	invoiceFilter,
	invoiceFilterSuccess,
	invoiceFilterFailed,
};
export default InvoiceFilterAction;
