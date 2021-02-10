import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Row, Col } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import CustomerPutAction from "Redux/V1/Customers/Put/CustomerPutAction";
import PaginationDropDown from "Components/Includes/DropDownComponent";
import PaginationNumber from "Components/Includes/PaginationComponent";
import CustomerFilterForm from "Components/Forms/CustomerFilterForm";
import SortingComponent from "Components/Includes/SortingComponent";
import Capitilize from "Helpers/CapitilizeHelper";

class CustomerListComponent extends Component {
    onSwitch = (customer) => {
        this.props.dispatch(CustomerPutAction.PutCustomers(customer.id));
    };

    render() {
        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="customers" />

                    <div className="content content-components">
                        <div className="container">
                            <CustomerFilterForm
                                location={this.props.location.search}
                            />

                            <h4 className="page-header mg-b-15 mt-3">
                                Customer List
                            </h4>
                            <div className="customer-list-page">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <SortingComponent
                                                title="Customer Name"
                                                name="first_name"
                                            />
                                            <SortingComponent
                                                title="Total Sites"
                                                name="total_sites"
                                            />
                                            <SortingComponent
                                                title="Total Revenue"
                                                name="revenue"
                                            />
                                            <SortingComponent
                                                title="Email"
                                                name="email"
                                            />
                                            <SortingComponent
                                                title="Status"
                                                name="status"
                                            />
                                            <SortingComponent
                                                title="Registered At"
                                                name="register_date"
                                            />

                                            <th className="customer-action">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.customer_filter.customers.map(
                                            (customer) => (
                                                <tr>
                                                    <td>
                                                        <a
                                                            href={
                                                                "/customer/" +
                                                                customer.id
                                                            }
                                                        >
                                                            {customer.fullname}
                                                        </a>
                                                    </td>

                                                    <td>
                                                        {customer.total_sites}
                                                    </td>
                                                    <td>
                                                        ${" "}
                                                        {customer.paid_revenue}
                                                    </td>
                                                    <td>{customer.email}</td>

                                                    <td>
                                                        {Capitilize.capital(
                                                            customer.status
                                                        )}
                                                    </td>

                                                    <td>
                                                        {TimeStampHelper.standardDateFormat(
                                                            `${customer.created_at}`
                                                        )}
                                                    </td>

                                                    <td className="customer-action custom-control custom-switch">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id={
                                                                "customSwitches-" +
                                                                customer.id
                                                            }
                                                            checked={
                                                                customer.status ===
                                                                "blocked"
                                                                    ? true
                                                                    : false
                                                            }
                                                            onChange={() =>
                                                                this.onSwitch(
                                                                    customer
                                                                )
                                                            }
                                                            readOnly
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor={
                                                                "customSwitches-" +
                                                                customer.id
                                                            }
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            title="Block/Unblock User"
                                                        ></label>
                                                        <a
                                                            href={
                                                                "/customer/" +
                                                                customer.id
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
                                            title={"Customers"}
                                            perPage={
                                                this.props.customer_filter
                                                    .pagination.per_page
                                            }
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <PaginationNumber
                                            perPage={
                                                this.props.customer_filter
                                                    .pagination.per_page
                                            }
                                            totalPages={
                                                this.props.customer_filter
                                                    .pagination.total_pages
                                            }
                                            currentPage={
                                                this.props.customer_filter
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
        customer_filter: state.customer_filter,
        customer_put: state.customer_put.customers,
    };
};

export default connect(mapStateToProps)(CustomerListComponent);
