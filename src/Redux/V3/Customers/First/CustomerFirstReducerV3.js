import CUSTOMER from "Redux/V3/Customers/ActionTypeV3";

const CustomerFirstReducerV3 = (
    state = {
        loading: false,
        customer_response: [],
        customer: [],
        affiliate: [],
        err_mess: null,
        fetched: false,
    },
    action
) => {
    switch (action.type) {
        case CUSTOMER.CUSTOMER_FIRST_V3:
            return {
                ...state,
                loading: true,
            };
        case CUSTOMER.CUSTOMER_FIRST_SUCCESS_V3:
            return {
                ...state,
                loading: false,
                customer_response: action.response,
                customer: action.response.customer,
                affiliate: action.response.customer.affiliate,
                fetched: true,
            };
        case CUSTOMER.CUSTOMER_FIRST_FAILED_V3:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default CustomerFirstReducerV3;
