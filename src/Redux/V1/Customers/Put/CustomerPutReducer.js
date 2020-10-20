import CUSTOMER from "Redux/V1/Customers/Put/CustomerPutActionType";

const CustomerPutReducer = (
	state = {
		loading: false,
		success: false,
		customer: {},
		err_mess: "",
	},
	action
) => {
	switch (action.type) {
		case CUSTOMER.PUT_CUSTOMERS:
			return {
				...state,
				loading: true,
				err_mess: null,
			};
		case CUSTOMER.PUT_CUSTOMERS_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				customer: action.response.customer,
			};
		case CUSTOMER.PUT_CUSTOMERS_FAILED:
			return { ...state, loading: false, err_mess: action.response };
		default:
			return state;
	}
};

export default CustomerPutReducer;
