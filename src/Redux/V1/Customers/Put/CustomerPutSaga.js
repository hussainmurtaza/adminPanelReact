import { takeEvery, put } from "redux-saga/effects";
import CUSTOMER from "Redux/V1/Customers/Put/CustomerPutActionType";
import CustomerPutAction from "Redux/V1/Customers/Put/CustomerPutAction";
import CustomerService from "Services/V1/CustomerService";
import ToastHelper from "Helpers/ToastHelper";

function* customerPut(data) {
	try {
		const response = yield CustomerService.put(data.request);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(CustomerPutAction.PutCustomersSuccess(response.data));
			setTimeout(function () {
				window.location.reload();
			}, 500);
		} else {
			ToastHelper.error(response.error.message);
			yield put(CustomerPutAction.PutCustomersFailed(response.error));
		}
	} catch (error) {
		ToastHelper.error();
	}
}

export function* CustomerPutSaga() {
	yield takeEvery(CUSTOMER.CUSTOMERS_PUT, customerPut);
}
