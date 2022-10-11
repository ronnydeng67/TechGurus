import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './component/LoginFormPage/LoginFormPage';
import Header from './component/Header/Header';
import SignUpFormPage from './component/SignupFormPage/SignUpFormPage';
import HomeHeader from './component/HomeHeader/HomeHeader';

function App() {
  return (
    <>
        <Switch>
          <Route exact path="/">
            <HomeHeader />
          </Route>
          <Route path='/login'>
            <Header />
            <LoginFormPage />
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
