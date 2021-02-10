import { takeEvery, put } from "redux-saga/effects";
import CUSTOMER from "Redux/V1/Customers/CustomerInvoice/CustomerInvoiceActionType";
import CustomerInvoiceAction from "Redux/V1/Customers/CustomerInvoice/CustomerInvoiceAction";
import CustomerService from "Services/V1/CustomerService";

function* customerInvoice(data) {
    try {
        const response = yield CustomerService.customerInvoice(data.request);
        if (response.success) {
            yield put(
                CustomerInvoiceAction.customerInvoiceSuccess(response.data)
            );
        } else {
            yield put(
                CustomerInvoiceAction.customerInvoiceFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* CustomerInvoiceSaga() {
    yield takeEvery(CUSTOMER.CUSTOMER_INVOICE, customerInvoice);
}
