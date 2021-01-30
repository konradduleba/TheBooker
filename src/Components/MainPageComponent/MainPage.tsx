import React from 'react';
import BannerComponent from '../BannerComponent/BannerComponent';
import FooterComponent from '../FooterComponent/FooterComponent';
import RouteComponent from '../RouteComponent/RouteComponent';
import LoginPage from '../LoginPageComponent/LoginPage';
import LoginLeftComponent from '../LoginLeftComponent/LoginLeftComponent';
import { Route, Switch, Redirect } from "react-router-dom";
import './MainPage.scss';
import WelcomePageComponent from '../WelcomePageComponent/WelcomePageComponent';
import RegisterPageComponent from '../RegisterPageComponent/RegisterPageComponent';
import AboutPageComponent from '../AboutPageComponent/AboutPageComponent';

const App = (): JSX.Element => (
  <div className="main-page-wrapper">
    <BannerComponent />
    <main>
      <LoginLeftComponent />
      <Switch>
        <Route path="/app" >
          <RouteComponent />
        </Route>
        <Route exact path="/welcome" component={WelcomePageComponent} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPageComponent} />
        <Route exact path="/about" component={AboutPageComponent} />
        <Redirect exact path="/" to="/app/home" />
        {/* <Route path="*" component={NotFoundPage} /> */}
      </Switch>
    </main>
    <FooterComponent />
  </div>
);
export default App;
