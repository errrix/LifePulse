import '../scss/all.scss';
// import $ from "jquery";
// import popup from './popup'

import React from 'react';
import ReactDOM from 'react-dom';

// import { createStore } from 'redux';
// import reducer from './reducer/';

import MainRouter from "./Routing";

ReactDOM.render(
        <MainRouter/>,
    document.getElementById('app')
);


