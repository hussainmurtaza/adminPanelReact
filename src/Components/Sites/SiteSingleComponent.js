import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "Components/Sidebar";
import SiteFirstAction from "Redux/V1/Sites/Details/First/SiteFirstAction";
import TemplateMain from "Templates/TemplateMain";
import { Tabs, Tab, Row, Col, Button } from "react-bootstrap";
import SiteUpdateComponent from "Components/Sites/SiteDashboard/SiteUpdateComponent";
import OneClickLoginAction from "Redux/V1/Sites/OneClickLogin/OneClickLoginAction";
import SiteDetailComponent from "Components/Sites/SiteDashboard/SiteDetailComponent";
import SiteCustomer from "Components/Sites/SiteDashboard/SiteCustomerComponent";
import SiteOperation from "Components/Sites/SiteDashboard/SiteOperationComponent";
import SiteAddonComponent from "Components/Sites/SiteDashboard/SiteAddonComponent";
import WordpressGetAction from "Redux/V1/Sites/Wordpress/Get/WordpressGetAction";
import RedisDetailAction from "Redux/V1/Sites/Features/Operations/Redis/First/RedisFirstAction";

class SiteSingleComponent extends Component {
    componentDidMount() {
        this.props.dispatch(
            SiteFirstAction.siteFirst(this.props.match.params.host)
        );
    }
    quickLogin = (e) => {
        const identity = e.target.getAttribute("data-identity");
        this.props.dispatch(OneClickLoginAction.getOneClickLogin(identity));
    };
    handleSelect = (key) => {
        if (key === "site-update") {
            this.props.dispatch(
                WordpressGetAction.getWordpress(
                    this.props.site.container.identity
                )
            );
        }
        if (key === "site-operation") {
            this.props.dispatch(
                RedisDetailAction.redisFirst(this.props.site.container.identity)
            );
        }
    };

    render() {
        const serverDetail = this.props.site.server_details;
        return (
            <React.Fragment>
                <TemplateMain>
                    <Sidebar active="sites" />

                    <div className="content content-components">
                        <div className="container">
                            <Row className="align-items-center">
                                <Col></Col>
                                <Col className="text-right mb-3 site-button">
                                    <a
                                        className="btn-brand-02 btn btn-primary"
                                        href={serverDetail.monit}
                                        target="
											_blank"
                                    >
                                        <i data-feather="monitor"></i> Monit
                                    </a>{" "}
                                    <Button
                                        className="btn-brand-02"
                                        data-identity={
                                            this.props.site.container.identity
                                        }
                                        onClick={(e) => this.quickLogin(e)}
                                    >
                                        <img
                                            src="/assets/img/Wordpress-white.png"
                                            alt="wordpresswhite"
                                        />{" "}
                                        WP Admin
                                    </Button>
                                </Col>
                            </Row>
                            <Tabs
                                defaultActiveKey="site-detail"
                                onSelect={this.handleSelect}
                                id="uncontrolled-tab-example"
                                className="nav-fill"
                            >
                                <Tab
                                    eventKey="site-detail"
                                    title="Site Details"
                                >
                                    <SiteDetailComponent
                                        site={this.props.site}
                                    />
                                </Tab>
                                <Tab
                                    eventKey="site-customer"
                                    title="Site Customers"
                                >
                                    <SiteCustomer site={this.props.site} />
                                </Tab>
                                <Tab
                                    eventKey="site-update"
                                    title="Site Updates"
                                >
                                    <SiteUpdateComponent
                                        identity={
                                            this.props.site.container.identity
                                        }
                                    />
                                </Tab>
                                <Tab
                                    eventKey="site-operation"
                                    title="Site Operations"
                                >
                                    <SiteOperation
                                        identity={
                                            this.props.site.container.identity
                                        }
                                        botStatus={
                                            this.props.site.container.bot_block
                                        }
                                        host={this.props.match.params.host}
                                        dis={this.props.dispatch}
                                        redisStatus={
                                            this.props.site.container
                                                .redisStatus
                                        }
                                    />
                                </Tab>
                                <Tab eventKey="site-addon" title="Site Addons">
                                    <SiteAddonComponent
                                        site={this.props.site}
                                    />
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        site: state.site_first.site,
    };
};

export default connect(mapStateToProps)(SiteSingleComponent);
