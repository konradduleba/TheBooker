import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { UserData } from '../Authentication/UserDataContext';
import BannerComponent from '../Components/BannerComponent/BannerComponent';
import FooterComponent from '../Components/FooterComponent/FooterComponent';

const LoggedInRoutes = (): JSX.Element => {
    const { userData } = useContext(UserData);

    if (!userData?.isLoggedIn) return <Redirect to="/welcome" />

    return (
        <div className="main-page-wrapper">
            <BannerComponent />
            <main>
                <Switch>
                    <Route exact path="/app/home"><h1>Hello</h1></Route>
                    <Route path="/app/*" component={() => <>404</>} />
                    <Redirect path='/app' to='/app/home' />
                </Switch>
            </main>
            <FooterComponent />
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
