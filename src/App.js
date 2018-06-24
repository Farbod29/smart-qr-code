import React, { Component } from 'react';
import logo from '/Users/farbodaprin/Desktop/smartqr/src/images/logo2.png';
import './App.css';
import Dashboard from "./Components/Dashboard";

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

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dashboard</h1>
        <p className="App-intro">
            <Dashboard/>
        </p>
      </div>
    );
  }
}

export default App;
