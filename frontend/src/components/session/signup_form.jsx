import React from 'react';
import { withRouter } from 'react-router-dom';
import './session.css'
import { Link } from 'react-router-dom'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      job: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      job: this.state.job,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="session-form">
            <h1>
              <span className="italics">group</span>
              <span className="bold">Think</span>
            </h1>
            <h2>Sign up</h2>
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="text"
                value={this.state.handle}
                onChange={this.update('username')}
                placeholder="Handle"
              />
            <br/>
              <select name="Job" onChange={this.update('job')} defaultValue="">
                <option value="">Job (optional)</option>
                <option value="engineering">Engineering</option>
                <option value="programmering">Programming</option>
                <option value="health-science">Health Science</option>
                <option value="business">Business</option>
                <option value="construction">Construction</option>
                <option value="food-service">Food Service</option>
                <option value="deisgn">Design</option>
                <option value="law">Law</option>
                <option value="teaching">Teaching</option>
              </select>
            <br/>            
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <br/>
            <button type="submit">Submit</button>
            {this.renderErrors()}
            <Link to={'/login'}>Login</Link>
            <br />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);