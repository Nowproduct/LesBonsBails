import React, { Component } from 'react';
import API from '../../../components/api';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            nickname: '',
            valid: false,
            showPassword: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.password !== this.state.passwordConfirm) {
            alert("Le mot de passe et la confirmation sont differentes veuillez réessayer");
            return false;
        }

        if (this.state.email &&  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
            alert("Votre adresse email est incorrect veuillez réessayer");
            return false;
        }

        const user = {
            username: this.state.nickname,
            email: this.state.email,
            password: this.state.password
        };

        API.post('/registration', user)
            .then(function (res) {
                alert("Votre compte a bien été créer");
            })
            .catch(function (error) {
                console.log(error);
                alert("Votre compte n'a pas été créer vérifier votre email et votre mot de passe");
            })
        ;
    }

    render() {

        return (
            <div className={(!this.props.show)?'hide':''}>
                <h2>Inscrivez-vous ;)</h2>
                <form className={this.props.name} onSubmit={this.handleSubmit}>
                    <FormControl fullWidth={true} required={true}>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl fullWidth={true} required={true}>
                        <InputLabel htmlFor="password">Mot de passe</InputLabel>
                        <Input
                            id="password"
                            name="password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl fullWidth={true} required={true}>
                        <InputLabel htmlFor="email">Confirmation du mot de passe</InputLabel>
                        <Input
                            id="passConfirm"
                            name="passwordConfirm"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.passwordConfirm}
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl fullWidth={true} required={true}>
                        <InputLabel htmlFor="email">Pseudonyme</InputLabel>
                        <Input
                            id="nickname"
                            name="nickname"
                            type="text"
                            value={this.state.nickname}
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <div className="form-div-button">
                        <Button
                            type="submit"
                            value="INSCRIPTION"
                            className="btn-rounded btn-contained">
                            INSCRIPTION
                            </Button>
                        <Button
                            className="btn-rounded btn-outlined"
                            variant="outlined"
                            onClick={this.props.action}
                        >
                            CONNEXION
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignUp;