import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import LoginFormPage from './component/LoginFormPage/LoginFormPage';
import Header from './component/Header/Header';
import SignUpFormPage from './component/SignupFormPage/SignUpFormPage';
import HomeHeader from './component/HomeHeader/HomeHeader';
import Splash from './component/Splash/Splash';
import ItemShowPage from './component/ItemShowPage/ItemShowPage';

function App() {
  const signup = useRouteMatch("/signup");
  const login = useRouteMatch("/login");

  return (
    <>
        {(!signup && !login) && <HomeHeader /> }
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route path='/login'>
            <Header />
            <LoginFormPage />
          </Route>
          <Route path='/items/:itemId'>
            <ItemShowPage />
          </Route>
          <Route path='/signup'>
            <Header />
            <SignUpFormPage/>
          </Route>
        </Switch>
    </>
  );
}

export default App;
