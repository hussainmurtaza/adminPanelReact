import React, { Component } from "react";
import { Table, Col, Row } from "react-bootstrap";
import CustomerInvoiceBusiness from "Businesses/Customers/CustomerInvoiceBusiness";
import PaginationDropDown from "Components/Includes/DropDownComponent";
import PaginationNumber from "Components/Includes/PaginationComponent";

class CustomerInvoiceComponent extends Component {
    render() {
        const customerInvoice = this.props.customerInvoice.invoices;
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
                <Row>
                    <Col md={4}>
                        <PaginationDropDown
                            title={"Customer Invoices"}
                            perPage={
                                this.props.customerInvoice.pagination.per_page
                            }
                        />
                    </Col>
                    <Col md={4}>
                        <PaginationNumber
                            perPage={
                                this.props.customerInvoice.pagination.per_page
                            }
                            totalPages={
                                this.props.customerInvoice.pagination
                                    .total_pages
                            }
                            currentPage={
                                this.props.customerInvoice.pagination
                                    .current_page
                            }
                        />
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </React.Fragment>
        );
    }
}
export default CustomerInvoiceComponent;
