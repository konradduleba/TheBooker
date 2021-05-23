import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { UseUserData } from './Contexts/UserDataContext/UserData';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from './Components/Global/MainPage/MainPage';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <UseUserData>
        <Router>
          <MainPage />
        </Router>
      </UseUserData>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

