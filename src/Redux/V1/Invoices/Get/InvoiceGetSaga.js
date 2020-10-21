import { takeEvery, put } from "redux-saga/effects";
import INVOICES from "Redux/V1/Invoices/Get/InvoiceGetActionType";
import InvoicesAction from "Redux/V1/Invoices/Get/InvoiceGetAction";
import InvoiceService from "Services/V1/InvoiceService";

function* invoiceGet() {
	try {
		const response = yield InvoiceService.getAll();
		if (response.success) {
			yield put(InvoicesAction.getInvoicesSuccess(response.data));
		} else {
			yield put(InvoicesAction.getInvoicesFailed(response.error));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* InvoiceGetSaga() {
	yield takeEvery(INVOICES.INVOICES_GET, invoiceGet);
}
