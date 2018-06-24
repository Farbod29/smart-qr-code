import React, { Component } from 'react';
// import logo from '/images/logo2.png';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import './general.css';
import Test from "./components/Test";
import Login from "./components/Login/Login";
import AddLink from "./components/AddLink/AddLink";
import Dashboard from  "./components/Dashboard/index";
import Settings from "./components/Settings/Settings";

class App extends Component {
    state =
        {
            // cards:
            //     [
            //         {id: '1as3dasde3434', name: 'PDF', age: 131},
            //     ],
        };
  render() {
      return (

          <div className="App">
          <BrowserRouter>
              <div className="sans-serif">
                  {/*<img src={logo} className="App-logo" alt="logo" />*/}
                  <Route exact path="/" component={Test}/>
                  <Route path="/home" component={Test}/>
                  <Route path="/Dashboard" component={Dashboard}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/AddLink" component={AddLink}/>
                  <Route path="/settings" component={Settings}/>
                  <Route path="/emaam" component={Dashboard}/>
              </div>
          </BrowserRouter>
      </div>);
  }
}

export default App;



