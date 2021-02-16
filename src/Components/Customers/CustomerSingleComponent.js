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
import UrlHelper from "Helpers/UrlHelper";

class CustomerSingleComponent extends Component {
    componentDidMount() {
        let query = UrlHelper.parseParams(window.location.search);
        if (query.type === "site") {
            this.props.dispatch(
                CustomerSiteAction.customerSite(this.props.match.params.id)
            );
        } else if (query.type === "invoice") {
            this.props.dispatch(
                CustomerInvoiceAction.customerInvoice(
                    this.props.match.params.id
                )
            );
        } else {
            this.props.dispatch(
                CustomerFirstActionV3.customerFirst(this.props.match.params.id)
            );
        }
    }
    handleSelect = (key) => {
        const url = new URL(window.location.href.split("?")[0]);
        if (key === "site-detail") {
            window.history.replaceState(null, null, url.href);
            this.props.dispatch(
                CustomerSiteAction.customerSite(this.props.match.params.id)
            );
            url.searchParams.set("type", "site");
            window.history.replaceState(null, null, url);
        } else if (key === "site-invoices") {
            window.history.replaceState(null, null, url.href);
            this.props.dispatch(
                CustomerInvoiceAction.customerInvoice(
                    this.props.match.params.id
                )
            );
            url.searchParams.set("type", "invoice");
            window.history.replaceState(null, null, url);
        } else {
            this.props.dispatch(
                CustomerFirstActionV3.customerFirst(this.props.match.params.id)
            );
            window.history.replaceState(null, null, url.href);
        }
    };
    render() {
        let defaultKey;
        const urlParams = new URLSearchParams(window.location.search);
        const defaultTab = urlParams.get("type");
        if (defaultTab === "site") {
            defaultKey = "site-detail";
        } else if (defaultTab === "invoice") {
            defaultKey = "site-invoices";
        } else {
            defaultKey = "customer-detail";
        }
        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="customers" />

                    <div className="content content-components customer-details">
                        <div className="container">
                            <Tabs
                                defaultActiveKey={defaultKey}
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
        customerSite: state.customerSite,
        customerInvoice: state.customerInvoice,
    };
};

export default connect(mapStateToProps)(CustomerSingleComponent);
