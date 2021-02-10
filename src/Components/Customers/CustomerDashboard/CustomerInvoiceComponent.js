import React, { Component } from "react";
import { Table } from "react-bootstrap";
import CustomerInvoiceBusiness from "Businesses/Customers/CustomerInvoiceBusiness";

class CustomerInvoiceComponent extends Component {
    render() {
        const customerInvoice = this.props.customerInvoice;
        const customerInvoices = CustomerInvoiceBusiness.customerInvoice(
            customerInvoice
        );
        return (
            <React.Fragment>
                <h4 className="page-header mg-b-15 mt-4">Customer Invoices</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Reference</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>{customerInvoices}</tbody>
                </Table>
            </React.Fragment>
        );
    }
}
export default CustomerInvoiceComponent;
