import CUSTOMER from "Redux/V1/Customers/Get/CustomerGetActionType";

const CustomersDetails = (
	state = {
		loading: false,
		customers: [],
	},
	action
) => {
	switch (action.type) {
		case CUSTOMER.GET_CUSTOMERS:
			return {
				...state,
				loading: true,
				error: null,
			};
		case CUSTOMER.GET_CUSTOMERS_SUCCESS:
			return {
				...state,
				loading: false,
				customers: action.response.customers,
			};
		case CUSTOMER.GET_CUSTOMERS_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default CustomersDetails;
