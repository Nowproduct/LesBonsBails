import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import List from './List';
const mapStateToProps = state => 
{
  return { user: state.user };
};


class App extends Component
{
  constructor(props){
    super(props);
  }

  logOut = () => {
    localStorage.clear();
    this.setState({
        isLoggedIn: false
    });
    window.location.pathname = '/login';
}
  render()
  {
    console.log(localStorage.getItem('user'))
    return (
      <div className="wrapper">
        Connected haha
      <Button
      onClick={() => this.logOut()}>
      Disconnect
      </Button>
      <List />
      </div>  
    )
  }
}

export default connect (mapStateToProps)(App);