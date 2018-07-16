

import React, { Component } from 'react';
// import logo from '/images/logo2.png';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import './general.css';
import Login from "./components/loginx/Login";
import AddLink from "./components/addLinkx/AddLink";
import Settings from "./components/settingsx/Settings";
import ReferencesDashboard from "./components/dashboardTestx/ReferencesDashboard";
import Home from "./components/homex/Home";
import Board from "./components/boardx/Board";
import QrScanner from "./components/qrScannerx/QrScanner";
import ForgotPassword from "./components/forgotPasswordx/ForgotPassword";
import Register from "./components/registerx/Register";

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