import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { UserData } from '../Authentication/UserDataContext/UserDataContext';
import AboutPage from '../Components/AboutPage/AboutPage';
import Banner from '../Components/Banner/Banner';
import ContactPage from '../Components/ContactPage/ContactPage';
import FAQPage from '../Components/FAQPage/FAQPage';
import Footer from '../Components/Footer/Footer';
import LogoutPage from '../Components/LogoutPage/LogoutPage';
import MyProfilePage from '../Components/MyProfilePage/MyProfilePage';
import NotFoundPage from '../Components/NotFoundPage/NotFoundPage';
import PrivacyPolicy from '../Components/PrivacyPolicy/PrivacyPolicy';
import QuickMenu from '../Components/QuickMenu/QuickMenu';
import QuickSearch from '../Components/QuickSearch/QuickSearch';
import TermsPage from '../Components/TermsPage/TermsPage';
import MyFriends from '../Components/MyFriends/MyFriends';
import MyGroups from '../Components/MyGroups/MyGroups';
import MyParties from '../Components/MyParties/MyParties';
import AddParty from '../Components/CreateParty/CreateParty';
import routes from '../Utils/routes.json';
import MyAccountPage from '../Components/MyAccountPage/MyAccountPage';
import DeleteAccount from '../Components/DeleteAccount/DeleteAccount';
import DeactivateAccount from '../Components/DeactivateAccount/DeactivateAccount';
import MyPrivacyPage from '../Components/MyPrivacyPage/MyPrivacyPage';
import SearchPage from '../Components/SearchPage/SearchPage';
import UserProfilePage from '../Components/UserProfilePage/UserProfilePage';
import SocialNetPage from '../Components/SocialNetPage/SocialNetPage';
import InvitePage from '../Components/InvitePage/InvitePage';
import GlobalPage from '../Components/GlobalPage/GlobalPage';

const LoggedInRoutes = (): JSX.Element => {
    const { userData } = useContext(UserData);

    if (!userData?.isLoggedIn) return <Redirect to="/welcome" />

    return (
        <div className="main-page-wrapper">
            <Banner />
            <main>
                <div className='quick-panel-wrapper'>
                    <QuickSearch />
                    <QuickMenu />
                </div>
                <Switch>
                    <Route exact path="/app/home"><h1>Hello</h1></Route>
                    <Route path={`/app${routes.about.href}`} component={AboutPage} />
                    <Route path={`/app${routes.contact.href}`} component={ContactPage} />
                    <Route path={`/app${routes.faq.href}`} component={FAQPage} />
                    <Route path={`/app${routes.terms.href}`} component={TermsPage} />
                    <Route path={`/app${routes.privacy.href}`} component={PrivacyPolicy} />
                    <Route path={`/app${routes.logout.href}`} component={LogoutPage} />
                    <Route path={`/app${routes.myProfile.href}`} component={MyProfilePage} />
                    <Route path={`/app${routes.myFriends.href}`} component={MyFriends} />
                    <Route path={`/app${routes.myGroups.href}`} component={MyGroups} />
                    <Route path={`/app${routes.myParties.href}`} component={MyParties} />
                    <Route path={`/app${routes.createParty.href}`} component={AddParty} />
                    <Route path={`/app${routes.myAccount.href}`} component={MyAccountPage} />
                    <Route path={`/app${routes.deleteAccount.href}`} component={DeleteAccount} />
                    <Route path={`/app${routes.deactivateAccount.href}`} component={DeactivateAccount} />
                    <Route path={`/app${routes.myPrivacy.href}`} component={MyPrivacyPage} />
                    <Route path={`/app${routes.search.href}/:sentence?`} component={SearchPage} />
                    <Route path={`/app${routes.people.href}/:id`} component={UserProfilePage} />
                    <Route path={`/app${routes.socialNet.href}`} component={SocialNetPage} />
                    <Route path={`/app${routes.invite.href}`} component={InvitePage} />
                    <Route path={`/app${routes.global.href}`} component={GlobalPage} />
                    <Route path="/app/*" component={NotFoundPage} />
                    <Redirect path='/app' to='/app/home' />
                </Switch>
            </main>
            <Footer />
        </div>
    );
};

export default LoggedInRoutes;

/* <Route exact path="/app/settings" component={SettingsPage}></Route>
      <Route exact path="/app/add" component={AddEntryPage}></Route>
      <Route exact path="/app/add/:type" component={AddEntryPage}></Route>
      <Route exact path="/app/edit/:type/:id" component={AddEntryPage}></Route>
      <Route exact path="/app/change-password" component={ChangePasswordPage}></Route>
      <Route exact path="/app/change-email" component={ChangeEmailPage}></Route>
      <Route exact path="/app/change-username" component={ChangeUsernamePage}></Route>
      <Route exact path="/app/change-photo" component={ChangeUserPhoto}></Route>
      <Route exact path="/app/view/:type/:id" component={ViewEntryPage}></Route> */
