import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import './general.css';
import Test from "./components/Test";

class App extends Component {
  render() {
      return <div className="App">
          <BrowserRouter>
              <div className="sans-serif">
                  <Route exact path="/" component={Test}/>
                  <Route path="/home" component={Test}/>
              </div>
          </BrowserRouter>
      </div>;
  }
}

export default App;
