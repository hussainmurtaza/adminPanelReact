import React, { Component } from "react";
import { Table } from "react-bootstrap";
import CustomerSiteBusiness from "Businesses/Customers/CustomerSiteBusiness";

class CustomerSiteComponent extends Component {
    render() {
        const customerSite = this.props.customerSite;
        const customerSites = CustomerSiteBusiness.customerSite(customerSite);
        return (
            <React.Fragment>
                <h4 className="page-header mg-b-15 mt-4">Customer Sites</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Identity</th>
                            <th>Host</th>
                            <th>Type</th>
                            <th>Location</th>
                            <th>Updates</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>{customerSites}</tbody>
                </Table>
            </React.Fragment>
        );
    }
}
export default CustomerSiteComponent;
