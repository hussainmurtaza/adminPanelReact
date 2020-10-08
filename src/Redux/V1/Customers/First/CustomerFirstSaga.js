import { takeEvery, put } from "redux-saga/effects";
import CUSTOMER_DETAILS from "Redux/V1/Customers/First/CustomerFirstActionType";
import CustomerDetailsAction from "Redux/V1//Customers/First/CustomerFirstAction";
import CustomerService from "Services/V1/CustomerService";

function* customerDetails(data) {
	try {
		const response = yield CustomerService.get(data.request);
		if (response.success) {
			yield put(
				CustomerDetailsAction.customerDetailSuccess(response.data)
			);
		} else {
			yield put(
				CustomerDetailsAction.customerDetailFailed(
					response.error.message
				)
			);
		}
	} catch (error) {
		console.log(error);
	}
}

export function* CustomerFirstSaga() {
	yield takeEvery(CUSTOMER_DETAILS.CUSTOMER_DETAILS_GET, customerDetails);
}
