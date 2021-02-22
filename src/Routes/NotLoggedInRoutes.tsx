import React, { useContext } from 'react';
import WelcomePageComponent from '../Components/WelcomePage/WelcomePage';
import RegisterPageComponent from '../Components/RegisterPage/RegisterPage';
import AboutPageComponent from '../Components/AboutPageComponent/AboutPageComponent';
import ContactPageComponent from '../Components/ContactPageComponent/ContactPageComponent';
import PrivacyPolicyComponent from '../Components/PrivacyPolicy/PrivacyPolicy';
import TermsPageComponent from '../Components/TermsPage/TermsPage';
import FAQPageComponent from '../Components/FAQPage/FAQPage';
import BannerComponent from '../Components/BannerComponent/BannerComponent';
import FooterComponent from '../Components/Footer/Footer';
import LoginPage from '../Components/LoginPage/LoginPage';
import LoginLeftComponent from '../Components/LoginLeft/LoginLeft';
import { Route, Switch, Redirect } from "react-router-dom";
import { UserData } from '../Authentication/UserDataContext/UserDataContext';
import NotFoundPage from '../Components/NotFoundPage/NotFoundPage';

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
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </main>
            <FooterComponent />
        </div>
    )
};

export default NotLoggedInRoutes;