import React, { Component } from "react";
import Sidebar from "Components/Sidebar";
import { Table } from "react-bootstrap";
import TemplateMain from "Templates/TemplateMain";
import { connect } from "react-redux";
import VoucherGetAction from "Redux/V1/Vouchers/Get/VoucherGetAction";
import VoucherDeleteAction from "Redux/V1/Vouchers/Delete/VoucherDeleteAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import TimeStampHelper from "Helpers/TimeStampHelper";
// import PaginationDropDown from "Components/Includes/DropDownComponent";
// import PaginationNumber from "Components/Includes/PaginationComponent";
import Confirm from "Helpers/ConfirmationHelper";
import Capitilize from "Helpers/CapitilizeHelper";
import RoundUpHelper from "Helpers/RoundUpHelper";
//
class VoucherListComponent extends Component {
    componentDidMount() {
        this.props.dispatch(VoucherGetAction.voucherGet());
    }
    voucherDelete = (id) => {
        Confirm(this.props.dispatch, VoucherDeleteAction.voucherDelete(id));
    };
    render() {
        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="vouchers" />
                    <div className="content content-components datacenter-page">
                        <div className="container">
                            <h4 className="tx-color-01 mg-b-15">
                                All Vouchers
                            </h4>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Promo Code</th>
                                        <th>Amount</th>
                                        <th>Max Limit Usage </th>
                                        <th>Start Date</th>
                                        <th>End Date </th>
                                        <th>Create At </th>
                                        <th>Status</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.vouchers.map((voucher) => (
                                        <tr>
                                            <td>{voucher.promo_code}</td>
                                            <td>
                                                ${" "}
                                                {RoundUpHelper.twodecimalplace(
                                                    voucher.amount
                                                )}
                                            </td>
                                            <td className="text-center">
                                                {voucher.max_usage_limit}
                                            </td>

                                            <td>
                                                {TimeStampHelper.standardDateFormat(
                                                    `${voucher.start_date}`
                                                )}
                                            </td>

                                            <td>
                                                {TimeStampHelper.standardDateFormat(
                                                    `${voucher.end_date}`
                                                )}
                                            </td>
                                            <td>
                                                {" "}
                                                {TimeStampHelper.standardDateFormat(
                                                    `${voucher.created_at}`
                                                )}
                                            </td>
                                            <td>
                                                {Capitilize.capital(
                                                    voucher.status
                                                )}
                                            </td>

                                            <td className="text-center">
                                                <a
                                                    href={
                                                        "/voucher/" + voucher.id
                                                    }
                                                    className="btn btn-link"
                                                    title="View"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faEye}
                                                    />
                                                </a>
                                                <a
                                                    href={
                                                        "/update-voucher/" +
                                                        voucher.id
                                                    }
                                                    className="btn btn-link"
                                                    title="Edit"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faPencilAlt}
                                                    />
                                                </a>
                                                <button
                                                    className="btn btn-link text-danger"
                                                    title="Delete"
                                                    onClick={() =>
                                                        this.voucherDelete(
                                                            voucher.id
                                                        )
                                                    }
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faTrash}
                                                    />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            {/* <Row className="d-none">
                                <Col md={4}>
                                    <PaginationDropDown title={"Sites"} />
                                </Col>
                                <Col md={4}>
                                    <PaginationNumber />
                                </Col>
                                <Col md={4}></Col>
                            </Row> */}
                        </div>
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        vouchers: state.vouchers.list.vouchers,
    };
};

export default connect(mapStateToProps)(VoucherListComponent);
