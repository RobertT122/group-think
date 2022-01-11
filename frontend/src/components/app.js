import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import SplashPageContainer from './splash_page/splash_container';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import QuestionIndexContainer from './questions/question_index_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import AnswerLogic from './answering_page/answer_logic';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <ProtectedRoute exact path='/index' component={QuestionIndexContainer} />
        <ProtectedRoute exact path="/" component={MainPage} />
        <ProtectedRoute exact path="/answers" component={AnswerLogic}/>
        <Route exact path="/splash" component={SplashPageContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;