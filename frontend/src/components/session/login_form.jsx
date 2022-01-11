import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this)
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Home page
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/questions');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user)
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className='error-txt' key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  demoLogin(e){
    this.setState({
      email: "demo@test.com",
      password: "d3JH8569#"
    });
  }

  render() {
    return (
      <div className='signin-page-container'>
        <img className='signin-background' src="https://wallpaperaccess.com/full/4982.jpg" alt="" />
        <div className="session-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="session-form">
              <h1>
                  <p className='form-header'>GroupThink</p>
              </h1>
              <br/>
                <input 
                  className='session-input'
                  type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                />
              <br/>
                <input 
                  className='session-input'
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />
              <br/>
              <div className="errors">{this.renderErrors()}</div>
              <button className='submit-btn' type="submit">Continue</button>
              <br />
              <button 
                type="submit"
                className="demo-button"
                onClick={this.demoLogin}
              >Demo User</button>
              <br />
              <Link className='link-to-signup' to={'/signup'}>Sign Up</Link>
              <br />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);