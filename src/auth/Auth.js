import React, { Component } from 'react';
import { logIn, signUp } from '../utils/server-utils.js';
import './Auth.css';

const AVATARS = [
  { image: '/wizard.png', name: 'Wizard' }, 
  { image: '/dog.png', name: 'Doggo' }, 
  { image: '/beans.png', name: 'Beans' }, 
  { image: '/robot.png', name: 'Robot' }, 
  { image: '/boombox.png', name: 'Boombox' }, 
  { image: '/monke.png', name: 'Ape' }, 
  { image: '/laptop.png', name: 'Laptop' }, 
]

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
      history.push('/categories');
    }
    catch (err) {
      this.setState({ error: err.error });
    }
  }

  render() {
    const { name, email, avatar, password, isSignUp, error } = this.state;

    

    return (
      <div className="Auth">
        <form className="form glow" onSubmit={this.handleSubmit}>
          {isSignUp && <p>
            <label>
              <div>Username:</div>
              <input name='name' value={name} required onChange={this.handleChange}/>
            </label>
          </p>}

          <p>
            <label>
              <div>Email:</div>
              <input name='email' value={email} required onChange={this.handleChange}/>
            </label>
          </p>

          {isSignUp && <p>
            <div>Select an Avatar:</div>
            <fieldset className='Avatar'> {/*Set avatar up like radio button or drop down menu */}
              {AVATARS.map(({ image, name }) => (
                <label>
                  <input type='radio' name='avatar' value={avatar} onChange={this.onValueChange}/>
                  <img src={image} alt={name}/>
                </label>
              ))}
            </fieldset>
          </p>}

          <p>
            <label>
              <div>Password:</div>
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
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    );
  }

}