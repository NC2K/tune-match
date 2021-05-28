import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  state = {
    isLoggedIn: false
  }

  componentDidMount() {
    let isLoggedIn = window.localStorage.getItem('USER_ID') ? true : false;
    this.setState({ isLoggedIn });
    this.forceUpdate();
  }

  render() {
    let { isLoggedIn } = this.state;

    let nav = '';

    if (isLoggedIn) {
      nav = 
      <nav>
        <NavLink className='glow' to="/">Home</NavLink>
        <NavLink className='glow' to="categories">Play game</NavLink>
        <NavLink className='glow' to="resultspage">Collection</NavLink>
        <NavLink className='glow' to="leaderboard">Leaderboard</NavLink>
        <NavLink className='glow' to="aboutus">About Us</NavLink>
      </nav>;
    } else {
      nav =
        <nav>
          <NavLink className='glow' to="/">Home</NavLink>
          <NavLink className='glow' to="/auth">Login/Sign Up</NavLink>
          <NavLink className='glow' to="aboutus">About Us</NavLink>
        </nav>;
    }

    return (
      <header className="Header">

        <h1>Tune Match</h1>
        <nav>{nav}</nav>
      </header>
    );
  }

}

export default Header;