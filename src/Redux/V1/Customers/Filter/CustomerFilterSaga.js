import { takeEvery, put } from "redux-saga/effects";
import CUSTOMER from "Redux/V1/Customers/Filter/CustomerFilterActionType";
import CustomersAction from "Redux/V1/Customers/Filter/CustomerFilterAction";
import CustomerService from "Services/V1/CustomerService";

function* customerFilter(data) {
	try {
		const response = yield CustomerService.filter(data.request);
		if (response.success) {
			yield put(CustomersAction.filterCustomersSuccess(response.data));
		} else {
			yield put(CustomersAction.filterCustomersFailed(response.error));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* CustomerFilterSaga() {
	yield takeEvery(CUSTOMER.FILTER_CUSTOMERS, customerFilter);
}
