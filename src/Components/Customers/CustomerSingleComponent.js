import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "Components/Sidebar";
import CustomerFirstActionV3 from "Redux/V3/Customers/First/CustomerFirstActionV3";
import TemplateMain from "Templates/TemplateMain";
import { Tabs, Tab } from "react-bootstrap";
import CustomerDetailComponent from "Components/Customers/CustomerDashboard/CustomerDetailComponent";
import CustomerAffiliateComponent from "Components/Customers/CustomerDashboard/CustomerAffiliateComponent";
import CustomerBillingComponent from "Components/Customers/CustomerDashboard/CustomerBillingComponent";
import CustomerSiteComponent from "Components/Customers/CustomerDashboard/CustomerSiteComponent";
import CustomerInvoiceComponent from "Components/Customers/CustomerDashboard/CustomerInvoiceComponent";
import "Assets/css/customer.css";
import CustomerSiteAction from "Redux/V1/Customers/CustomerSite/CustomerSiteAction";
import CustomerInvoiceAction from "Redux/V1/Customers/CustomerInvoice/CustomerInvoiceAction";

class CustomerSingleComponent extends Component {
    componentDidMount() {
        this.props.dispatch(
            CustomerFirstActionV3.customerFirst(this.props.match.params.id)
        );
    }
    handleSelect = (key) => {
        if (key === "site-detail") {
            this.props.dispatch(
                CustomerSiteAction.customerSite(this.props.match.params.id)
            );
        }
        if (key === "site-invoices") {
            this.props.dispatch(
                CustomerInvoiceAction.customerInvoice(
                    this.props.match.params.id
                )
            );
        }
    };
    render() {
        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="customers" />

                    <div className="content content-components">
                        <div className="container">
                            <Tabs
                                defaultActiveKey="customer-detail"
                                id="uncontrolled-tab-example"
                                className="nav-fill"
                                onSelect={this.handleSelect}
                            >
                                <Tab
                                    eventKey="customer-detail"
                                    title="Customer Details"
                                >
                                    <CustomerDetailComponent
                                        customer={this.props.customer}
                                    />
                                </Tab>
                                <Tab
                                    eventKey="affiliates-details"
                                    title="Affiliate Details"
                                >
                                    <CustomerAffiliateComponent
                                        paramID={this.props.match.params.id}
                                        dispatch={this.props.dispatch}
                                        affiliate={this.props.affiliate}
                                    />
                                </Tab>
                                <Tab
                                    eventKey="billing-information"
                                    title="Billing Information"
                                >
                                    <CustomerBillingComponent
                                        customer={this.props.customer}
                                        paramID={this.props.match.params.id}
                                        dispatch={this.props.dispatch}
                                    />
                                </Tab>
                                <Tab
                                    eventKey="site-detail"
                                    title="Sites Details"
                                >
                                    <CustomerSiteComponent
                                        customerSite={this.props.customerSite}
                                    />
                                </Tab>
                                <Tab eventKey="site-invoices" title="Invoices">
                                    <CustomerInvoiceComponent
                                        customerInvoice={
                                            this.props.customerInvoice
                                        }
                                    />
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        customer: state.customerV3.first.customer,
        affiliate: state.customerV3.first.affiliate,
        customerSite: state.customerSite.sites,
        customerInvoice: state.customerInvoice.invoices,
    };
};

export default connect(mapStateToProps)(CustomerSingleComponent);
