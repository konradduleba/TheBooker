import React, { useContext } from 'react';
import { Redirect, Switch, Route } from 'react-router';
import Banner from '../Components/Global/Banner/Banner';
import Footer from '../Components/Global/Footer/Footer';
import LoginLeft from '../Components/Global/LoginLeft/LoginLeft';
import { UserData } from '../Contexts/UserDataContext/UserData';
import AboutPage from '../Pages/AboutPage/AboutPage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import FAQPage from '../Pages/FAQPage/FAQPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import PrivacyPolicy from '../Pages/PrivacyPolicy/PrivacyPolicy';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import TermsPage from '../Pages/TermsPage/TermsPage';
import WelcomePage from '../Pages/WelcomePage/WelcomePage';

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