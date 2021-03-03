import React, { useContext } from 'react';
import WelcomePage from '../Components/WelcomePage/WelcomePage';
import RegisterPage from '../Components/RegisterPage/RegisterPage';
import AboutPage from '../Components/AboutPage/AboutPage';
import ContactPage from '../Components/ContactPage/ContactPage';
import PrivacyPolicy from '../Components/PrivacyPolicy/PrivacyPolicy';
import TermsPage from '../Components/TermsPage/TermsPage';
import FAQPage from '../Components/FAQPage/FAQPage';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import LoginPage from '../Components/LoginPage/LoginPage';
import LoginLeft from '../Components/LoginLeft/LoginLeft';
import { Route, Switch, Redirect } from "react-router-dom";
import { UserData } from '../Authentication/UserDataContext/UserDataContext';
import NotFoundPage from '../Components/NotFoundPage/NotFoundPage';

const NotLoggedInRoutes = (): JSX.Element => {
    const { userData } = useContext(UserData);

    if (userData?.isLoggedIn) return <Redirect to="/app/home" />

    return (
        <div className="main-page-wrapper">
            <Banner />
            <main>
                <LoginLeft />
                <Switch>
                    <Route exact path="/welcome" component={WelcomePage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/privacy" component={PrivacyPolicy} />
                    <Route exact path="/terms" component={TermsPage} />
                    <Route exact path="/faq" component={FAQPage} />
                    <Redirect exact path="/" to="/app/home" />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </main>
            <Footer />
        </div>
    )
};

export default NotLoggedInRoutes;