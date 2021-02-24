import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Row, Col, Badge } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPencilAlt,
    faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
// import MigrationsAction from "Redux/V1/Migration/Get/MigrationGetAction";
import TimeStampHelper from "Helpers/TimeStampHelper";
import PaginationDropDown from "Components/Includes/DropDownComponent";
import PaginationNumber from "Components/Includes/PaginationComponent";
import Confirm from "Helpers/ConfirmationHelper";
import SingleSelectField from "Components/Forms/Fields/SingleSelectField";
import MigrationStatusAction from "Redux/V1/Migration/ToggleStatus/MigrationStatusAction";
import MIGRATIONOPTIONS from "Constants/MigrationOptions";
import MigrationFilterForm from "Components/Forms/MigrationFilterForm";

class MigrationListComponent extends Component {
    // componentDidMount() {
    // 	this.props.dispatch(MigrationsAction.getMigrations());
    // }
    handleSelect = (id, e) => {
        const status = id + "?status=" + e.value;
        Confirm(
            this.props.dispatch,
            MigrationStatusAction.migrationStatus(status),
            "Migration status will be changed."
        );
    };
    render() {
        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="migrations" />

                    <div className="content content-components migration-page">
                        <div className="container">
                            <MigrationFilterForm
                                location={this.props.location.search}
                            />
                            <h4 className="tx-color-01 mg-b-15 mt-3">
                                Migration Data
                            </h4>
                            <div className="user-list-page">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Customer</th>
                                            <th>Agency Name</th>
                                            <th>Domain</th>
                                            {/* <th>Staging Domain</th> */}
                                            <th className="migration-status">
                                                Status
                                            </th>
                                            <th>Date</th>
                                            <th className="text-center">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.migration_filter.migrations.map(
                                            (migration) => (
                                                <tr>
                                                    <td>
                                                        <a
                                                            href={
                                                                "/customer/" +
                                                                migration
                                                                    .customer.id
                                                            }
                                                            target="
															_blank"
                                                        >
                                                            {
                                                                migration
                                                                    .customer
                                                                    .fullname
                                                            }
                                                        </a>
                                                    </td>
                                                    <td>
                                                        {migration.agency_name ===
                                                        null ? (
                                                            "-"
                                                        ) : (
                                                            <a
                                                                href={
                                                                    "/migration/" +
                                                                    migration.id
                                                                }
                                                                target="
															_blank"
                                                            >
                                                                {
                                                                    migration.agency_name
                                                                }
                                                            </a>
                                                        )}
                                                    </td>
                                                    <td>
                                                        {migration.custom_domain ===
                                                            null &&
                                                        migration.staging_domain ===
                                                            null
                                                            ? "-"
                                                            : null}
                                                        {migration.custom_domain ===
                                                        null ? null : (
                                                            <a
                                                                className="domain-list"
                                                                target="
															_blank"
                                                                href={
                                                                    "https://" +
                                                                    migration.custom_domain
                                                                }
                                                            >
                                                                <Badge
                                                                    variant="primary"
                                                                    className="mr-1"
                                                                    title="Custom Domain"
                                                                >
                                                                    C
                                                                </Badge>
                                                                {
                                                                    migration.custom_domain
                                                                }
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faExternalLinkAlt
                                                                    }
                                                                    className="ml-2"
                                                                />
                                                            </a>
                                                        )}
                                                        {migration.staging_domain ===
                                                        null ? null : (
                                                            <a
                                                                className="domain-list"
                                                                target="
															_blank"
                                                                href={
                                                                    "https://" +
                                                                    migration.staging_domain
                                                                }
                                                            >
                                                                <Badge
                                                                    variant="primary"
                                                                    className="mr-1"
                                                                    title="Staging Domain"
                                                                >
                                                                    S
                                                                </Badge>
                                                                {
                                                                    migration.staging_domain
                                                                }
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faExternalLinkAlt
                                                                    }
                                                                    className="ml-2"
                                                                />
                                                            </a>
                                                        )}
                                                    </td>

                                                    <td className="migration-status">
                                                        <SingleSelectField
                                                            name="status"
                                                            options={
                                                                MIGRATIONOPTIONS
                                                            }
                                                            onChange={(e) =>
                                                                this.handleSelect(
                                                                    migration.id,
                                                                    e
                                                                )
                                                            }
                                                            placeholder="Enter Status"
                                                            defaultValue={MIGRATIONOPTIONS.filter(
                                                                (option) =>
                                                                    option.value ===
                                                                    migration.status
                                                            )}
                                                        />
                                                    </td>

                                                    <td>
                                                        {TimeStampHelper.standardDateFormat(
                                                            `${migration.created_at}`
                                                        )}
                                                    </td>
                                                    <td className="text-center">
                                                        <a
                                                            href={
                                                                "/migration/" +
                                                                migration.id
                                                            }
                                                            className="btn btn-link"
                                                            title="Edit"
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    faPencilAlt
                                                                }
                                                            />
                                                        </a>
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </Table>
                                <Row>
                                    <Col md={4}>
                                        <PaginationDropDown
                                            title={"Migrations"}
                                            perPage={
                                                this.props.migration_filter
                                                    .pagination.per_page
                                            }
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <PaginationNumber
                                            perPage={
                                                this.props.migration_filter
                                                    .pagination.per_page
                                            }
                                            totalPages={
                                                this.props.migration_filter
                                                    .pagination.total_pages
                                            }
                                            currentPage={
                                                this.props.migration_filter
                                                    .pagination.current_page
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
        migration_filter: state.migration_filter,
    };
};

export default connect(mapStateToProps)(MigrationListComponent);
