import { Component } from 'react';
import { logIn, signUp } from '../utils/server-utils.js';
import './Auth.css';

export default class Auth extends Component {
  state = {
    name: '',
    email: '',
    avatar: '',
    password: '',
    isSignUp: true,
    error: ''
  }

  // handles on change based on each input field
  handleChange = e => {
    const obj = {};

    obj[e.target.name] = e.target.value;
    this.setState(obj);
  }

  handleSwitch = () => {
    this.setState({ isSignUp: !this.state.isSignUp });
  }

  handleSubmit = async e => {
    const { isSignUp } = this.state;
    const { onUser, history } = this.props;

    e.preventDefault();

    try {
      const user = isSignUp ? (await signUp(this.state)) : (await logIn(this.state));
      onUser(user);
      history.push('/init');
    }
    catch (err) {
      this.setState({ error: err.error });
    }
  }

  render() {
    const { name, email, avatar, password, isSignUp, error } = this.state;

    return (
      <form className="Auth" onSubmit={this.handleSubmit}>
        {isSignUp && <p>
          <label>
            <span>Name</span>
            <input name='name' value={name} required onChange={this.handleChange} />
          </label>
        </p>}

        <p>
          <label>
            <span>email</span>
            <input name='email' value={email} required onChange={this.handleChange} />
          </label>
        </p>

        {isSignUp && <p>
          <label> {/*Set avatar up like radio button or drop down menu */}
            <span>avatar</span>
            <input name='avatar' value={avatar} required onChange={this.handleChange} />
          </label>
        </p>}

        <p>
          <label>
            <span>password</span>
            <input name='password' value={password} type='password' required onChange={this.handleChange} />
          </label>
        </p>

        <p>
          <button>{isSignUp ? 'Sign Up' : 'Log In'}</button>
        </p>

        <p>
          <button className='switch' type='button' onClick={this.handleSwitch}>
            {isSignUp ? 'Have an account? Log in here.' : 'Need an account? Create account here.'}
          </button>
        </p>
        {error && <p>{error}</p>}
      </form>
    );
  }

}