import React, { Component } from 'react';
import API from '../../../components/api';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const style = {
    position : 'relative',
    padding: '30px 10px 10px 10px'
}

class Offer extends Component {


    constructor (props) {
        super(props);
        
        this.state = {
            cover : '',
            name: '',
            price: '',
            category: '',
            description: '',
            address: '',
            startDate: '',
            endDate: '',
            latitude: '',
            longitude: '',
            editState : false,
        };
        
        let self = this;
        
        if (props.location.pathname.split('/')[3]){
            API.get('/events/' + props.location.pathname.split('/')[3])
            .then(function (res){
                self.setState({
                    cover : res.data.data.cover,
                    name : res.data.data.name,
                    price : res.data.data.price,
                    category: res.data.data.category,
                    description: res.data.data.description,
                    address: res.data.data.street_address,
                    startDate: res.data.data.start_time.substr(0,10),
                    endDate: res.data.data.end_time.substr(0,10),
                    latitude : res.data.data.latitude,
                    longitude : res.data.data.longitude,
                    editState : true,
                    ID : props.location.pathname.split('/')[3],
                })
                console.log('date -- ' + self.state.startDate)
            })
        }
        else
            console.log('create')


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const eventC= {
            cover : this.state.cover,
            name: this.state.name,
            description: this.state.description,
            category: this.state.category,
            price: this.state.price,
            street_address: this.state.address,
            start_time: this.state.startDate,
            end_time: this.state.endDate,
            longitude: this.state.longitude,
            latitude: this.state.latitude,
        };
        console.log(eventC)
        if (!this.state.latitude)
            alert('L\'adresse n\'existe pas ');
        else if(!this.state.startDate ||!this.state.endDate)
            alert('La date n\'a pas été sélectionnée')
        else {
        if (this.state.editState){
            API.put('/events/' + this.state.ID, eventC, {
                headers: {
                    'authorization': 'Bearer ' + localStorage.getItem('token')
                }
                }).then(function (res) {
                    alert("Event modifié avec succes")
                }).catch(function (error) {
                    console.log(error);
                    alert("Une erreur est survenu veuillez réessayer dans quelques minutes.");
                })
        }
        else {
            API.post('/events', eventC, {
                headers: {
                    'authorization': 'Bearer ' + localStorage.getItem('token')
                }
                }).then(function (res) {
                    alert("Event crée avec succes")
                }).catch(function (res) {
                    console.log(res.response.data.message);
                if (res.response.data.message === "ValidationError: end_time: Invalid end time: event is already finished")
                    alert('Votre événement est déjà terminé')
                else
                    alert(res.response.data.message)
                });   
        }
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    BackToEvent = () => {
        window.location.pathname = '/event';
    }
    
    
render() {
    
    let backgroundImage = {
    maxWidth : '80%',
    height : '350px', 
    display : 'flex',
    margin : 'auto',
    paddingTop : '20px'
  };
    
    let button = this.state.editState ?
                    <input
                        type="submit"
                        value="Modifier"
                        className="btn-start-art btn-form btn-rounded btn-contained"
                    /> :
                    <input
                    type="submit"
                    value="Creer"
                    className="btn-start-art btn-form btn-rounded btn-contained"
                    />
    let image = '' 
        if (this.state.cover)
            image = <img src={this.state.cover} style={backgroundImage}/>
        return (
                <div className='eventCreate' style={style}>

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
                    <InputLabel htmlFor="description">Type</InputLabel>
                    <Input
                        id="description"
                        name="description"
                        type="text"
                        value={this.state.description}
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
                {button}
            </form>
            </div>
        )
    }
}


export default Offer;