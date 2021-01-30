import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './Components/MainPageComponent/MainPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { UseUserData } from './Authentication/UserDataContext';

ReactDOM.render(
  <React.StrictMode>
    <UseUserData>
      <Router>
        <MainPage />
      </Router>
    </UseUserData>
  </React.StrictMode>,
  document.getElementById('root'),
);

