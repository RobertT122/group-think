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

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return null;
      }
  }

  render() {
      return (
        <div>
            <div className='logo-container'>
              <h1>GroupThink</h1>
            </div>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;