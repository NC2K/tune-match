import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  state = {
    isLoggedIn: false
  }


  componentDidMount() {
    let isLoggedIn = window.localStorage.getItem('USER_ID') ? true : false;
    this.setState({ isLoggedIn });
  }


  render() {
    let { isLoggedIn } = this.state;

    let display = '';

    if (isLoggedIn) {
      display = <Link to='/categories'>Play the game!</Link>;
    } else {
      display = <Link to='/auth'>Sign in to Play</Link>;
    }
    return (
      <div className="Home">
        <h2 className="glow">Tune Match</h2>

        <p>{display}</p>
      </div>
    );
  }

}