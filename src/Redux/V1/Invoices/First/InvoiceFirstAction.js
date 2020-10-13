import INVOICE_DETAILS from "Redux/V1/Invoices/First/InvoiceFirstActionType";

const InvoiceDetailAction = {
	invoiceDetail,
	invoiceDetailSuccess,
	invoiceDetailFailed,
};

function invoiceDetail(data) {
	return {
		type: INVOICE_DETAILS.INVOICE_DETAILS_GET,
		request: data,
	};
}
function invoiceDetailSuccess(data) {
	return {
		type: INVOICE_DETAILS.INVOICE_DETAILS_GET_SUCCESS,
		response: data,
	};
}
function invoiceDetailFailed(data) {
	return {
		type: INVOICE_DETAILS.INVOICE_DETAILS_GET_FAILED,
		response: data,
	};
}

export default InvoiceDetailAction;
