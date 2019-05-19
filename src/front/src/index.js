import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './loginPage/loginPage.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from './mainPage/mainPage';
import { IntlProvider, addLocaleData } from 'react-intl';
import esLocaleData from 'react-intl/locale-data/es';
import enLocaleData from 'react-intl/locale-data/en';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

var userLang = navigator.language || navigator.userLanguage;

if (userLang === 'es-ES') {
    //Español

    addLocaleData(esLocaleData);

    function routerApp() {
        return (
            <IntlProvider locale="es-ES" messages={localeEsMessages}>
                <Router>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/menu/:accessToken" component={MainPage} />
                </Router>
            </IntlProvider>);
    }
    ReactDOM.render(routerApp(), document.getElementById('root'));

}
else {
    //English

    addLocaleData(enLocaleData);

    function routerApp() {
        return (
            <IntlProvider locale="en" messages={localeEnMessages}>
                <Router>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/menu/:accessToken" component={MainPage} />
                </Router>
            </IntlProvider>);
    }
    ReactDOM.render(routerApp(), document.getElementById('root'));
}

