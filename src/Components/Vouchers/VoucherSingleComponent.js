import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import { connect } from "react-redux";
import VoucherFirstAction from "Redux/V1/Vouchers/First/VoucherFirstAction";
import TemplateMain from "Templates/TemplateMain";
import TimeStampHelper from "Helpers/TimeStampHelper";
import RoundUpHelper from "Helpers/RoundUpHelper";

class VoucherSingleComponent extends Component {
    componentDidMount() {
        this.props.dispatch(
            VoucherFirstAction.voucherFirst(this.props.match.params.id)
        );
    }

    render() {
        const voucher = this.props.voucher;

        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="vouchers" />
                    <div className="content content-components">
                        <div className="container">
                            <h4 className="tx-color-01 mg-b-15">
                                Voucher Details
                            </h4>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Promo Code</th>
                                        <td> {voucher.promo_code}</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Amount</td>
                                        <td>
                                            ${" "}
                                            {RoundUpHelper.twodecimalplace(
                                                voucher.amount
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Max. Limit Usage</td>
                                        <td>{voucher.max_usage_limit}</td>
                                    </tr>
                                    <tr>
                                        <td>Start Date</td>
                                        <td>
                                            {/* {voucher.start_date} */}{" "}
                                            {TimeStampHelper.standardDateFormat(
                                                voucher.start_date
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>End Date</td>
                                        <td>
                                            {" "}
                                            {TimeStampHelper.standardDateFormat(
                                                voucher.end_date
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Created At</td>{" "}
                                        <td>
                                            {" "}
                                            {TimeStampHelper.standardDateFormat(
                                                voucher.created_at
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        <td>{voucher.status}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div>
                                <a
                                    href={
                                        "/update-voucher/" +
                                        this.props.voucher.id
                                    }
                                    className="btn btn-primary"
                                >
                                    Edit Voucher
                                </a>
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
        voucher: state.vouchers.detail.voucher,
    };
};

export default connect(mapStateToProps)(VoucherSingleComponent);
