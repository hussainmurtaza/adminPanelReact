import { takeEvery, put } from "redux-saga/effects";
import INVOICE from "Redux/V1/Invoices/First/InvoiceFirstActionType";
import InvoiceFirstAction from "Redux/V1/Invoices/First/InvoiceFirstAction";
import InvoiceService from "Services/V1/InvoiceService";

function* invoiceDetails(data) {
	try {
		const response = yield InvoiceService.get(data.request);
		if (response.success) {
			yield put(InvoiceFirstAction.invoiceFirstSuccess(response.data));
		} else {
			yield put(
				InvoiceFirstAction.invoiceFirstFailed(response.error.message)
			);
		}
	} catch (error) {
		console.log(error);
	}
}

export function* InvoiceFirstSaga() {
	yield takeEvery(INVOICE.INVOICE_FIRST, invoiceDetails);
}
