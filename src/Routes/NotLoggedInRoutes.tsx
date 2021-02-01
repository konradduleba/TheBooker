import React, { useContext } from 'react';
import WelcomePageComponent from '../Components/WelcomePageComponent/WelcomePageComponent';
import RegisterPageComponent from '../Components/RegisterPageComponent/RegisterPageComponent';
import AboutPageComponent from '../Components/AboutPageComponent/AboutPageComponent';
import ContactPageComponent from '../Components/ContactPageComponent/ContactPageComponent';
import PrivacyPolicyComponent from '../Components/PrivacyPolicyComponent/PrivacyPolicyComponent';
import TermsPageComponent from '../Components/TermsPageComponent/TermsPageComponent';
import FAQPageComponent from '../Components/FAQPageComponent/FAQPageComponent';
import BannerComponent from '../Components/BannerComponent/BannerComponent';
import FooterComponent from '../Components/FooterComponent/FooterComponent';
import LoginPage from '../Components/LoginPageComponent/LoginPage';
import LoginLeftComponent from '../Components/LoginLeftComponent/LoginLeftComponent';
import { Route, Switch, Redirect } from "react-router-dom";
import { UserData } from '../Authentication/UserDataContext';

const NotLoggedInRoutes = (): JSX.Element => {
    const { userData } = useContext(UserData);

    if (userData?.isLoggedIn) return <Redirect to="/app/home" />

    return (
        <div className="main-page-wrapper">
            <BannerComponent />
            <main>
                <LoginLeftComponent />
                <Switch>
                    <Route exact path="/welcome" component={WelcomePageComponent} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPageComponent} />
                    <Route exact path="/about" component={AboutPageComponent} />
                    <Route exact path="/contact" component={ContactPageComponent} />
                    <Route exact path="/privacy" component={PrivacyPolicyComponent} />
                    <Route exact path="/terms" component={TermsPageComponent} />
                    <Route exact path="/faq" component={FAQPageComponent} />
                    <Redirect exact path="/" to="/app/home" />
                    <Route path="*" component={() => <>404</>} />
                </Switch>
            </main>
            <FooterComponent />
        </div>
    )
};

export default NotLoggedInRoutes;