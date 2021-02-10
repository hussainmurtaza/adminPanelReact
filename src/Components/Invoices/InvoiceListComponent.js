import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Col, Row } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import PaginationDropDown from "Components/Includes/DropDownComponent";
import PaginationNumber from "Components/Includes/PaginationComponent";
import InvoiceFilterForm from "Components/Forms/InvoiceFilterForm";
import RoundUpHelper from "Helpers/RoundUpHelper";
import SortingComponent from "Components/Includes/SortingComponent";
import Capitilize from "Helpers/CapitilizeHelper";

class InvoiceListComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="invoices" />

                    <div className="content content-components">
                        <div className="container">
                            <InvoiceFilterForm
                                location={this.props.location.search}
                                dispatch={this.props.dispatch}
                            />

                            <h4 className="page-header mg-b-15 mt-3">
                                Invoice List
                            </h4>
                            <div className="user-list-page">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <SortingComponent
                                                title="Customer Name"
                                                name="customers"
                                            />
                                            <SortingComponent
                                                title="Invoice Number"
                                                name="reference"
                                            />
                                            <SortingComponent
                                                title="Gross Amount"
                                                name="amount_gross"
                                            />
                                            <SortingComponent
                                                title="Net Amount"
                                                name="amount_net"
                                            />
                                            <SortingComponent
                                                title="Issue Date"
                                                name="created_at"
                                            />
                                            <SortingComponent
                                                title="Status"
                                                name="status"
                                            />
                                            <th className="text-center">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.invoice_filter.invoices.map(
                                            (invoice) => (
                                                <tr>
                                                    <td>
                                                        <a
                                                            href={
                                                                "/customer/" +
                                                                invoice.customer_id
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {invoice.full_name}
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a
                                                            href={
                                                                "/invoice/" +
                                                                invoice.id
                                                            }
                                                        >
                                                            {invoice.reference}
                                                        </a>
                                                    </td>
                                                    <td>
                                                        ${" "}
                                                        {RoundUpHelper.twodecimalplace(
                                                            `${invoice.amount_gross}`
                                                        )}
                                                    </td>
                                                    <td>
                                                        ${" "}
                                                        {RoundUpHelper.twodecimalplace(
                                                            `${invoice.amount_net}`
                                                        )}
                                                    </td>

                                                    <td>
                                                        {TimeStampHelper.standardDateFormat(
                                                            `${invoice.created_at}`
                                                        )}
                                                    </td>
                                                    <td>
                                                        {Capitilize.capital(
                                                            invoice.status
                                                        )}
                                                    </td>
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
                                            )
                                        )}
                                    </tbody>
                                </Table>
                                <Row>
                                    <Col md={4}>
                                        <PaginationDropDown
                                            title={"Invoices"}
                                            perPage={
                                                this.props.invoice_filter
                                                    .pagination.per_page
                                            }
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <PaginationNumber
                                            perPage={
                                                this.props.invoice_filter
                                                    .pagination.per_page
                                            }
                                            totalPages={
                                                this.props.invoice_filter
                                                    .pagination.total_pages
                                            }
                                            currentPage={
                                                this.props.invoice_filter
                                                    .pagination.current_page
                                            }
                                        />
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
        invoice_filter: state.invoice_filter,
    };
};

export default connect(mapStateToProps)(InvoiceListComponent);
