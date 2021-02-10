import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Row, Col } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import UsersAction from "Redux/V1/Users/Get/UserGetAction";
import UserDeleteAction from "Redux/V1/Users/Delete/UserDeleteAction";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import FilterForm from "Components/Forms/FilterForm";
import UserStatusAction from "Redux/V1/Users/ToggleStatus/UserStatusAction";
import PaginationDropDown from "Components/Includes/DropDownComponent";
import PaginationNumber from "Components/Includes/PaginationComponent";
import Confirm from "Helpers/ConfirmationHelper";
import Capitilize from "Helpers/CapitilizeHelper";

class UserListComponent extends Component {
    componentDidMount() {
        this.props.dispatch(UsersAction.getUsers());
    }
    userDelete = (id) => {
        Confirm(this.props.dispatch, UserDeleteAction.deleteUser(id));
    };
    onSwitch = (id) => {
        Confirm(this.props.dispatch, UserStatusAction.userStatus(id));
    };

    render() {
        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="users" />

                    <div className="content content-components">
                        <div className="container">
                            <FilterForm
                                fields={[
                                    "async",
                                    //'user_search',
                                    "user_status",
                                    "user_date",
                                ]}
                            />

                            <Table>
                                <tbody></tbody>
                            </Table>

                            <h4 className="tx-color-01 mg-b-15">User List</h4>
                            <div className="user-list-page">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th>Role</th>
                                            <th>Created At</th>
                                            <th className="text-center">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.users.map((user) => (
                                            <tr>
                                                <td>
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href={
                                                            "/user-update/" +
                                                            user.id
                                                        }
                                                    >
                                                        {user.first_name}
                                                    </a>
                                                </td>
                                                <td>
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href={
                                                            "/user-update/" +
                                                            user.id
                                                        }
                                                    >
                                                        {user.last_name}
                                                    </a>
                                                </td>
                                                <td>
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href={
                                                            "/user-update/" +
                                                            user.id
                                                        }
                                                    >
                                                        {user.email}
                                                    </a>
                                                </td>
                                                <td>
                                                    {Capitilize.capital(
                                                        user.status
                                                    )}
                                                </td>
                                                <td>
                                                    {user.roles.map((role) => (
                                                        <Badge
                                                            variant="primary"
                                                            className="mr-2"
                                                        >
                                                            {role.name}
                                                        </Badge>
                                                    ))}
                                                </td>
                                                <td>
                                                    {TimeStampHelper.standardDateFormat(
                                                        `${user.created_at}`
                                                    )}
                                                </td>

                                                <td className="text-center custom-control custom-switch">
                                                    <span className="m-3">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id={
                                                                "customSwitches" +
                                                                user.id
                                                            }
                                                            checked={
                                                                user.status ===
                                                                "blocked"
                                                                    ? true
                                                                    : false
                                                            }
                                                            onChange={() =>
                                                                this.onSwitch(
                                                                    user.id
                                                                )
                                                            }
                                                            readOnly
                                                        />

                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor={
                                                                "customSwitches" +
                                                                user.id
                                                            }
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            title="Block/Unblock User"
                                                        ></label>
                                                    </span>
                                                    <a
                                                        href={
                                                            "/user/" + user.id
                                                        }
                                                        className="btn btn-link"
                                                        title="View"
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faEye}
                                                        />
                                                    </a>{" "}
                                                    <a
                                                        className="btn btn-link"
                                                        title="Edit"
                                                        href={
                                                            "/user-update/" +
                                                            user.id
                                                        }
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faPencilAlt}
                                                        />
                                                    </a>{" "}
                                                    <button
                                                        className="btn btn-link text-danger"
                                                        title="Delete"
                                                        onClick={() =>
                                                            this.userDelete(
                                                                user.id
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
                                <Row className="d-none">
                                    <Col md={4}>
                                        <PaginationDropDown title={"Sites"} />
                                    </Col>
                                    <Col md={4}>
                                        <PaginationNumber />
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
        users: state.users.users,
        //user_filter: state.user_filter.users,
        user_search: state.user_search.users,
    };
};

export default connect(mapStateToProps)(UserListComponent);
