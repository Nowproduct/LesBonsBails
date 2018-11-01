import React, { Component } from "react";
import { connect } from "react-redux";
import ListOffer from './Views/List/index';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from "./components/navbar";
import Sidenav from "./components/sidenav";
import Offer from "./Views/Offer/Create/index"
import List from "./List"

import './app.css'

class App extends Component
{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: Boolean(localStorage.getItem('token')),
      sidenavOpen: true,
      // search
      hasSearch: false,
      searchValue: ''
  };

  this.logOut = this.logOut.bind(this);
  this.toggleSidenav = this.toggleSidenav.bind(this);
  }

  logOut = () => {
    localStorage.clear();
    this.setState({
        isLoggedIn: false
    });
    window.location.pathname = '/login';
}

toggleSidenav = () => {
  console.log('test');
  this.setState({
      sidenavOpen: !(this.state.sidenavOpen)
  });
}

doSearch = (event) => {

  if (event.keyCode === 13 && event.target.value !== '') {
      window.location.pathname = '/search/user/' + event.target.value;
      // this.setState({
      //     hasSearch: true,
      //     searchValue: event.target.value
      // });
  }
}
  render()
  {

    const isLoggedIn = this.state.isLoggedIn;

    const routes = isLoggedIn ? (
        <Switch>
            <Route exact path="/CreateOffer" component={Offer} />
            <Route exact path="/" component={ListOffer} /> 
            <Route exact path="/profile" component={List} />
        </Switch>
    ) : (
        <Redirect to="/login"/>
    );
    console.log('user', this.props.user)
    console.log(localStorage.getItem('user'))
    return (
      <div className="App">
      <Navbar logout={this.logOut} sidenav={this.toggleSidenav} search={this.doSearch.bind(this)}/>
      <Sidenav open={this.state.sidenavOpen}/>
      <div className={(this.state.sidenavOpen)?'page open':'page close'}>
          <div className={(!this.state.hasSearch)?'show':'hide'}>
          {routes}
          </div>
      </div>
  </div>  
    )
  }
}

const mapStateToProps = state => 
{
  return { user: state.user };
};

export default connect (mapStateToProps)(App);