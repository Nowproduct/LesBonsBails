// src/js/components/List.js
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => 
{
  return { user: state.user };
};

const ConnectedList = ({ user }) => (
  <ul className="list-group list-group-flush">
    {user.map(el => (
      <div>
        <p className="list-group-item" key={el.id}>
          Username: {el.username} 
        </p>
        <p className="list-group-item" key={el.id}>
          Password: {el.password} 
        </p>
      </div>
))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;