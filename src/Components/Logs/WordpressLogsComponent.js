import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Row, Col } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import WorpdressLogsListAction from "Redux/V1/WordpressLogs/Logs/WordpressLogsAction";
import PaginationDropDown from "Components/Includes/DropDownComponent";
import PaginationNumber from "Components/Includes/PaginationComponent";
import WordpresslogsBusiness from "Businesses/WordpressLogsBusiness";
import WordpressLogsApproveAction from "Redux/V1/WordpressLogs/Approve/WordpressLogsApproveAction";
import Confirm from "Helpers/ConfirmationHelper";

class WordpressLogsComponent extends Component {
    componentDidMount() {
        this.props.dispatch(WorpdressLogsListAction.wordpressLogs());
    }
    logApproveFunction = (id) => {
        const data = {
            id: id,
            status: "approved",
        };
        Confirm(
            this.props.dispatch,
            WordpressLogsApproveAction.wordpressLogsApprove(data)
        );
    };

    render() {
        const { pagination } = this.props.wordpressLogs;
        const logs = this.props.wordpressLogs.wordpress_logs;
        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="logs" />

                    <div className="content content-components">
                        <div className="container">
                            <Table>
                                <tbody></tbody>
                            </Table>

                            <h4 className="tx-color-01 mg-b-15">
                                Wordpress Logs List
                            </h4>
                            <div className="user-list-page">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Customer's Name</th>
                                            <th>Site Domain</th>
                                            <th>Type</th>
                                            <th>Slug</th>
                                            <th>Version</th>
                                            <th>Requested By</th>
                                            <th className="text-center">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {WordpresslogsBusiness.generate(
                                            logs,
                                            this.logApproveFunction
                                        )}{" "}
                                    </tbody>
                                </Table>
                                <Row>
                                    <Col md={4}>
                                        <PaginationDropDown
                                            title={"WP Logs"}
                                            perPage={pagination.per_page}
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <PaginationNumber
                                            perPage={pagination.per_page}
                                            totalPages={pagination.total_pages}
                                            currentPage={
                                                pagination.current_page
                                            }
                                        />
                                    </Col>
                                    <Col md={4}></Col>
                                </Row>
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
        wordpressLogs: state.wordpressLogs.list,
        wpApprove: state.wordpressLogs.approve,
    };
};

export default connect(mapStateToProps)(WordpressLogsComponent);
