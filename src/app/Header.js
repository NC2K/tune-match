import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  state = {
    isLoggedIn: false
  }

  componentDidMount() {
    const isLoggedIn = window.localStorage.getItem('USER_ID') ? true : false;
    this.setState({ isLoggedIn });
  }

  render() {
    const { isLoggedIn } = this.state;

    let nav = '';

    if (isLoggedIn) {
      nav = <nav>
        <Link to="/">Home</Link>
        <Link to="categories">Play game</Link>
        <Link to="leaderboard">Leaderboard</Link>
        <Link to="aboutus">About Us</Link>
      </nav>;
    } else {
      nav =
        <nav>
          <Link to="/">Home</Link>
          <Link to="/auth">Login/Sign Up</Link>
          <Link to="aboutus">About Us</Link>
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