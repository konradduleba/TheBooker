import React from 'react';
import LoginPage from '../LoginPageComponent/LoginPage';
import './MainPage.scss';

const App = ():JSX.Element => {
  return (
    <div className="main-page-wrapper">
      <h1>the facebook</h1>
      <LoginPage />
    </div>
  );
}

export default App;
