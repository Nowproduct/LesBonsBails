import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import './core.css';

class Sidenav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            displayEvent : false
        }
    }

    hideEvent = () => {
        this.setState({
            displayEvent : false,
        })
    };
    
    displayEvent = () => {
        this.setState({
            displayEvent : true,
        })
    };

    componentWillReceiveProps(props) {

    }

    render() {
        return (
            <Drawer
                className={(this.props.open)?'sidenav open':'sidenav close'}
                variant="permanent"
                anchor="left"
            >
                <NavLink to="/CreateOffer" exact className="sidenav-button" onClick={this.hideEvent}>Nouvelle offre</NavLink>
                <NavLink to="/" exact className="sidenav-button" onClick={this.hideEvent}>Article Récents</NavLink>

            </Drawer>
        )
    }
}

export default Sidenav;