import React from 'react';
import UserProfileContainer from '../profile/user_profile_container';
import QuestionIndexContainer from '../questions/question_index_container';
import RightContainer from '../right/right_container';

import './main.css';

class MainPage extends React.Component {

  render() {
    return (
      <div className='main-page-container'>
        <div className='background-photo'>
          <img className='main-page-photo' src="https://i.pinimg.com/originals/25/c8/5a/25c85ad9cde83d7c0c5e347fea5c8789.jpg" alt="" />
        </div>
        <div className='profile-left'>
          <UserProfileContainer />
          <QuestionIndexContainer />
        </div>
        <div className='profile-right'>
          <RightContainer />
        </div>
      </div>
    );
  }
}

export default MainPage;