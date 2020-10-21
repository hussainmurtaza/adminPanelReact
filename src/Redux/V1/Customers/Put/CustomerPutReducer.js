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
		case CUSTOMER.CUSTOMERS_PUT:
			return {
				...state,
				loading: true,
				err_mess: null,
			};
		case CUSTOMER.CUSTOMERS_PUT_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				customer: action.response.customer,
			};
		case CUSTOMER.CUSTOMERS_PUT_FAILED:
			return { ...state, loading: false, err_mess: action.response };
		default:
			return state;
	}
};

export default CustomerPutReducer;
