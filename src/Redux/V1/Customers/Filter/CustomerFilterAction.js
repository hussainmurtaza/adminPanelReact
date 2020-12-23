import CUSTOMERS from "Redux/V1/Customers/Filter/CustomerFilterActionType";

const CustomersFilterAction = {
	customersFilter,
	customersFilterSuccess,
	customersFilterFailed,
};

function customersFilter(data) {
	return {
		type: CUSTOMERS.CUSTOMERS_FILTER,
		request: data,
	};
}
function customersFilterSuccess(data) {
	return {
		type: CUSTOMERS.CUSTOMERS_FILTER_SUCCESS,
		response: data,
	};
}
function customersFilterFailed(data) {
	return {
		type: CUSTOMERS.CUSTOMERS_FILTER_FAILED,
		response: data,
	};
}

export default CustomersFilterAction;
