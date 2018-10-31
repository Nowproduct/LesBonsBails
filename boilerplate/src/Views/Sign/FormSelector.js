import React, { Component } from 'react';
import SignIn from './SignIn/index';
import SignUp from './SignUp/index';

class FormSelector extends Component{

    constructor(props) {
        super(props);

        this.state = {
            isConnect: false,
        };

        this.clickRegister = this.clickRegister.bind(this, false);
        this.clickLogin = this.clickLogin.bind(this, true);
    }

    clickRegister(isConnect, event) {
        this.setState({
            isConnect: !isConnect
        })
        console.log(this.state.isConnect)
    }

    clickLogin(isConnect, event) {
        this.setState({
            isConnect: !isConnect
        })
    }

    render() {

        return (
            <div>
                <SignIn name="form-login-page login-form" show={!this.state.isConnect} action={this.clickRegister}/>
                <SignUp name="form-login-page register-form" show={this.state.isConnect} action={this.clickLogin}/>
            </div>
        );
    }
}

export default FormSelector;