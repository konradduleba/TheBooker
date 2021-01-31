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
import ContactPageComponent from '../ContactPageComponent/ContactPageComponent';
import PrivacyPolicyComponent from '../PrivacyPolicyComponent/PrivacyPolicyComponent';
import TermsPageComponent from '../TermsPageComponent/TermsPageComponent';
import FAQPageComponent from '../FAQPageComponent/FAQPageComponent';

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
        <Route exact path="/contact" component={ContactPageComponent} />
        <Route exact path="/privacy" component={PrivacyPolicyComponent} />
        <Route exact path="/terms" component={TermsPageComponent} />
        <Route exact path="/faq" component={FAQPageComponent} />
        <Redirect exact path="/" to="/app/home" />
        {/* <Route path="*" component={NotFoundPage} /> */}
      </Switch>
    </main>
    <FooterComponent />
  </div>
);
export default App;
