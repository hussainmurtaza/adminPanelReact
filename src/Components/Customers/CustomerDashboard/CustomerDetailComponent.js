import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Capitilize from "Helpers/CapitilizeHelper";
import TimeStampHelper from "Helpers/TimeStampHelper";

class CustomerDetailComponent extends Component {
    render() {
        let customerEmail, customerPhone;
        const customer = this.props.customer;
        const customerData = this.props.customer.contact;
        if (customerData) {
            customerEmail = customerData.map((contact) => {
                return <React.Fragment>{contact.email}</React.Fragment>;
            });
            customerPhone = customerData.map((contact) => {
                return <React.Fragment>{contact.phone}</React.Fragment>;
            });
        }
        return (
            <React.Fragment>
                <h4 className="page-header mg-b-15 mt-4">Customer Details</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Field</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>{customer.first_name}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{customer.last_name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{customerEmail}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>
                                {Capitilize.capital(
                                    `${this.props.customer.status}`
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>{customerPhone}</td>
                        </tr>
                        <tr>
                            <td>Created At</td>
                            <td>
                                {TimeStampHelper.standardDateFormat(
                                    customer.created_at
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Persona</td>
                            <td>{customer.persona}</td>
                        </tr>
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
}
export default CustomerDetailComponent;
