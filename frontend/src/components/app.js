import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { Route } from "react-router";

import SplashPageContainer from './splash_page/splash_container'
import MainPageContainer from './main/main_page_container';
import QuestionIndexContainer from './questions/question_index_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import AnswerLogic from './answering_page/answer_logic';
// import NavBarContainer from './nav/navbar_container';

const App = () => (
  <div>
    <Switch>
        <ProtectedRoute exact path='/index' component={QuestionIndexContainer} />
        <ProtectedRoute exact path="/" component={MainPageContainer} />
        <ProtectedRoute exact path="/answers" component={AnswerLogic}/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/splash" component={SplashPageContainer} />
    </Switch>
  </div>
);

export default App;