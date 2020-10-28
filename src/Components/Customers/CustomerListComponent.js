import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Badge } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import CustomersAction from "Redux/V1/Customers/Get/CustomerGetAction";
import CustomersFilterAction from "Redux/V1/Customers/Filter/CustomerFilterAction";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import queryString from 'query-string'
import FilterForm from "Components/Forms/FilterForm";
import BootstrapTable from 'react-bootstrap-table-next';
import '../../../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

class CustomerListComponent extends Component {
    componentDidMount() {
        const value = queryString.parse(this.props.location.search);
        this.props.dispatch(CustomersAction.getCustomers());
        this.props.dispatch(CustomersFilterAction.filterCustomers(value));
    }

    render() {
        const sites1 = this.props.customers;
        //const sites1 = this.props.customers;
        const products = sites1;
        // const products = [
        // 	{ id: 1, name: "fahim", price: "13" },
        // 	{ id: 2, name: "owais", price: "14" },
        // 	{ id: 3, name: "khizar", price: "15" },
        // ];
        const columns = [
            {
                dataField: 'fullname',
                text: 'Name'
            },
            {
                dataField: 'total_sites',
                text: 'Total Sites',
                sort: true
            },
            {
                dataField: 'email',
                text: 'Email'
            },
            {
                dataField: 'status',
                text: 'Status'
            },
            {
                dataField: 'created_at',
                text: 'Created At'
            },
            {
                dataField: '',
                text: 'Action'
            }];
        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="customers" />

                    <div className="content content-components">
                        <div className="container">

                            <FilterForm
                                fields={
                                    [
                                        'customer_name',
                                        'customer_email',
                                        'customer_status',
                                        'customer_date',
                                    ]
                                }
                            />

                            <h4 className="tx-color-01 mg-b-15">Customer Sort</h4>
                            <BootstrapTable keyField='id' data={products} columns={columns} />

                            <h4 className="tx-color-01 mg-b-15">
                                Customer List
                            </h4>
                            <div className="customer-list-page">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th>Created At</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.customer_filter.map(
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
                                                            <Badge variant="primary">{customer.total_sites}</Badge>
                                                        </a>
                                                    </td>

                                                    <td>{customer.email}</td>
                                                    <td>{customer.status}</td>

                                                    <td>
                                                        {TimeStampHelper.standardDateFormat(
                                                            `${customer.created_at}`
                                                        )}
                                                    </td>

                                                    <td className="text-center">
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
                            </div>
                        </div>
                    </div>
                </TemplateMain>
            </React.Fragment >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        customers: state.customers.customers,
        customer_filter: state.customer_filter.customers,
    };
};

export default connect(mapStateToProps)(CustomerListComponent);
