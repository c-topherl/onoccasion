import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from './reportWebVitals';

ReactDOM.render((
	<Auth0Provider
    	domain="dev-di2mx6r0.us.auth0.com"
    	clientId="j6yLmAVtblRN2xYBD4MG34J2HO66w97a"
    	redirectUri="http://localhost:3000/occasions">
  		<BrowserRouter>
    		<App />
  		</BrowserRouter>
	</Auth0Provider>
), document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
