import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Row, Col } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import MigrationTrashAction from "Redux/V1/Migration/Trash/MigrationTrashAction";
import PaginationDropDown from "Components/Includes/DropDownComponent";
import PaginationNumber from "Components/Includes/PaginationComponent";
import MigrationTrashBusiness from "Businesses/Migrations/MigrationTrashBusiness";

class MigrationTrashComponent extends Component {
    componentDidMount() {
        this.props.dispatch(MigrationTrashAction.migrationTrash());
    }
    render() {
        const migrations = this.props.migration_filter.migrations;
        const pagination = this.props.migration_filter.pagination;
        const migrationTrash = MigrationTrashBusiness.migrationTrash(
            migrations
        );

        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="migration-trash" />

                    <div className="content content-components migration-page">
                        <div className="container">
                            <h4 className="tx-color-01 mg-b-15 mt-3">
                                Trash Migrations
                            </h4>
                            <div className="user-list-page">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Customer</th>
                                            <th>Agency Name</th>
                                            <th>Domain</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    {migrationTrash}
                                </Table>
                                <Row>
                                    <Col md={4}>
                                        <PaginationDropDown
                                            title={"Migrations"}
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
        migration_filter: state.migrationTrash,
    };
};

export default connect(mapStateToProps)(MigrationTrashComponent);
