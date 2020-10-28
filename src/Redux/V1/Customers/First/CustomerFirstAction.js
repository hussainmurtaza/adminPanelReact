import CUSTOMER from "Redux/V1/Customers/First/CustomerFirstActionType";

const CustomerFirstAction = {
	customerFirst,
	customerFirstSuccess,
	customerFirstFailed,
};

function customerFirst(data) {
	return {
		type: CUSTOMER.CUSTOMER_FIRST,
		request: data,
	};
}
function customerFirstSuccess(data) {
	return {
		type: CUSTOMER.CUSTOMER_FIRST_SUCCESS,
		response: data,
	};
}
function customerFirstFailed(data) {
	return {
		type: CUSTOMER.CUSTOMER_FIRST_FAILED,
		response: data,
	};
}

export default CustomerFirstAction;
