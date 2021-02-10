import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import AsyncSelectField from "Components/Forms/Fields/AsyncSelectField";
import ChangeAffiliateAction from "Redux/V1/Customers/AffiliateAssign/AffiliatePutAction";
import Confirm from "Helpers/ConfirmationHelper";

class CustomerAffiliateComponent extends Component {
    state = {
        id: "",
        default_affiliate: {
            value: null,
            label: null,
            fetched: false,
        },
    };
    customerGetFunction = (data) => {
        this.setState({
            id: data.value,
        });
    };
    setDefaultData = () => {
        let { default_affiliate } = this.state;
        if (default_affiliate.fetched === false) {
            setTimeout(() => {
                default_affiliate.value = this.props.affiliate.id
                    ? this.props.affiliate.id
                    : null;
                default_affiliate.label = this.props.affiliate.first_name
                    ? `${this.props.affiliate.id} - ${this.props.affiliate.first_name}
                      ${this.props.affiliate.last_name}(${this.props.affiliate.email})`
                    : "Search Affiliate";
                if (default_affiliate.value !== null) {
                    default_affiliate.fetched = true;
                    this.setState({
                        default_affiliate,
                    });
                }
            }, 200);
        }
    };
    affiliateChangeFunction = () => {
        const data = {
            customer_id: this.props.paramID,
            affiliate_id: this.state.id,
        };
        Confirm(
            this.props.dispatch,
            ChangeAffiliateAction.affiliatePut(data),
            "You want to change customer's affiliate?"
        );
    };
    render() {
        this.setDefaultData();
        return (
            <React.Fragment>
                <h4 className="page-header mg-b-15 mt-4">Customer Affiliate</h4>
                <Row className="affiliate-label-hide w-100 m-0 no-gutters">
                    <Col lg={10} xs={12}>
                        <AsyncSelectField
                            className="mt-1"
                            isMulti={false}
                            name="customers"
                            dispatch={this.props.dispatch}
                            placeholder={"Search Affiliates"}
                            customerGet={this.customerGetFunction}
                            defaultValue={this.state.default_affiliate}
                            customerId={this.props.paramID}
                        />
                    </Col>
                    <Col lg={2} xs={12} className="text-right pl-2">
                        <Button
                            type="submit"
                            variant="primary"
                            className="btn-block mt-1"
                            onClick={this.affiliateChangeFunction}
                        >
                            Change Affiliate
                        </Button>{" "}
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
export default CustomerAffiliateComponent;
