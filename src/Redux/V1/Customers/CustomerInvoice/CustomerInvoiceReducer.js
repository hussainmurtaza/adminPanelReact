import CUSTOMER from "Redux/V1/Customers/CustomerInvoice/CustomerInvoiceActionType";

const CustomerInvoiceReducer = (
    state = {
        loading: false,
        invoices: [],
        err_mess: null,
        pagination: "",
    },
    action
) => {
    switch (action.type) {
        case CUSTOMER.CUSTOMER_INVOICE:
            return {
                ...state,
                loading: true,
                invoices: [],
            };
        case CUSTOMER.CUSTOMER_INVOICE_SUCCESS:
            return {
                ...state,
                loading: false,
                invoices: action.response.invoices,
                pagination: action.response.pagination,
            };
        case CUSTOMER.CUSTOMER_INVOICE_FAILED:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                invoices: [],
            };
        default:
            return state;
    }
};

export default CustomerInvoiceReducer;
