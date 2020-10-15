import CUSTOMER from "Redux/V1/Customers/Filter/CustomerFilterActionType";

const CustomersDetails = (
	state = {
		loading: false,
		success: false,
		customers: [],
	},
	action
) => {
	switch (action.type) {
		case CUSTOMER.FILTER_CUSTOMERS:
			return {
				...state,
				loading: true,
				error: null,
			};
		case CUSTOMER.FILTER_CUSTOMERS_SUCCESS:
			return {
				...state,
				loading: false,
				customers: action.response.customers,
			};
		case CUSTOMER.FILTER_CUSTOMERS_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default CustomersDetails;
