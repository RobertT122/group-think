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
  }

  handleChange(background) {
    return e => {
      e.preventDefault()
      this.props.changeBackground(background)
      this.setState({ show: false})
    }
  }

  toggleDropdown() {
    this.setState({
      show: true
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
      return <img className='main-page-photo' src="https://i.pinimg.com/originals/26/6f/17/266f1731e0b4060fea5265efe6fa6d55.jpg" alt="" />
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.background !== this.props.background) {
  //     const bool = this.state.rerender
  //     this.setState({
  //       rerender: !bool
  //     })
  //   }
  // }

  render() {
    return (
      <div className='main-page-container'>
        <div className='theme-btn-container'>
          <button className='theme-btn'>Theme</button>
          <div className={this.state.show ? `theme-btn-container-show`: "theme-btn-container-hide" }>
            <button onClick={this.handleChange(1)}>1</button>
            <button onClick={this.handleChange(2)}>2</button>
            <button onClick={this.handleChange(3)}>3</button>
            <button onClick={this.handleChange(4)}>4</button>
          </div>
        </div>
        <div className='background-photo'>
          {this.renderBackground()}
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