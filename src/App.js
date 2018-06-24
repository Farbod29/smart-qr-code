import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import './general.css';
import Test from "./components/Test";
import Login from "./components/Login/Login";
import AddLink from "./components/AddLink/AddLink";

class App extends Component {
  render() {
      return <div className="App">
          <BrowserRouter>
              <div className="sans-serif">
                  <Route exact path="/" component={Test}/>
                  <Route path="/home" component={Test}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/AddLink" component={AddLink}/>
              </div>
          </BrowserRouter>
      </div>;
  }
}

export default App;
