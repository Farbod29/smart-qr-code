import React, { Component } from 'react';
// import logo from '/images/logo2.png';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import './general.css';
import Login from "./components/Login/Login";
import AddLink from "./components/AddLink/AddLink";
import Settings from "./components/Settings/Settings";
import Register from "./components/register/Register";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import ReferenceCard from "./components/DashboardTest/ReferenceCard";
import ReferencesDashboard from "./components/DashboardTest/ReferencesDashboard";
import Home from "./components/Home/Home";
import Board from "./components/board/Board";
import QrScanner from "./QrScanner/QrScanner";

const App = () => {

      return (
          <div className="App">
              <BrowserRouter>
                  <div className="sans-serif">
                      <Route exact path="/" component={Home}/>
                      <Route path="/ForgotPassword" component={ForgotPassword}/>
                      <Route path="/DashboardTest" component={ReferenceCard}/>
                      <Route path="/board" component={ReferencesDashboard}/>
                      <Route path="/board?id=:id" component={ReferencesDashboard}/>
                      <Route path="/boards" component={Board}/>
                      <Route path="/login" component={Login}/>
                      <Route path="/AddLink" component={AddLink}/>
                      <Route path="/settings" component={Settings}/>
                      <Route path="/register" component={Register}/>
                      <Route path="/Qr-Scanner" component={QrScanner}/>
                  </div>
              </BrowserRouter>
          </div>
      );
};

export default App;


