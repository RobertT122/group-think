import React from 'react';
import './navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.renderNav = this.renderNav.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <button className='logout-btn' onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return null;
      }
  }

  renderNav() {
    if (this.props.loggedIn) {
      return <div className='header-nav'>{this.getLinks()}</div>
    } else {
      return null
    }
  }

  render() {
      return(
        this.renderNav()
      )
  }
}

export default NavBar;