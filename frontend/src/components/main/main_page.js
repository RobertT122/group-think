import React from 'react';
import UserProfileContainer from '../profile/user_profile_container';
import QuestionIndexContainer from '../questions/question_index_container';
import RightContainer from '../right/right_container';
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
      return <img className='main-page-photo' src="https://wallpaperaccess.com/full/4671265.jpg" alt="" />
    } else if (background === 3) {
      return <img className='main-page-photo' src="https://cdn.wallpapersafari.com/12/21/THZVnD.jpg" alt="" />
    } else {
      return <img className='main-page-photo' src="https://wallpaperaccess.com/full/2416049.jpg" alt="" />
    }
  }

  render() {
    return (
      <div className='main-page-container'>
        
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