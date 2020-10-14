import { takeEvery, put } from "redux-saga/effects";
import CUSTOMER from "Redux/V1/Customers/Get/CustomerGetActionType";
import CustomersAction from "Redux/V1/Customers/Get/CustomerGetAction";
import CustomerService from "Services/V1/CustomerService";

function* customerGet(data) {
	try {
		
		const response = yield CustomerService.getAll(data.request);
		if (response.success) {
			yield put(CustomersAction.getCustomersSuccess(response.data));
		} else {
			yield put(CustomersAction.getCustomersFailed(response.error));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* CustomerGetSaga() {
	yield takeEvery(CUSTOMER.GET_CUSTOMERS, customerGet);
}
