import React from 'react';
import './navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className='header-nav'>
                <button className='logout-btn' onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return null;
      }
  }

  render() {
      return(
        this.getLinks()
      )
  }
}

export default NavBar;