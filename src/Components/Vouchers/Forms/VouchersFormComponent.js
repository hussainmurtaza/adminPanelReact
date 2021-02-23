import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import InputUpdateField from "Components/Forms/Fields/InputUpdateField";
import { connect } from "react-redux";
import SingleSelectField from "Components/Forms/Fields/SingleSelectField";
import VoucherPostAction from "Redux/V1/Vouchers/Post/VoucherPostAction";
import VoucherPutAction from "Redux/V1/Vouchers/Put/VoucherPutAction";
import VoucherFirstAction from "Redux/V1/Vouchers/First/VoucherFirstAction";
import Capitilize from "Helpers/CapitilizeHelper";
import SingleDateField from "Components/Forms/Fields/SingleDateField";
import TimeStampHelper from "Helpers/TimeStampHelper";
import AsyncSelectField from "Components/Forms/Fields/AsyncSelectField";

class VoucherFormComponent extends Component {
    state = {
        form: {
            promo_code: null,
            amount: null,
            status: null,
            max_usage_limit: null,
            start_date: null,
            end_date: null,
        },
        default_data: false,
    };
    componentDidMount() {
        if (this.props.method === "PUT")
            this.props.dispatch(
                VoucherFirstAction.voucherFirst(this.props.params)
            );
    }
    handleChange = (e) => {
        let { form } = this.state;

        form[e.target.name] = e.target.value;

        this.setState({
            form,
        });
    };

    handleSelect = (e, options) => {
        let { form } = this.state;
        form[e.name] = options;
        this.setState({
            form,
        });
    };

    handleDate = (e, field) => {
        const { form } = this.state;
        this.setState({
            form: {
                ...form,
                [field]: TimeStampHelper.formatDate(e._d),
            },
        });
    };
    customerGetFunction = (data) => {
        let { form } = this.state;
        form["affiliate_id"] = data.value;
        this.setState({
            form,
        });
    };

    handleSubmit = (e) => {
        if (this.props.method === "PUT") {
            e.preventDefault();
            this.props.dispatch(
                VoucherPutAction.voucherPut({
                    form: this.state.form,
                    id: this.props.params,
                })
            );
        }

        if (this.props.method === "POST") {
            e.preventDefault();
            this.props.dispatch(VoucherPostAction.voucherPost(this.state.form));
        }
    };

    setDefaultData = () => {
        if (this.props.method === "PUT") {
            const { form, default_data } = this.state;
            if (default_data === false) {
                setTimeout(() => {
                    form.promo_code = this.props.voucher.promo_code;
                    form.amount = this.props.voucher.amount;
                    form.status = this.props.voucher.status;
                    form.start_date = this.props.voucher.start_date;
                    form.end_date = this.props.voucher.end_date;
                    form.max_usage_limit = this.props.voucher.max_usage_limit;
                    form.status = {
                        value: this.props.voucher.status,
                        label: Capitilize.capital(
                            `${this.props.voucher.status}`
                        ),
                    };

                    this.setState({
                        form,
                        default_data: this.props.voucher_fetched,
                    });
                }, 100);
            }
        } else {
            const { form, default_data } = this.state;
            if (default_data === false) {
                form.start_date = "";
                form.end_date = "";
                this.setState({
                    form,
                    default_data: true,
                });
            }
        }
    };

    render() {
        const voucher = this.props.voucher;
        const status_options = [
            { value: "active", label: "Active" },
            { value: "in-active", label: "In-Active" },
        ];
        this.setDefaultData();

        return (
            <React.Fragment>
                <form method={this.props.method} onSubmit={this.handleSubmit}>
                    <Row>
                        <Col sm={6}>
                            <InputUpdateField
                                type="text"
                                name="promo_code"
                                placeholder="Enter Promo Code"
                                onChange={this.handleChange}
                                defaultValue={voucher.promo_code}
                                required
                            />
                        </Col>
                        <Col sm={6}>
                            <InputUpdateField
                                type="text"
                                name="amount"
                                placeholder="Enter Amount"
                                onChange={this.handleChange}
                                defaultValue={voucher.amount}
                                required
                            />
                        </Col>

                        <Col sm={6}>
                            <SingleDateField
                                name="start_date"
                                label="Start Date"
                                placeholder="MM-DD-YYY"
                                onChange={(e) =>
                                    this.handleDate(e, "start_date")
                                }
                                defaultValue={this.state.form.start_date}
                            />
                        </Col>

                        <Col sm={6}>
                            <SingleDateField
                                name="end_date"
                                label="End Date"
                                placeholder="MM-DD-YYY"
                                onChange={(e) => this.handleDate(e, "end_date")}
                                defaultValue={this.state.form.end_date}
                            />
                        </Col>
                        <Col sm={6} className="mt-3">
                            <InputUpdateField
                                name="max_usage_limit"
                                placeholder="Max. Usage Limit"
                                onChange={this.handleChange}
                                defaultValue={voucher.max_usage_limit}
                            />
                        </Col>
                        <Col sm={6} className="mt-3">
                            <SingleSelectField
                                name="status"
                                options={status_options}
                                onChange={(options, e) =>
                                    this.handleSelect(e, options)
                                }
                                placeholder="Enter Status"
                                defaultValue={this.state.form.status}
                                required
                            />
                        </Col>
                        {this.props.method === "POST" ? (
                            <Col sm={6}>
                                <label>Enter Affiliates</label>
                                <AsyncSelectField
                                    className="mt-1"
                                    isMulti={false}
                                    name="customers"
                                    dispatch={this.props.dispatch}
                                    placeholder={"Search Affiliates"}
                                    customerGet={this.customerGetFunction}
                                    customerId={true}
                                />
                            </Col>
                        ) : null}
                    </Row>

                    <Button type="submit" variant="primary" className="mt-4">
                        {this.props.submitText}
                    </Button>
                </form>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        voucher: state.vouchers.detail.voucher,
        voucher_fetched: state.vouchers.detail.fetched,
    };
};

export default connect(mapStateToProps)(VoucherFormComponent);
