import React, { Component } from 'react';
// import logo from '/images/logo2.png';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import './general.css';
import Login from "./components/Login/Login";
import AddLink from "./components/AddLink/AddLink";
import Settings from "./components/Settings/Settings";
import Register from "./components/Register/Register";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ReferenceCard from "./components/DashboardTest/ReferenceCard";
import ReferencesDashboard from "./components/DashboardTest/ReferencesDashboard";
import Home from "./components/Home/Home";

class App extends Component {
    state =
        {
            // cards:
            //     [
            //         {id: '1as3dasde3434', name: 'PDF', age: 131},
            //     ],
        };
  render() {
      return <div className="App">
          <BrowserRouter>
              <div className="sans-serif">
                  <Route exact path="/" component={Home}/>  {/*this is a main entry .. we will change it later .. but i write it now to don't show a blank page in the start of the project*/}
                  {/*<Route path="/Home" component={Home}/>*/}
                  <Route path="/ForgotPassword" component={ForgotPassword}/>
                  <Route path="/DashboardTest" component={ReferenceCard}/>
                  <Route path="/board" component={ReferencesDashboard}/>
                  <Route path="/board?id=:id" component={ReferencesDashboard}/>
                  <Route path="/DashboardTest" component={ReferenceCard}/>
                  <Route path="/board" component={ReferencesDashboard}/>
                  <Route path="/board?id=:id" component={ReferencesDashboard}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/AddLink" component={AddLink}/>
                  <Route path="/settings" component={Settings}/>
                  {/*<Route path="/emaam" component={Dashboard}/>*/}
                  <Route path="/Register" component={Register}/>
              </div>
          </BrowserRouter>
      </div>;
  }
}

export default App;



