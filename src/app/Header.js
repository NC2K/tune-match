import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() {
    let { isLoggedIn } = this.props;

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