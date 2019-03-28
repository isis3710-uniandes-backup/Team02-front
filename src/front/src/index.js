import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './loginPage/loginPage.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SignUp from './signUpPage/signUp';
import MainPage from './mainPage/mainPage';

ReactDOM.render(<Router>
    <Route path = "/login" component = {LoginPage}></Route>
    <Route path = "/register" component = {SignUp}></Route>
    <Route path = "/home" component = {MainPage}></Route>
</Router>, document.getElementById('root'));

