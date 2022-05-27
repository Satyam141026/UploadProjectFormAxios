import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Pages/Login';
import Register from './Register';

import { BrowserRouter } from "react-router-dom";
//import Register from './Register';
import Register2 from './Register2';
import App1 from './App1';
import { Nav } from 'react-bootstrap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
<Nav/>
  <BrowserRouter>
      <App1/>
    </BrowserRouter>
    
  </React.StrictMode>
);

