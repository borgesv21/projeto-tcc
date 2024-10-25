import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './paginaInicio/App.jsx';
import Contrate from './paginaContrato/contrate.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />} />
    <Route path='/contrate' element={<Contrate />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

