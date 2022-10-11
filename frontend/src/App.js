import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './component/LoginFormPage/LoginFormPage';
import SignUpFormPage from './component/SignupFormPage/SignUpFormPage';

function App() {
  return (
    <Switch>
      <Route path='/login'>
        <LoginFormPage />
      </Route>
      <Route path='/signup'>
        <SignUpFormPage/>
      </Route>
    </Switch>
  );
}

export default App;
