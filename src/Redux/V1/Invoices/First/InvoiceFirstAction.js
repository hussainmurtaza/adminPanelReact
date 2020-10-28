import INVOICE from "Redux/V1/Invoices/First/InvoiceFirstActionType";

const InvoiceFirstAction = {
	invoiceFirst,
	invoiceFirstSuccess,
	invoiceFirstFailed,
};

function invoiceFirst(data) {
	return {
		type: INVOICE.INVOICE_FIRST,
		request: data,
	};
}
function invoiceFirstSuccess(data) {
	return {
		type: INVOICE.INVOICE_FIRST_SUCCESS,
		response: data,
	};
}
function invoiceFirstFailed(data) {
	return {
		type: INVOICE.INVOICE_FIRST_FAILED,
		response: data,
	};
}

export default InvoiceFirstAction;
