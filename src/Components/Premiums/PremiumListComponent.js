import React, { Component } from "react";
import Sidebar from "Components/Sidebar";
import { Table, Row, Col } from "react-bootstrap";
import TemplateMain from "Templates/TemplateMain";
import { connect } from "react-redux";
import PremiumListAction from "Redux/V1/Premiums/Get/PremiumGetAction";
import PremiumDeleteAction from "Redux/V1/Premiums/Delete/PremiumDeleteAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import TimeStampHelper from "Helpers/TimeStampHelper";
import PaginationDropDown from "Components/Includes/DropDownComponent";
import PaginationNumber from "Components/Includes/PaginationComponent";
import Confirm from "Helpers/ConfirmationHelper";

class PluginListComponent extends Component {
    componentDidMount() {
        this.props.dispatch(PremiumListAction.premiumGet());
    }
    premiumPluginDelete = (id) => {
        Confirm(this.props.dispatch, PremiumDeleteAction.premiumDelete(id));
    };
    render() {
        const premium = this.props.premium.premium_plugins;
        const pagination = this.props.premium.pagination;
        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="plugins" />
                    <div className="content content-components datacenter-page">
                        <div className="container">
                            <h4 className="tx-color-01 mg-b-15">
                                All Plugins/Themes
                            </h4>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Slug</th>
                                        <th>Type</th>
                                        <th>Author</th>
                                        <th>Current Version</th>
                                        <th>Created At</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {premium.map((plugin) => (
                                        <tr>
                                            <td>{plugin.name}</td>

                                            <td>{plugin.slug}</td>
                                            <td>{plugin.type}</td>

                                            <td>{plugin.author}</td>
                                            <td>{plugin.current_version}</td>
                                            <td>
                                                {TimeStampHelper.standardDateFormat(
                                                    `${plugin.created_at}`
                                                )}
                                            </td>
                                            <td className="text-center">
                                                <a
                                                    href={
                                                        "/plugin/" + plugin.id
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
                                                        "/update-plugin/" +
                                                        plugin.id
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
                                                        this.premiumPluginDelete(
                                                            plugin.id
                                                        )
                                                    }
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faTrash}
                                                    />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}{" "}
                                </tbody>
                            </Table>
                            <Row>
                                <Col md={4}>
                                    <PaginationDropDown
                                        title={"Plugins"}
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
        premium: state.premium.list,
    };
};

export default connect(mapStateToProps)(PluginListComponent);
