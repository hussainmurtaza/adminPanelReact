import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Col, Row } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import InvoicesAction from "Redux/V1/Invoices/Get/InvoiceGetAction";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import FilterForm from "Components/Forms/FilterForm";
import queryString from "query-string";
import InvoiceFilterAction from "Redux/V1/Invoices/Filter/InvoiceFilterAction";
import PaginationDropDown from "Components/Includes/DropDownComponent";
import PaginationNumber from "Components/Includes/PaginationComponent";
class InvoiceListComponent extends Component {
    componentDidMount() {
        const value = queryString.parse(this.props.location.search);
        this.props.dispatch(InvoicesAction.getInvoices());
        this.props.dispatch(InvoiceFilterAction.filterInvoices(value));
    }

    render() {
        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="invoices" />

                    <div className="content content-components">
                        <div className="container">
                            <FilterForm
                                fields={[
                                    "invoice_customer_name",
                                    "invoice_number",
                                    "invoice_status",
                                    "invoice_date",
                                ]}
                            />

                            <h4 className="tx-color-01 mg-b-15">
                                Invoice List
                            </h4>
                            <div className="user-list-page">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Customer</th>
                                            <th>Invoice Number</th>
                                            <th>Amount</th>
                                            <th>Issue Date</th>
                                            <th>Status</th>
                                            <th className="text-center">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.invoices.map((invoice) => (
                                            <tr>
                                                <td>
                                                    <a
                                                        href={
                                                            "/customer/" +
                                                            invoice.customer.id
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {
                                                            invoice.customer
                                                                .fullname
                                                        }
                                                    </a>
                                                </td>
                                                <td>
                                                    <a
                                                        href={
                                                            "/invoice/" +
                                                            invoice.id
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {invoice.reference}
                                                    </a>
                                                </td>
                                                <td>$ {invoice.amount_net}</td>
                                                <td>
                                                    {TimeStampHelper.standardDateFormat(
                                                        `${invoice.created_at}`
                                                    )}
                                                </td>
                                                <td>{invoice.status}</td>
                                                <td className="text-center">
                                                    <a
                                                        href={
                                                            "/invoice/" +
                                                            invoice.id
                                                        }
                                                        className="btn btn-link"
                                                        title="View"
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faEye}
                                                        />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <Row className="d-none">
                                    <Col md={4}>
                                        <PaginationDropDown title={"Sites"} />
                                    </Col>
                                    <Col md={4}>
                                        <PaginationNumber />
                                    </Col>
                                    <Col md={4}></Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        invoices: state.invoices.invoices,
        // invoice_filter: state.invoice_filter.invoices,
    };
};

export default connect(mapStateToProps)(InvoiceListComponent);
