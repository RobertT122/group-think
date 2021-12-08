import React from 'react';
import UserProfileContainer from '../profile/user_profile_container';
import QuestionIndexContainer from '../questions/question_index_container';
import Right from '../right/right';
import './main.css';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <div className='profile-left'>
          <UserProfileContainer />
          <QuestionIndexContainer />
        </div>
      </div>
    );
  }
}

export default MainPage;