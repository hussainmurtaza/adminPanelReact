import CUSTOMER from "Redux/V1/Customers/Get/CustomerGetActionType";

const CustomersAction = {
	getCustomers,
	getCustomersSuccess,
	getCustomersFailed,
};

function getCustomers() {
	return {
		type: CUSTOMER.GET_CUSTOMERS,
	};
}
function getCustomersSuccess(data) {
	return {
		type: CUSTOMER.GET_CUSTOMERS_SUCCESS,
		response: data,
	};
}
function getCustomersFailed(data) {
	return {
		type: CUSTOMER.GET_CUSTOMERS_FAILED,
		response: data,
	};
}

export default CustomersAction;
