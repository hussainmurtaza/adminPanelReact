import { takeEvery, put } from "redux-saga/effects";
import CUSTOMERS from "Redux/V1/Customers/Filter/CustomerFilterActionType";
import CustomersFilterAction from "Redux/V1/Customers/Filter/CustomerFilterAction";
import CustomerService from "Services/V1/CustomerService";

function* customerFilter(data) {
	try {
		const response = yield CustomerService.filter(data.request);
		if (response.success) {
			yield put(
				CustomersFilterAction.customersFilterSuccess(response.data)
			);
		} else {
			yield put(
				CustomersFilterAction.customersFilterFailed(response.error)
			);
		}
	} catch (error) {
		console.log(error);
	}
}

export function* CustomerFilterSaga() {
	yield takeEvery(CUSTOMERS.CUSTOMERS_FILTER, customerFilter);
}
