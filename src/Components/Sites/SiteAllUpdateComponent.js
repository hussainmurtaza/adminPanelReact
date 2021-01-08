import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import { Tabs, Tab, Row, Col } from "react-bootstrap";
import "Assets/css/siteupdate.css";
import SiteCoreUpdateComponent from "Components/Sites/SiteAllUpdate/SiteCoreUpdateComponent";
import SiteThemeUpdateComponent from "Components/Sites/SiteAllUpdate/SiteThemeUpdateComponent";
import SitePluginUpdateComponent from "Components/Sites/SiteAllUpdate/SitePluginUpdateComponent";
import UpdateAllGetAction from "Redux/V1/WordpressUpdateAll/Get/UpdateAllGetAction";
// import UrlHelper from "Helpers/UrlHelper";
import PaginationDropDown from "Components/Includes/DropDownComponent";
import PaginationNumber from "Components/Includes/PaginationComponent";
import UrlHelper from "Helpers/UrlHelper";

class SiteAllUpdateComponent extends Component {
    handleSelect = (key) => {
        const url = new URL(window.location.href.split("?")[0]);
        if (key === "2") {
            this.props.dispatch(UpdateAllGetAction.UpdateAllGet("theme"));
            url.searchParams.set("type", "theme");
            window.history.replaceState(null, null, url);
        } else if (key === "3") {
            this.props.dispatch(UpdateAllGetAction.UpdateAllGet("plugin"));
            url.searchParams.set("type", "plugin");
            window.history.replaceState(null, null, url);
        } else {
            console.log("this is core");
            this.props.dispatch(UpdateAllGetAction.UpdateAllGet("core"));
            url.searchParams.set("type", "core");
            window.history.replaceState(null, null, url);
        }
    };
    componentDidMount() {
        let query = UrlHelper.parseParams(window.location.search);
        query.type = query.type ? query.type : "core";
        this.props.dispatch(UpdateAllGetAction.UpdateAllGet(query.type));
    }

    render() {
        let defaultKey;
        const urlParams = new URLSearchParams(window.location.search);
        const defaultTab = urlParams.get("type");
        if (defaultTab === "theme") {
            defaultKey = "2";
        } else if (defaultTab === "plugin") {
            defaultKey = "3";
        }
        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="update-sites" />

                    <div className="content content-components site-update-page">
                        <div className="container">
                            <h4 className="tx-color-01 mg-b-15">Update All</h4>
                            <Tabs
                                defaultActiveKey={defaultKey}
                                onSelect={this.handleSelect}
                                id="uncontrolled-tab-example"
                                className="nav-fill"
                            >
                                <Tab eventKey={1} title="Wordpress Core">
                                    <SiteCoreUpdateComponent
                                        wordpressCore={
                                            this.props.wp_update_all.wordpress
                                        }
                                        wordpressUpdate={
                                            this.props.wp_update_all_put
                                        }
                                        dispatch={this.props.dispatch}
                                    />
                                </Tab>
                                <Tab eventKey={2} title="Wordpress Themes">
                                    <SiteThemeUpdateComponent
                                        wordpressThemes={
                                            this.props.wp_update_all.wordpress
                                        }
                                        wordpressUpdate={
                                            this.props.wp_update_all_put
                                        }
                                        dispatch={this.props.dispatch}
                                    />
                                </Tab>
                                <Tab eventKey={3} title="Wordpress Plugins">
                                    <SitePluginUpdateComponent
                                        wordpressPlugins={
                                            this.props.wp_update_all.wordpress
                                        }
                                        wordpressUpdate={
                                            this.props.wp_update_all_put
                                        }
                                        dispatch={this.props.dispatch}
                                    />
                                </Tab>
                            </Tabs>
                            <Row className="mt-3">
                                <Col md={4}>
                                    <PaginationDropDown
                                        title={"Sites"}
                                        perPage={
                                            this.props.wp_update_all.pagination
                                                .per_page
                                        }
                                    />
                                </Col>
                                <Col md={4}>
                                    <PaginationNumber
                                        perPage={
                                            this.props.wp_update_all.pagination
                                                .per_page
                                        }
                                        totalPages={
                                            this.props.wp_update_all.pagination
                                                .total_pages
                                        }
                                        currentPage={
                                            this.props.wp_update_all.pagination
                                                .current_page
                                        }
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
        wp_update_all: state.wpUpdateAll.wpUpdate_get,
        wp_update_all_put: state.wpUpdateAll.wpUpdate_put,
    };
};

export default connect(mapStateToProps)(SiteAllUpdateComponent);
