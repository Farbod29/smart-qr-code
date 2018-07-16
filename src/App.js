

import React, { Component } from 'react';
// import logo from '/images/logo2.png';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import './general.css';
import Login from "./components/login/Login";
import AddLink from "./components/addLink/AddLink";
import Settings from "./components/settings/Settings";
import ReferencesDashboard from "./components/dashboardTest/ReferencesDashboard";
import Home from "./components/home/Home";
import Board from "./components/board/Board";
import QrScanner from "./components/qrScanner/QrScanner";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import Register from "./components/register/Register";

const App = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <div className="sans-serif">
                    <Route exact path="/" component={Home}/>
                    <Route path="/ForgotPassword" component={ForgotPassword}/>
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