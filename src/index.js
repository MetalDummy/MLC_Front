import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./store/indexStore"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render( 
  <Provider store={store}>
    <Router>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </Router>
  </Provider>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
