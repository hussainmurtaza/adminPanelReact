import { takeEvery, put } from "redux-saga/effects";
import INVOICE from "Redux/V1/Invoices/Filter/InvoiceFilterActionType";
import InvoicesAction from "Redux/V1/Invoices/Filter/InvoiceFilterAction";
import InvoiceService from "Services/V1/InvoiceService";

function* invoiceFilter(data) {
	try {
		const response = yield InvoiceService.filter(data.request);
		if (response.success) {
			yield put(InvoicesAction.filterInvoicesSuccess(response.data));
		} else {
			yield put(InvoicesAction.filterInvoicesFailed(response.error));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* InvoiceFilterSaga() {
	yield takeEvery(INVOICE.INVOICES_FILTER, invoiceFilter);
}
