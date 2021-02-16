import React, { Component } from "react";
import { Table, Col, Row } from "react-bootstrap";
import CustomerSiteBusiness from "Businesses/Customers/CustomerSiteBusiness";
import PaginationDropDown from "Components/Includes/DropDownComponent";
import PaginationNumber from "Components/Includes/PaginationComponent";

class CustomerSiteComponent extends Component {
    render() {
        const customerSite = this.props.customerSite.sites;
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
                <Row>
                    <Col md={4}>
                        <PaginationDropDown
                            title={"Customer Sites"}
                            perPage={
                                this.props.customerSite.pagination.per_page
                            }
                        />
                    </Col>
                    <Col md={4}>
                        <PaginationNumber
                            perPage={
                                this.props.customerSite.pagination.per_page
                            }
                            totalPages={
                                this.props.customerSite.pagination.total_pages
                            }
                            currentPage={
                                this.props.customerSite.pagination.current_page
                            }
                        />
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </React.Fragment>
        );
    }
}
export default CustomerSiteComponent;
