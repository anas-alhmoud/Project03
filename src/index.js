import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PageNotFound from './components/PageNotFound'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/logout">
        <Redirect to="/" /> 
      </Route>
      <Route component={PageNotFound} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
