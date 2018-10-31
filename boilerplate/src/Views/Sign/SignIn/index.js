import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../../components/api';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel'

import '../sign.css';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : '',
            isLoggedIn : Boolean(localStorage.getItem('token'))
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState ({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }
        API.post('/connect', user)
            .then(function (res){
                let token = res.data.data;
                localStorage.setItem('token', token);
                console.log('Connection success', res);
                window.location.pathname = "/";
            })
            .catch(function(error) {
                console.log('Connection failed', error);
            });     
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;

        const page = isLoggedIn ? (
            <Redirect to="/"/>
        ) : (
            <div className={(!this.props.show)?'hide':''}>
                <h2>Connectez-vous</h2>
                <form className={this.props.name} onSubmit={this.handleSubmit}>
                    <FormControl fullWidth={true} required={true}>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input
                            id="logEmail"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormControl>
                       <FormControl fullWidth={true} required={true}>
                        <InputLabel htmlFor="password">Mot de passe</InputLabel>
                        <Input
                            id="logPass"
                            name="password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <div className="form-div-button">
                        <Button
                            className="btn-rounded btn-outlined"
                            variant="outlined"
                            onClick={this.props.action}
                        >
                            INSCRIPTION
                        </Button>
                        <Button
                            type="submit"
                            value="CONNEXION"
                            className=" btn-rounded btn-contained"> CONNEXION
                        </Button>
                    </div>
                </form>
            </div>
        );
        return page;
    }
}
export default SignIn;