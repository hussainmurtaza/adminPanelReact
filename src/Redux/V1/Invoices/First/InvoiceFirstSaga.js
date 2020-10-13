import { takeEvery, put } from "redux-saga/effects";
import INVOICE_DETAILS from "Redux/V1/Invoices/First/InvoiceFirstActionType";
import InvoiceDetailsAction from "Redux/V1/Invoices/First/InvoiceFirstAction";
import InvoiceService from "Services/V1/InvoiceService";

function* invoiceDetails(data) {
	try {
		const response = yield InvoiceService.get(data.request);
		if (response.success) {
			yield put(InvoiceDetailsAction.invoiceDetailSuccess(response.data));
		} else {
			yield put(
				InvoiceDetailsAction.invoiceDetailFailed(response.error.message)
			);
		}
	} catch (error) {
		console.log(error);
	}
}

export function* InvoiceFirstSaga() {
	yield takeEvery(INVOICE_DETAILS.INVOICE_DETAILS_GET, invoiceDetails);
}
