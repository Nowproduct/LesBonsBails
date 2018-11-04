import React, { Component } from 'react';
import API from '../../../components/api';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from "react-redux";

class Offer extends Component {


    constructor (props) {
        super(props);
        
        this.state = {
            name: '',
            price: '',
            type: '',
            description: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        console.log('token',this.props.user[0].token)
    }

    handleSubmit(event) {
        event.preventDefault();

        const article= {
            name: this.state.name,
            description: this.state.description,
            type: this.state.type,
            price: this.state.price,
        };

        let self = this;

        console.log(article)
            API.post('/articles', article, {
                headers: {
                    'authorization': 'Bearer ' + self.props.user[0].token
                }
                }).then(function (res) {
                    alert("Event crée avec succes")
                }).catch(function (res) {
                    alert(res.response.data.message)
                });   
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }
    
    
render() {

  return (
      <div>
            <form className="profile-identity-form" onSubmit={this.handleSubmit}>
                <FormControl fullWidth={true} required={true}>
                    <InputLabel htmlFor="name">Nom</InputLabel>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </FormControl>
                <FormControl fullWidth={true} required={true}>
                    <InputLabel htmlFor="description">description</InputLabel>
                    <Input
                        id="description"
                        name="description"
                        type="text"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                </FormControl>
                <FormControl fullWidth={true} required={true}>
                    <InputLabel htmlFor="type">Type</InputLabel>
                    <Input
                        id="type"
                        name="type"
                        type="text"
                        value={this.state.type}
                        onChange={this.handleChange}
                    />
                </FormControl>

                <FormControl fullWidth={true} required={true}>
                    <InputLabel htmlFor="price">prix</InputLabel>
                    <Input
                        id="price"
                        name="price"
                        type="text"
                        value={this.state.price}
                        onChange={this.handleChange}
                    />
                </FormControl>
                <input
                        type="submit"
                        value="Modifier"
                        className="btn-start-art btn-form btn-rounded btn-contained"
                    />
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => 
{
  return { user: state.user };
};

export default connect (mapStateToProps)(Offer);