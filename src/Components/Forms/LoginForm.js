import React, { Component } from "react";
import InputText from "Components/Forms/Fields/InputTextField";
class LoginForm extends Component {
    state = {
        form: {
            email: null,
            password: null,
        },
    };

    handleChange = (event) => {
        const { form } = this.state;
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            form: {
                ...form,
                [name]: value,
            },
        });
    };

    handleSubmit = async () => {
        alert(JSON.stringify(this.state.form));
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <InputText
                    placeholder={"Email"}
                    name={"email"}
                    type={"email"}
                    value={this.state.form.email}
                    handleChange={this.handleChange}
                />

                <InputText
                    placeholder={"Password"}
                    name={"password"}
                    type={"password"}
                    value={this.state.form.password}
                    handleChange={this.handleChange}
                />

                <button type="submit" className="btn btn-brand-02 btn-block">
                    Sign In
                </button>
            </form>
        );
    }
}

export default LoginForm;
