import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { EventDemo } from './component/EventDemo';


import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import bootstarp from 'bootstrap'
import { Imagehandle } from './imagehandling/Imagehandling';
import { EmiCalculator } from './EmiCalculator/emicalculato';
import { TimeOut } from './Keyboardevents/Keyboard';

import { Fakestore } from './Fackestore/fackstoreapi';


import { Home } from './controlled-component/Home';
import { CookieDemo } from './cookie/cookie-demo';
import { ContextDemo } from './hooks/context-demo';
import { ReducerDemo } from './hooks/reducer';
import { CycleDemo, Login } from './hooks/useEffect';
import {UserLogin } from './Class-component/class-component';

import { CustomerLogin } from './customer/customer-login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <CustomerLogin/>
   </React.StrictMode>
    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
