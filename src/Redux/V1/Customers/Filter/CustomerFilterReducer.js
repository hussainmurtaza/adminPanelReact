import CUSTOMERS from "Redux/V1/Customers/Filter/CustomerFilterActionType";

const CustomerFilterReducer = (
	state = {
		loading: false,
		success: false,
		customers: [],
		pagination: "",
	},
	action
) => {
	switch (action.type) {
		case CUSTOMERS.CUSTOMERS_FILTER:
			return {
				...state,
				loading: true,
				error: null,
			};
		case CUSTOMERS.CUSTOMERS_FILTER_SUCCESS:
			return {
				...state,
				loading: false,
				customers: action.response.customers,
				pagination: action.response.pagination,
			};
		case CUSTOMERS.CUSTOMERS_FILTER_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default CustomerFilterReducer;
