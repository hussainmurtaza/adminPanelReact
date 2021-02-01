import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import InputUpdateField from "Components/Forms/Fields/InputUpdateField";
import { connect } from "react-redux";
import SingleSelectField from "Components/Forms/Fields/SingleSelectField";
import PremiumCreateAction from "Redux/V1/Premiums/Post/PremiumPostAction";
import PremiumUpdateAction from "Redux/V1/Premiums/Put/PremiumPutAction";
import PremiumDetailAction from "Redux/V1/Premiums/First/PremiumFirstAction";
import Capitilize from "Helpers/CapitilizeHelper";
class PluginFormComponent extends Component {
    state = {
        form: {
            name: null,
            slug: null,
            type: "",
            current_version: null,
            author: null,
        },
        default_data: false,
    };
    componentDidMount() {
        if (this.props.method === "PUT")
            this.props.dispatch(
                PremiumDetailAction.premiumFirst(this.props.params)
            );
    }
    handleChange = (e) => {
        let { form } = this.state;
        form[e.target.name] = e.target.value;

        this.setState({
            form,
        });
        console.log(form, "asdfsdfdsf");
    };
    handleSelect = (e, options) => {
        let { form } = this.state;
        form[e.name] = options;
        this.setState({
            form,
        });
        console.log(options, "options");
    };
    handleSubmit = (e) => {
        if (this.props.method === "PUT") {
            e.preventDefault();
            this.props.dispatch(
                PremiumUpdateAction.premiumPut({
                    form: this.state.form,
                    id: this.props.params,
                })
            );
        }
        if (this.props.method === "POST") {
            e.preventDefault();
            this.props.dispatch(
                PremiumCreateAction.premiumPost(this.state.form)
            );
        }
    };

    setDefaultData = () => {
        if (this.props.method === "PUT") {
            const { form, default_data } = this.state;
            if (default_data === false) {
                setTimeout(() => {
                    form.name = this.props.plugin.name;
                    form.slug = this.props.plugin.slug;
                    form.current_version = this.props.plugin.current_version;
                    form.author = this.props.plugin.author;
                    form.type = {
                        value: this.props.plugin.type,
                        label: Capitilize.capital(`${this.props.plugin.type}`),
                    };
                    this.setState({
                        form,
                        default_data: this.props.plugin_fetched,
                    });
                }, 100);
            }
        }
    };

    render() {
        const plugin = this.props.plugin;
        const plugin_type_options = [
            { value: "plugin", label: "Plugin" },
            { value: "theme", label: "Theme" },
        ];
        this.setDefaultData();

        return (
            <React.Fragment>
                <form method={this.props.method} onSubmit={this.handleSubmit}>
                    <Row>
                        <Col sm={6}>
                            <InputUpdateField
                                type="text"
                                name="name"
                                placeholder="Plugin/Theme Name"
                                onChange={this.handleChange}
                                defaultValue={plugin.name}
                                required
                            />
                        </Col>
                        <Col sm={6}>
                            <InputUpdateField
                                type="text"
                                name="author"
                                placeholder="Author"
                                onChange={this.handleChange}
                                defaultValue={plugin.author}
                                required
                            />
                        </Col>

                        <Col sm={6}>
                            <SingleSelectField
                                name="type"
                                options={plugin_type_options}
                                onChange={(options, e) =>
                                    this.handleSelect(e, options)
                                }
                                placeholder="Type"
                                defaultValue={this.state.form.type}
                                required
                            />
                        </Col>
                        <Col sm={6}>
                            <InputUpdateField
                                type="text"
                                name="slug"
                                placeholder="Slug"
                                onChange={this.handleChange}
                                defaultValue={plugin.slug}
                                required
                            />
                        </Col>
                        <Col sm={6}>
                            <InputUpdateField
                                type="text"
                                name="current_version"
                                placeholder="Current Version"
                                onChange={this.handleChange}
                                defaultValue={plugin.current_version}
                                required
                            />
                        </Col>
                    </Row>
                    <Button type="submit" variant="primary" className="mt-3">
                        {this.props.submitText}
                    </Button>
                </form>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        plugin: state.premium.detail.premium_plugin,
        plugin_fetched: state.premium.detail.fetched,
    };
};

export default connect(mapStateToProps)(PluginFormComponent);
