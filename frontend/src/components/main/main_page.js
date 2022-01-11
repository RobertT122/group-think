import React from 'react';
import UserProfileContainer from '../profile/user_profile_container';
import QuestionIndexContainer from '../questions/question_index_container';
import RightContainer from '../right/right_container';
import NavBarContainer from '../nav/navbar_container'
import './main.css';

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      rerender: false
    }
    this.renderBackground = this.renderBackground.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  handleChange(background) {
    return e => {
      e.preventDefault()
      this.props.changeBackground(background)
      this.setState({ show: false})
    }
  }

  toggleDropdown() {
    const bool = this.state.show
    this.setState({
      show: !bool
    })
  }

  renderBackground() {
    const { background } = this.props;

    if (background === 1) {
      return <img className='main-page-photo' src="https://i.pinimg.com/originals/25/c8/5a/25c85ad9cde83d7c0c5e347fea5c8789.jpg" alt="" />
    } else if (background === 2) {
      return <img className='main-page-photo' src="https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80" alt="" />
    } else if (background === 3) {
      return <img className='main-page-photo' src="https://images.unsplash.com/photo-1517315003714-a071486bd9ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" alt="" />
    } else if (background === 4) {
      return <img className='main-page-photo' src="https://images.unsplash.com/photo-1517639493569-5666a7b2f494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGFlc3RoZXRpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60" alt="" />
    } else {
      return <img className='main-page-photo' src="https://images.unsplash.com/photo-1621968859049-d09c5f0f86eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGFlc3RoZXRpY3xlbnwwfDB8MHx3aGl0ZXw%3D&auto=format&fit=crop&w=900&q=60" alt="" />
    }
  }

  render() {
    return (
      <div className='main-page-container'>
        <NavBarContainer />
        <div className='background-photo'>
          {this.renderBackground()}
        </div>
        <div className='profile-left'>
          <div className='theme-btn-container'>
            <button onClick={this.toggleDropdown} className='theme-btn'>Theme</button>
            <div className={this.state.show ? `theme-btn-container-show`: "theme-btn-container-hide" }>
              <button onClick={this.handleChange(1)}>1</button>
              <button onClick={this.handleChange(2)}>2</button>
              <button onClick={this.handleChange(3)}>3</button>
              <button onClick={this.handleChange(4)}>4</button>
              <button onClick={this.handleChange(5)}>5</button>
            </div>
          </div>
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