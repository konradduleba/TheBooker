import React from 'react';
import { Route, Switch } from "react-router-dom";
import NotLoggedInRoutes from '../../Routes/NotLoggedInRoutes';
import LoggedInRoutes from '../../Routes/LoggedInRoutes';
import './MainPage.scss';

const App = (): JSX.Element => {

  return (
    <Switch>
      <Route path="/app" >
        <LoggedInRoutes />
      </Route>
      <NotLoggedInRoutes />
    </Switch>
  )
};
export default App;
