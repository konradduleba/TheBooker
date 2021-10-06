import MyProfile from 'Components/User/Pages/MyProfile/MyProfile';
import NewProfilePicture from 'Components/User/Pages/NewProfilePicture';
import About from 'Pages/About/About';
import ContactPage from 'Pages/Contact/ContactPage';
import FAQPage from 'Pages/FAQ/FAQPage';
import NotFoundPage from 'Pages/NotFound/NotFoundPage';
import TermsPage from 'Pages/Terms/TermsPage';
import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Banner from '../Components/Global/Banner/Banner';
import Footer from '../Components/Global/Footer/Footer';
import GroupProfile from '../Components/Global/GroupProfile/GroupProfile';
import QuickMenu from '../Components/User/Global/QuickMenu/QuickMenu';
import QuickSearch from '../Components/User/Global/QuickSearch/QuickSearch';
import CreateGroup from '../Components/User/Pages/CreateGroup/CreateGroup';
import CreateGroupPostPage from '../Components/User/Pages/CreateGroupPost/CreateGroupPost';
import AddPartyComponent from '../Components/User/Pages/CreateParty/CreateParty';
import DeactivateAccount from '../Components/User/Pages/DeactivateAccount/DeactivateAccount';
import DeleteAccount from '../Components/User/Pages/DeleteAccount/DeleteAccount';
import EditMyProfilePage from '../Components/User/Pages/EditMyProfile/EditMyProfile';
import GlobalPage from '../Components/User/Pages/Global/Global';
import GroupPreferencesPage from '../Components/User/Pages/GroupPreferences/GroupPreferences';
import InvitePage from '../Components/User/Pages/Invite/Invite';
import LeaveGroupPage from '../Components/User/Pages/LeaveGroup/LeaveGroup';
import LogoutPage from '../Components/User/Pages/Logout/Logout';
import MyAccountPage from '../Components/User/Pages/MyAccount/MyAccount';
import MyFriends from '../Components/User/Pages/MyFriends/MyFriends';
import MyGroupsPage from '../Components/User/Pages/MyGroups/MyGroups';
import MyParties from '../Components/User/Pages/MyParties/MyParties';
import MyPrivacyPage from '../Components/User/Pages/MyPrivacy/MyPrivacy';
import SearchPage from '../Components/User/Pages/Search/Search';
import SocialNetPage from '../Components/User/Pages/SocialNet/SocialNet';
import UserProfilePage from '../Components/User/Pages/UserProfile/UserProfile';
import { UserData } from '../Contexts/UserDataContext/UserData';
import PrivacyPolicy from '../Pages/PrivacyPolicy/PrivacyPolicy';
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
                    <Route path={`/app${routes.about.href}`} component={About} />
                    <Route path={`/app${routes.contact.href}`} component={ContactPage} />
                    <Route path={`/app${routes.faq.href}`} component={FAQPage} />
                    <Route path={`/app${routes.terms.href}`} component={TermsPage} />
                    <Route path={`/app${routes.privacy.href}`} component={PrivacyPolicy} />
                    <Route path={`/app${routes.logout.href}`} component={LogoutPage} />
                    <Route path={`/app${routes.myProfile.href}`} component={MyProfile} />
                    <Route path={`/app${routes.profilePicture.href}`} component={NewProfilePicture} />
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
                    <Route path={`/app${routes.search.href}/:type?/:query?`} component={SearchPage} />
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
