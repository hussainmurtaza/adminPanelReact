import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import InputUpdateField from "Components/Forms/Fields/InputUpdateField";
import InputSelectField from "Components/Forms/Fields/InputSelectField";
import PermissionAction from "Redux/V1/Permissions/Get/PermissionGetAction";
import PostRolesAction from "Redux/V1/Roles/Post/RolePostAction";
import RolesAction from "Redux/V1/Roles/Get/RoleGetAction";
import RoleFirstAction from "Redux/V1/Roles/First/RoleFirstAction";
import RolesPutAction from "Redux/V1/Roles/Put/RolePutAction";

class RoleFormComponent extends Component {
    state = {
        form: {
            name: null,
            permissions: [],
        },
        default_data: false,
    };
    componentDidMount() {
        this.props.dispatch(RolesAction.getRoles());
        this.props.dispatch(PermissionAction.getPermission());
        if (this.props.method === "PUT")
            this.props.dispatch(RoleFirstAction.roleFirst(this.props.params));
    }
    handleChange = (e) => {
        let { form } = this.state;
        form[e.target.name] = e.target.value;

        this.setState({
            form,
        });
    };

    handleMultiSelect = (e, options) => {
        let { form } = this.state;
        form[e.name] = options;
        this.setState({
            form,
        });
    };
    handleSubmit = (e) => {
        if (this.props.method === "PUT") {
            e.preventDefault();
            this.props.dispatch(
                RolesPutAction.rolePut({
                    form: this.state.form,
                    id: this.props.params,
                })
            );
            console.log(this.state.form);
        }
        if (this.props.method === "POST") {
            e.preventDefault();
            this.props.dispatch(PostRolesAction.postRoles(this.state.form));
        }
    };

    setDefaultData = () => {
        if (this.props.method === "PUT") {
            const { form, default_data } = this.state;
            if (default_data === false) {
                setTimeout(() => {
                    form.name = this.props.role.name;
                    form.permissions = this.props.role.permissions.map(
                        (permission) => {
                            return {
                                value: permission.id,
                                label: permission.name,
                            };
                        }
                    );

                    this.setState({
                        form,
                        default_data: this.props.role_fetched,
                    });
                }, 100);
            }
        }
    };

    render() {
        const options = this.props.permissions.map(function (permission) {
            return { value: permission.id, label: permission.name };
        });

        this.setDefaultData();
        return (
            <React.Fragment>
                <form method={this.props.method} onSubmit={this.handleSubmit}>
                    <Row>
                        <Col sm={12}>
                            <InputUpdateField
                                type="text"
                                name="name"
                                placeholder="Enter Role Name"
                                onChange={this.handleChange}
                                defaultValue={this.state.form.name}
                                required
                            />
                        </Col>
                        <Col sm={12} className="form-group">
                            <label>Assign Permission</label>
                            <InputSelectField
                                name="permissions"
                                placeholder="Assign Permission"
                                option={options}
                                onChange={(options, e) =>
                                    this.handleMultiSelect(e, options)
                                }
                                value={this.state.form.permissions}
                            />
                        </Col>
                        <Col sm={12}>
                            <Button type="submit" variant="primary">
                                {this.props.submitText}
                            </Button>
                        </Col>
                    </Row>
                </form>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        roles: state.roles.roles,
        role: state.role_first.role,
        role_fetched: state.role_first.fetched,
        permissions: state.permissions.permissions,
    };
};

export default connect(mapStateToProps)(RoleFormComponent);
