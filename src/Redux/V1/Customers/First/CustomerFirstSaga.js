import { takeEvery, put } from "redux-saga/effects";
import CUSTOMER from "Redux/V1/Customers/First/CustomerFirstActionType";
import CustomerFirstAction from "Redux/V1//Customers/First/CustomerFirstAction";
import CustomerService from "Services/V1/CustomerService";

function* customerDetails(data) {
	try {
		const response = yield CustomerService.get(data.request);
		if (response.success) {
			yield put(
				CustomerFirstAction.customerFirstSuccess(response.data)
			);
		} else {
			yield put(
				CustomerFirstAction.customerFirstFailed(
					response.error.message
				)
			);
		}
	} catch (error) {
		console.log(error);
	}
}

export function* CustomerFirstSaga() {
	yield takeEvery(CUSTOMER.CUSTOMER_FIRST, customerDetails);
}
