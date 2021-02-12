import React, { Component } from "react";
import { Table, Row, Col, Button } from "react-bootstrap";
import InputUpdateField2 from "Components/Forms/Fields/InputUpdateField2";
import Confirm from "Helpers/ConfirmationHelper";
import WalletCreditAction from "Redux/V1/Customers/Wallet/Credit/WalletCreditAction";
import WalletDebitAction from "Redux/V1/Customers/Wallet/Debit/WalletDebitAction";
import { connect } from "react-redux";
import CustomerBillingBusiness from "Businesses/Customers/CustomerBillingBusiness";
import PermissionHelper from "Helpers/PermissionHelper";

class CustomerBillingComponent extends Component {
    state = {
        amount: null,
    };
    handleChange = (e) => {
        const amount = e.target.value;
        this.setState({
            amount,
        });
    };
    resetField = () => {
        this.setState({
            amount: "",
        });
    };
    walletCreditFunction = () => {
        const data = {
            customer_id: this.props.paramID,
            amount: this.state.amount,
        };
        Confirm(
            this.props.dispatch,
            WalletCreditAction.walletCredit(data),
            "You want to Credit this Amount?"
        );
        setTimeout(() => {
            this.resetField(false);
        }, 2000);
    };
    walletDebitFunction = () => {
        const data = {
            customer_id: this.props.paramID,
            amount: this.state.amount,
        };
        Confirm(
            this.props.dispatch,
            WalletDebitAction.walletDebit(data),
            "You want to Debit this Amount?"
        );
        setTimeout(() => {
            this.resetField(false);
        }, 2000);
    };
    render() {
        const customerWallet = this.props.customer.wallet;
        const billings = this.props.customer.billing_information;
        const customerBilling = CustomerBillingBusiness.customerBilling(
            billings
        );
        return (
            <React.Fragment>
                <h4 className="page-header mg-b-15 mt-4">
                    Billing Information
                </h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Billing Start Date</th>
                            <th>Billing Last Date</th>
                            <th>Billing Next Date</th>
                            <th>Payment Last Date</th>
                        </tr>
                    </thead>
                    {customerBilling}
                </Table>
                <h4 className="page-header mg-b-15 mt-4">Customer Wallet</h4>
                <Row>
                    <Col lg="5" xs={12}>
                        <div className="card-payment topup-card">
                            <div className="card-body">
                                <Row>
                                    <Col lg="8 col-8">
                                        <div className="card-title">Wallet</div>
                                    </Col>
                                    <Col lg="4" className="text-right col-4">
                                        <div className="card-title">
                                            $ {customerWallet.current_balance}
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="mt-2">
                                    <Col lg="12" xs={12}>
                                        <InputUpdateField2
                                            type="number"
                                            name="wallet"
                                            placeholder="Enter Amount"
                                            onChange={(e) =>
                                                this.handleChange(e)
                                            }
                                            value={this.state.amount}
                                            required
                                        />
                                    </Col>
                                    <Col lg={6} xs={12}>
                                        <div
                                            class="tooltip-wrapper"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title={
                                                PermissionHelper.validate([
                                                    "customers_wallet_credit",
                                                    "access_all",
                                                ]) === true
                                                    ? ""
                                                    : "Permission Denied!"
                                            }
                                        >
                                            <Button
                                                type="submit"
                                                variant="primary"
                                                className="btn-block wallet-input tooltip-wrapper"
                                                onClick={
                                                    this.walletCreditFunction
                                                }
                                                disabled={
                                                    PermissionHelper.validate([
                                                        "customers_wallet_credit",
                                                        "access_all",
                                                    ]) === true
                                                        ? false
                                                        : true
                                                }
                                            >
                                                Credit
                                            </Button>
                                        </div>{" "}
                                    </Col>
                                    <Col lg={6} xs={12}>
                                        <div
                                            class="tooltip-wrapper"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title={
                                                PermissionHelper.validate([
                                                    "customers_wallet_debit",
                                                    "access_all",
                                                ]) === true
                                                    ? ""
                                                    : "Permission Denied!"
                                            }
                                        >
                                            <Button
                                                type="submit"
                                                variant="primary"
                                                className="btn-block wallet-input"
                                                onClick={
                                                    this.walletDebitFunction
                                                }
                                                disabled={
                                                    PermissionHelper.validate([
                                                        "customers_wallet_debit",
                                                        "access_all",
                                                    ]) === true
                                                        ? false
                                                        : true
                                                }
                                            >
                                                Debit
                                            </Button>
                                        </div>{" "}
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        credit: state.credit,
        debit: state.debit,
    };
};

export default connect(mapStateToProps)(CustomerBillingComponent);
