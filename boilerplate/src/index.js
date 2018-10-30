import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App";
import Sign from './Views/Sign'
import "./index.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={Sign}/>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);