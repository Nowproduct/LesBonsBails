// src/js/components/Form.js
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addUser } from "../actions/index";
import '../styles/Form.css'

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user))
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  onClick(event) {
    if (this.state.username && this.state.password)
    {
      event.preventDefault();
      const username = this.state.username;
      const password = this.state.password;
      const id = uuidv1();
      this.props.addUser({ username, password, id });
      this.setState({ username: '', password: '' });
    }
    else
    {
      event.preventDefault();
    }
  }

  render() {
    const username = this.state.username;
    const password = this.state.password;

    return (
      <div className="container">
      <div className="window">
      <div className="overlay">
      <div className="content">
        <form onSubmit={this.handleSubmit}>
          <div className="input-fields">
            <input
              type="text"
              className="input-line full-width"
              placeholder="Username"
              id="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="input-line full-width"
              id="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="ghost-round"
           onClick={this.onClick}>
            Register
          </button>
        </form>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
