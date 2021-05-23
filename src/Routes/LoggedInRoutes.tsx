import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Banner from '../Components/Global/Banner/Banner';
import Footer from '../Components/Global/Footer/Footer';
import GroupProfile from '../Components/Global/GroupProfile/GroupProfile';
import QuickMenu from '../Components/User/Global/QuickMenu/QuickMenu';
import QuickSearch from '../Components/User/Global/QuickSearch/QuickSearch';
import CreateGroup from '../Components/User/Pages/CreateGroup/CreateGroup';
import CreateGroupPostPage from '../Components/User/Pages/CreateGroupPostPage/CreateGroupPostPage';
import AddPartyComponent from '../Components/User/Pages/CreateParty/CreateParty';
import DeactivateAccount from '../Components/User/Pages/DeactivateAccount/DeactivateAccount';
import DeleteAccount from '../Components/User/Pages/DeleteAccount/DeleteAccount';
import EditMyProfilePage from '../Components/User/Pages/EditMyProfilePage/EditMyProfilePage';
import GlobalPage from '../Components/User/Pages/GlobalPage/GlobalPage';
import GroupPreferencesPage from '../Components/User/Pages/GroupPreferencesPage/GroupPreferencesPage';
import InvitePage from '../Components/User/Pages/InvitePage/InvitePage';
import LeaveGroupPage from '../Components/User/Pages/LeaveGroupPage/LeaveGroupPage';
import LogoutPage from '../Components/User/Pages/LogoutPage/LogoutPage';
import MyAccountPage from '../Components/User/Pages/MyAccountPage/MyAccountPage';
import MyFriends from '../Components/User/Pages/MyFriends/MyFriends';
import MyGroupsPage from '../Components/User/Pages/MyGroupsPage/MyGroupsPage';
import MyParties from '../Components/User/Pages/MyParties/MyParties';
import MyPrivacyPage from '../Components/User/Pages/MyPrivacyPage/MyPrivacyPage';
import MyProfilePage from '../Components/User/Pages/MyProfilePage/MyProfilePage';
import SearchPage from '../Components/User/Pages/SearchPage/SearchPage';
import SocialNetPage from '../Components/User/Pages/SocialNetPage/SocialNetPage';
import UserProfilePage from '../Components/User/Pages/UserProfilePage/UserProfilePage';
import { UserData } from '../Contexts/UserDataContext/UserData';
import AboutPage from '../Pages/AboutPage/AboutPage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import FAQPage from '../Pages/FAQPage/FAQPage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import PrivacyPolicy from '../Pages/PrivacyPolicy/PrivacyPolicy';
import TermsPage from '../Pages/TermsPage/TermsPage';
import routes from '../Routes/Utils/routes.json';

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
                    <Route path={`/app${routes.editProfile.href}`} component={EditMyProfilePage} />
                    <Route path={`/app${routes.myFriends.href}`} component={MyFriends} />
                    <Route path={`/app${routes.myGroups.href}`} component={MyGroupsPage} />
                    <Route path={`/app${routes.createGroup.href}`} component={CreateGroup} />
                    <Route path={`/app${routes.groupProfile.href}/:id`} component={GroupProfile} />
                    <Route path={`/app${routes.leaveGroup.href}/:id/:name`} component={LeaveGroupPage} />
                    <Route path={`/app${routes.groupPreferences.href}/:id`} component={GroupPreferencesPage} />
                    <Route path={`/app${routes.createGroupPost.href}/:id`} component={CreateGroupPostPage} />
                    <Route path={`/app${routes.myParties.href}`} component={MyParties} />
                    <Route path={`/app${routes.createParty.href}`} component={AddPartyComponent} />
                    <Route path={`/app${routes.myAccount.href}`} component={MyAccountPage} />
                    <Route path={`/app${routes.deleteAccount.href}`} component={DeleteAccount} />
                    <Route path={`/app${routes.deactivateAccount.href}`} component={DeactivateAccount} />
                    <Route path={`/app${routes.myPrivacy.href}`} component={MyPrivacyPage} />
                    <Route path={`/app${routes.search.href}/:type?/:sentence?`} component={SearchPage} />
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
