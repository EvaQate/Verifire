import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App.jsx';
import styles from './assets/styles.scss';

//imported react router into our App level to utilize it throughout the rest of the application
import { BrowserRouter } from "react-router-dom";
//by using createRoot here we are onboarding concurrent mode in the experimental react version


 
    render(
      <BrowserRouter>
      <App /></BrowserRouter> ,
      document.getElementById('root')
    )
