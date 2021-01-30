import React from 'react';
import BannerComponent from '../BannerComponent/BannerComponent';
import FooterComponent from '../FooterComponent/FooterComponent';
import RouteComponent from '../RouteComponent/RouteComponent';
import LoginPage from '../LoginPageComponent/LoginPage';
import LoginLeftComponent from '../LoginLeftComponent/LoginLeftComponent';
import { Route, Switch, Redirect } from "react-router-dom";
import './MainPage.scss';
import WelcomePageComponent from '../WelcomePageComponent/WelcomePageComponent';

const App = (): JSX.Element => {
  return (
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
          <Redirect exact path="/" to="/app/home" />
          {/* <Route path="*" component={NotFoundPage} /> */}
        </Switch>
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
