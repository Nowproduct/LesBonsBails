import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { addUser } from "../../../actions/index";
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
            isLoggedIn : 0,
            user: {}
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
        const email = this.state.email;
        const password = this.state.password
        this.props.addUser({email, password})
        let self = this;
        API.post('/connect', user)
            .then(function (res){
                self.setState({
                    token: res.data.data.token
                })
                localStorage.setItem('token', self.state.token);
                API.get('/me/profile', {
                    headers: {
                        'authorization' : 'Bearer ' + self.state.token
                    }
                })
                    .then(function(res){
                        console.log('Profil success');
                        localStorage.setItem('user', JSON.stringify(res.data.data));
                        self.setState({
                            user: {...res.data.data, token: self.state.token},
                            isLoggedIn: Boolean(localStorage.getItem('token'))
                        })
                        self.props.addUser(self.state.user)

                    })
                    .catch (function(error){
                        console.log(error);
                    })
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
                            type='password'
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

const mapDispatchToProps = dispatch => {
    return {
      addUser: user => dispatch(addUser(user))
    };
  };

export default connect(null, mapDispatchToProps)(SignIn);