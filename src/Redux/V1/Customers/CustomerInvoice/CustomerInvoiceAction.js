import CUSTOMER from "Redux/V1/Customers/CustomerInvoice/CustomerInvoiceActionType";

const customerInvoice = (data) => {
    return {
        type: CUSTOMER.CUSTOMER_INVOICE,
        request: data,
    };
};
const customerInvoiceSuccess = (data) => {
    return {
        type: CUSTOMER.CUSTOMER_INVOICE_SUCCESS,
        response: data,
    };
};
const customerInvoiceFailed = (data) => {
    return {
        type: CUSTOMER.CUSTOMER_INVOICE_FAILED,
        response: data,
    };
};
const CustomerInvoiceAction = {
    customerInvoice,
    customerInvoiceSuccess,
    customerInvoiceFailed,
};
export default CustomerInvoiceAction;
