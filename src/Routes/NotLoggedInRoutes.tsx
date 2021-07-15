import Login from 'Components/Global/Login/Login';
import Contact from 'Components/User/Pages/MyAccount/Components/Contact';
import About from 'Pages/About/About';
import FAQPageComponent from 'Pages/FAQ/FAQPage';
import NotFoundPage from 'Pages/NotFound/NotFoundPage';
import PrivacyPolicy from 'Pages/PrivacyPolicy/PrivacyPolicy';
import RegisterPageComponent from 'Pages/Register/RegisterPage';
import TermsPageComponent from 'Pages/Terms/TermsPage';
import WelcomePageComponent from 'Pages/Welcome/WelcomePage';
import React, { useContext } from 'react';
import { Redirect, Switch, Route } from 'react-router';
import Banner from '../Components/Global/Banner/Banner';
import Footer from '../Components/Global/Footer/Footer';
import LoginLeft from '../Components/Global/LoginLeft/LoginLeft';
import { UserData } from '../Contexts/UserDataContext/UserData';

const NotLoggedInRoutes = (): JSX.Element => {
    const { userData } = useContext(UserData);

    if (userData?.isLoggedIn) return <Redirect to="/app/home" />

    return (
        <div className="main-page-wrapper">
            <Banner />
            <main>
                <LoginLeft />
                <Switch>
                    <Route exact path="/welcome" component={WelcomePageComponent} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={RegisterPageComponent} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/privacy" component={PrivacyPolicy} />
                    <Route exact path="/terms" component={TermsPageComponent} />
                    <Route exact path="/faq" component={FAQPageComponent} />
                    <Redirect exact path="/" to="/app/home" />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </main>
            <Footer />
        </div>
    )
};

export default NotLoggedInRoutes;