import CUSTOMER_DETAILS from "Redux/V1/Customers/First/CustomerFirstActionType";

const customerDetails = (
	state = {
		loading: false,
		customer: {},
		err_mess: null,
		fetched: false,
	},
	action
) => {
	switch (action.type) {
		case CUSTOMER_DETAILS.CUSTOMER_DETAILS_GET:
			return {
				...state,
				loading: true,
			};
		case CUSTOMER_DETAILS.CUSTOMER_DETAILS_GET_SUCCESS:
			return {
				...state,
				loading: false,
				customer: action.response.customer,
			};
		case CUSTOMER_DETAILS.CUSTOMER_DETAILS_GET_FAILED:
			return { ...state, loading: false, err_mess: action.response };
		default:
			return state;
	}
};

export default customerDetails;
