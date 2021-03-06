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
        <div className="homeWrapper">
          <span>T</span>
          <span>U</span>
          <span>N</span>
          <span>E</span>
          <span>M</span>
          <span>A</span>
          <span>T</span>
          <span>C</span>
          <span>H</span>
        </div>

        <p>{display}</p>
      </div>
    );
  }

}