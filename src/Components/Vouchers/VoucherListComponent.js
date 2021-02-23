import React, { Component } from "react";
import Sidebar from "Components/Sidebar";
import { Table, Row, Col } from "react-bootstrap";
import TemplateMain from "Templates/TemplateMain";
import { connect } from "react-redux";
import VoucherGetAction from "Redux/V1/Vouchers/Get/VoucherGetAction";
import VoucherDeleteAction from "Redux/V1/Vouchers/Delete/VoucherDeleteAction";
import PaginationDropDown from "Components/Includes/DropDownComponent";
import PaginationNumber from "Components/Includes/PaginationComponent";
import Confirm from "Helpers/ConfirmationHelper";
import VoucherBusiness from "Businesses/Vouchers/VoucherBusiness";

class VoucherListComponent extends Component {
    componentDidMount() {
        this.props.dispatch(VoucherGetAction.voucherGet());
    }
    voucherDelete = (id) => {
        Confirm(this.props.dispatch, VoucherDeleteAction.voucherDelete(id));
    };
    render() {
        const vouchersData = this.props.vouchers.vouchers;
        const pagination = this.props.vouchers.pagination;
        const vouchers = VoucherBusiness.generate(vouchersData);
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
                                <tbody>{vouchers}</tbody>
                            </Table>
                            <Row>
                                <Col md={4}>
                                    <PaginationDropDown
                                        title={"Vouchers"}
                                        perPage={pagination.per_page}
                                    />
                                </Col>
                                <Col md={4}>
                                    <PaginationNumber
                                        perPage={pagination.per_page}
                                        totalPages={pagination.total_pages}
                                        currentPage={pagination.current_page}
                                    />
                                </Col>
                                <Col md={4}></Col>
                            </Row>
                        </div>
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        vouchers: state.vouchers.list,
    };
};

export default connect(mapStateToProps)(VoucherListComponent);
