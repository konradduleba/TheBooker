import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './Components/MainPageComponent/MainPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { UseUserData } from './Authentication/UserDataContext';
import { HelmetProvider } from 'react-helmet-async';

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

