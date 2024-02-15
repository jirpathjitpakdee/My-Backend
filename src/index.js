import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home_admin from './components/Home_admin';
import List_sichon from './components/List_sichon';
import Form_sichon from './components/Form_sichon';
import Type_sichon from  './components/Type_sichon';
import Vill_sichon from './components/Vill_sichon';
import Reli_sichon from './components/Reli_sichon';
import River_sichon from './components/River_sichon';
import Status_sichon from './components/Status_sichon';

const router = createBrowserRouter ([
  {
    path: "/",
    element : <Home_admin/>
  },
  {
    path: "/ListSichon",
    element : <List_sichon/>
  },
  {
    path: "/FormSichon",
    element : <Form_sichon/>
  },
  {
    path: "/TypeSichon",
    element : <Type_sichon/>
  },
  {
    path: "/VillSichon",
    element : <Vill_sichon/>
  },
  {
    path: "/ReliSichon",
    element : <Reli_sichon/>
  },
  {
    path: "/RiverSichon",
    element : <River_sichon/>
  },
  {
    path: "/StatusSichon",
    element : <Status_sichon />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
