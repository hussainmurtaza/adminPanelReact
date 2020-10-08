import CUSTOMER_DETAILS from "Redux/V1/Customers/First/CustomerFirstActionType";

const CustomerDetailAction = {
	customerDetail,
	customerDetailSuccess,
	customerDetailFailed,
};

function customerDetail(data) {
	return {
		type: CUSTOMER_DETAILS.CUSTOMER_DETAILS_GET,
		request: data,
	};
}
function customerDetailSuccess(data) {
	return {
		type: CUSTOMER_DETAILS.CUSTOMER_DETAILS_GET_SUCCESS,
		response: data,
	};
}
function customerDetailFailed(data) {
	return {
		type: CUSTOMER_DETAILS.CUSTOMER_DETAILS_GET_FAILED,
		response: data,
	};
}

export default CustomerDetailAction;
