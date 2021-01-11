import { takeEvery, put } from "redux-saga/effects";
import INVOICE from "Redux/V1/Invoices/Filter/InvoiceFilterActionType";
import InvoiceFilterAction from "Redux/V1/Invoices/Filter/InvoiceFilterAction";
import InvoiceService from "Services/V1/InvoiceService";

function* invoiceFilter(data) {
	try {
		const response = yield InvoiceService.filter(data.request);
		if (response.success) {
			yield put(InvoiceFilterAction.invoiceFilterSuccess(response.data));
		} else {
			yield put(InvoiceFilterAction.invoiceFilterFailed(response.error));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* InvoiceFilterSaga() {
	yield takeEvery(INVOICE.INVOICE_FILTER, invoiceFilter);
}
