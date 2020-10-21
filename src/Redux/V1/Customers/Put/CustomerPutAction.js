import CUSTOMER from "Redux/V1/Customers/Put/CustomerPutActionType";

const CustomerPutAction = {
	PutCustomers,
	PutCustomersSuccess,
	PutCustomersFailed,
};

function PutCustomers(data) {
	return {
		type: CUSTOMER.CUSTOMERS_PUT,
		request: data,
	};
}
function PutCustomersSuccess(data) {
	return {
		type: CUSTOMER.CUSTOMERS_PUT_SUCCESS,
		response: data,
	};
}
function PutCustomersFailed(data) {
	return {
		type: CUSTOMER.PUT_CUSTOMERS_PUT_FAILED,
		response: data,
	};
}

export default CustomerPutAction;
