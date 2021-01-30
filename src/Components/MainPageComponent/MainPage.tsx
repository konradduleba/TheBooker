import React from 'react';
import BannerComponent from '../BannerComponent/BannerComponent';
import FooterComponent from '../FooterComponent/FooterComponent';
import RouteComponent from '../RouteComponent/RouteComponent';
import LoginPage from '../LoginPageComponent/LoginPage';
import { Route, Switch, Redirect } from "react-router-dom";
import './MainPage.scss';

const App = ():JSX.Element => {
  return (
    <div className="main-page-wrapper">
      <BannerComponent/>
      <Switch>
        <Route path="/app" >
          <RouteComponent />
        </Route>
        {/* <Route exact path="/welcome" component={WelcomePage} /> */}
        <Route exact path="/login" component={LoginPage} />
        <Redirect exact path="/" to="/app/home" />
        {/* <Route path="*" component={NotFoundPage} /> */}
      </Switch>
      <FooterComponent/>
    </div>
  );
}

export default App;
