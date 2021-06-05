import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() {
    let { isLoggedIn } = this.props;

    const links = isLoggedIn
      ?  <>
          <NavLink className='glow' to="categories">Play game</NavLink>
          <NavLink className='glow' to="resultspage">Collection</NavLink>
          <NavLink className='glow' to="leaderboard">Leaderboard</NavLink>
        </>
      :  <>
          <NavLink className='glow' to="/auth">Login/Sign Up</NavLink>
        </>;

    return (
      <header className="Header">

        <h1>Tune Match</h1>
        
        <nav>
          <NavLink className='glow' to="/">Home</NavLink>
          {links}
          <NavLink className='glow' to="aboutus">About Us</NavLink>
        </nav>

      </header>
    );
  }

}

export default Header;