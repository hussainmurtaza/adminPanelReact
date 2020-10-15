import CUSTOMER from "Redux/V1/Customers/Filter/CustomerFilterActionType";

const CustomersFilterAction = {
	filterCustomers,
	filterCustomersSuccess,
	filterCustomersFailed,
};

function filterCustomers(data) {
	return {
		type: CUSTOMER.FILTER_CUSTOMERS,
		request: data,
	};
}
function filterCustomersSuccess(data) {
	return {
		type: CUSTOMER.FILTER_CUSTOMERS_SUCCESS,
		response: data,
	};
}
function filterCustomersFailed(data) {
	return {
		type: CUSTOMER.FILTER_CUSTOMERS_FAILED,
		response: data,
	};
}

export default CustomersFilterAction;
