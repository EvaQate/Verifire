
import React, { useState, useEffect } from  "react";

const EventEmitter = require('events');


class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// increase the limit
myEmitter.setMaxListeners(100);
//react-bootstrap has pre-made css files that tidy up a little from default
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.scss'

import MainContainer from "./containers/MainContainer.jsx";

const App = () => { 
   
    return (
        <MainContainer />
    
    )
}

 
export default App;
