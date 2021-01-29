import React from 'react';
import BannerComponent from '../BannerComponent/BannerComponent';
import LoginPage from '../LoginPageComponent/LoginPage';
import './MainPage.scss';

const App = ():JSX.Element => {
  return (
    <div className="main-page-wrapper">
      <BannerComponent/>
      <h1>the facebook</h1>
      <LoginPage />
    </div>
  );
}

export default App;
