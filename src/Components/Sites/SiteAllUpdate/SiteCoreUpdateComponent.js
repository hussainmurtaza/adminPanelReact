import React, { Component } from "react";
import { Row, Col, Button, Accordion, Card, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faExternalLinkAlt,
    faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import UpdateAllPutAction from "Redux/V1/WordpressUpdateAll/Put/UpdateAllPutAction";
import OneClickLoginAction from "Redux/V1/Sites/OneClickLogin/OneClickLoginAction";

class SiteCoreUpdateComponent extends Component {
    update = (type, slug, identity) => {
        const updateDetails = {
            type,
            slug,
            identity,
        };
        this.props.dispatch(UpdateAllPutAction.updateAllPut(updateDetails));
    };
    quickLogin = (e) => {
        const identity = e.target.getAttribute("data-identity");
        this.props.dispatch(OneClickLoginAction.getOneClickLogin(identity));
    };
    render() {
        const wordpressCore = this.props.wordpressCore;
        return (
            <React.Fragment>
                <Card className="site-card-header">
                    <Card.Header>
                        <Row className="align-items-center">
                            <Col md={3}>Wordpress Core</Col>
                            <Col md={3}>Latest Version</Col>
                            <Col md={3}>Total Sites</Col>
                            <Col md={3}></Col>
                        </Row>
                    </Card.Header>
                </Card>
                <Accordion className="site-core-accordion">
                    {wordpressCore === undefined
                        ? ""
                        : wordpressCore.map((wordpressCore) => {
                              return (
                                  <Card>
                                      <Card.Header>
                                          <Row className="align-items-center">
                                              <Col md={3}>Wordpress Core</Col>
                                              <Col md={3}>
                                                  {wordpressCore.update_version}
                                              </Col>
                                              <Col md={3}>
                                                  {wordpressCore.sites.length}
                                              </Col>
                                              <Col
                                                  md={3}
                                                  className="text-center"
                                              >
                                                  <button
                                                      type="submit"
                                                      className={`btn btn-update ${
                                                          this.props
                                                              .wordpressUpdate
                                                              .update_slug ===
                                                          wordpressCore.slug
                                                              ? "loading"
                                                              : ""
                                                      }`}
                                                      onClick={() =>
                                                          this.update(
                                                              "plugin",
                                                              wordpressCore.slug,
                                                              wordpressCore.sites.map(
                                                                  (site) =>
                                                                      site.identity
                                                              )
                                                          )
                                                      }
                                                  >
                                                      Update All
                                                  </button>
                                                  <Accordion.Toggle
                                                      as={Button}
                                                      variant="link"
                                                      eventKey="0"
                                                      className="float-right"
                                                  >
                                                      <FontAwesomeIcon
                                                          icon={
                                                              faArrowCircleDown
                                                          }
                                                      />
                                                  </Accordion.Toggle>
                                              </Col>
                                          </Row>
                                      </Card.Header>
                                      <Accordion.Collapse eventKey="0">
                                          <Card.Body>
                                              <Table
                                                  bordered
                                                  className="site-update-table"
                                              >
                                                  <thead>
                                                      <tr>
                                                          <th>Customer Name</th>
                                                          <th>Site Name</th>
                                                          <th>Identity</th>
                                                          <th>Domain</th>
                                                          <th>Login</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      {wordpressCore.sites.map(
                                                          (site) => (
                                                              <tr>
                                                                  <td>
                                                                      <a
                                                                          target="_blank"
                                                                          rel="noopener noreferrer"
                                                                          href={
                                                                              "/customer/" +
                                                                              site.user_id
                                                                          }
                                                                      >
                                                                          {`${site.first_name} ${site.last_name}`}
                                                                      </a>
                                                                  </td>
                                                                  <td>
                                                                      <a
                                                                          target="_blank"
                                                                          rel="noopener noreferrer"
                                                                          href={
                                                                              "/site/" +
                                                                              site.primary_domain
                                                                          }
                                                                      >
                                                                          {
                                                                              site.name
                                                                          }
                                                                      </a>
                                                                  </td>
                                                                  <td>
                                                                      <a
                                                                          target="_blank"
                                                                          rel="noopener noreferrer"
                                                                          href={
                                                                              "/site/" +
                                                                              site.primary_domain
                                                                          }
                                                                      >
                                                                          {
                                                                              site.identity
                                                                          }
                                                                      </a>
                                                                  </td>
                                                                  <td>
                                                                      <a
                                                                          target="_blank"
                                                                          rel="noopener noreferrer"
                                                                          className="update-domain"
                                                                          href={
                                                                              "https://" +
                                                                              site.primary_domain
                                                                          }
                                                                      >
                                                                          {
                                                                              site.primary_domain
                                                                          }
                                                                          <FontAwesomeIcon
                                                                              icon={
                                                                                  faExternalLinkAlt
                                                                              }
                                                                              className="ml-1"
                                                                          />
                                                                      </a>
                                                                  </td>
                                                                  <td className="text-center">
                                                                      <img
                                                                          src="/assets/img/Wordpress.png"
                                                                          alt="wordpresswhite"
                                                                          className="site-wordpress"
                                                                          data-identity={
                                                                              site.identity
                                                                          }
                                                                          onClick={(
                                                                              e
                                                                          ) =>
                                                                              this.quickLogin(
                                                                                  e
                                                                              )
                                                                          }
                                                                      />
                                                                  </td>
                                                              </tr>
                                                          )
                                                      )}
                                                  </tbody>
                                              </Table>
                                          </Card.Body>
                                      </Accordion.Collapse>
                                  </Card>
                              );
                          })}
                </Accordion>
            </React.Fragment>
        );
    }
}

export default SiteCoreUpdateComponent;
