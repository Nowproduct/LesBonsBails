import React, { Component } from "react";
import Button from '@material-ui/core/Button';

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
    return (
      <div className="wrapper">
        Connected haha
      <Button
      onClick={() => this.logOut()}>
      Disconnect
      </Button>
      </div>  
    )
  }
}

export default App;