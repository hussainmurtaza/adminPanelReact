import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Col, Form, Button } from "react-bootstrap";
import Sidebar from "Components/Sidebar";
import TemplateMain from "Templates/TemplateMain";
import SitesAction from "Redux/V1/Sites/Get/SiteGetAction";
import SitesFilterAction from "Redux/V1/Sites/Filter/SiteFilterAction";
import TimeStampHelper from "Helpers/TimeStampHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

class SiteListComponent extends Component {
	state = {
		form: {
			site_name: null,
			identity: null,
			customer_email: null,
		},
	};
	componentDidMount() {
		this.props.dispatch(SitesAction.getSites());
		this.props.dispatch(SitesFilterAction.filterSites());
	}
	handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(SitesFilterAction.filterSites(this.state.form));
		console.log(this.state.form,"submit filter");
    };
    handleMultiSelect = (e, options) => {
		let { form } = this.state;
		form[e.name] = options;
		this.setState({
			form,
		});
    };

	render() {
		let siteName;
		const siteNameData = this.props.sites_filter;
		if (siteName) {
			siteName = siteNameData.map((site) => {
				return { value: site.site_name, label: site.site_name };
			});
		}
		const options = [
            { value: 'active', label: 'Active' },
            { value: 'pending', label: 'Pending' },
            { value: 'blocked', label: 'Blocked' }
          ]

		return (
			<React.Fragment>
				<TemplateMain>
					<Sidebar active="sites" />

					<div className="content content-components">
						<div className="container">

						<form name="sites">
                            <Form.Row className="align-items-center mb-4">
                                <Col md="3">
                                    <Select
                                        isMulti
                                        name="site_name"
                                        options={siteName}
                                        placeholder="Search Site Name"
                                        onChange={(options, e) =>
                                            this.handleMultiSelect(
                                                e,
                                                options
                                            )
                                        }
                                    />
                                </Col>
                                <Col md="3">
                                <Select
                                        isMulti
                                        name="identity"
                                        options={options}
                                        placeholder="Search Identity"
                                        onChange={(options, e) =>
                                            this.handleMultiSelect(
                                                e,
                                                options
                                            )
                                        }
                                    />
                                </Col>
                                <Col md="3">
                                <Select
                                        isMulti
                                        name="customer_email"
                                        options={options}
                                        placeholder="Search Email"
                                    />
                                </Col>
                                
                                
                                <Col md="3">
                                <Button 
                                    type="submit" 
                                    className="btn btn-brand-02 btn-block" 
                                >
                                    Search
                                </Button>
                                </Col>
                            </Form.Row>
                        </form>


							<h4 className="tx-color-01 mg-b-15">Sites List</h4>
							<div className="user-list-page">
								<Table striped bordered hover>
									<thead>
										<tr>
											{/* <th>User</th> */}
											<th>WP Title</th>
											<th>Identity</th>
											<th>Domain</th>
											<th>Type</th>
											<th>Created At</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{this.props.sites.map((site) => (
											<tr>
												<td>{site.name}</td>
												<td>
													{site.container.identity}
												</td>

												<td>
													{
														site.container
															.primary_domain_name
													}
												</td>
												<td>{site.site_type}</td>
												<td>
													{TimeStampHelper.standardDateFormat(
														`${site.created_at}`
													)}
												</td>
												<td className="text-center">
													<a
														href={
															"/site/" + site.host
														}
														className="btn btn-link"
														title="View"
													>
														<FontAwesomeIcon
															icon={faEye}
														/>
													</a>
												</td>
											</tr>
										))}
									</tbody>
								</Table>
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
		sites: state.sites.sites,
		site_filter: state.site_filter.sites,
	};
};

export default connect(mapStateToProps)(SiteListComponent);
