import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import { connect } from "react-redux";
import PremiumDetailAction from "Redux/V1/Premiums/First/PremiumFirstAction";
import TemplateMain from "Templates/TemplateMain";
import TimeStampHelper from "Helpers/TimeStampHelper";

class PluginSingleComponent extends Component {
    componentDidMount() {
        this.props.dispatch(
            PremiumDetailAction.premiumFirst(this.props.match.params.id)
        );
    }
    render() {
        const plugin = this.props.plugin;
        console.log(this.props.plugin, "asdsadsadasd");
        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="plugins" />
                    <div className="content content-components">
                        <div className="container">
                            <h4 className="tx-color-01 mg-b-15">
                                Premium Plugin/Theme Details
                            </h4>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Field</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>{plugin.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Slug</td>
                                        <td>{plugin.slug}</td>
                                    </tr>
                                    <tr>
                                        <td>Type</td>
                                        <td>{plugin.type}</td>
                                    </tr>
                                    <tr>
                                        <td>Author</td>
                                        <td>{plugin.author}</td>
                                    </tr>
                                    <tr>
                                        <td>Created At</td>
                                        <td>
                                            {TimeStampHelper.standardDateFormat(
                                                plugin.created_at
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Current Version</td>
                                        <td>{plugin.current_version}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div>
                                <a
                                    href={
                                        "/update-plugin/" + this.props.plugin.id
                                    }
                                    className="btn btn-primary"
                                >
                                    Edit Plugin
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
        plugin: state.premium.detail.premium_plugin,
    };
};

export default connect(mapStateToProps)(PluginSingleComponent);
