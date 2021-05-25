import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {

  render() {
    return (
      <div className="Home">
        <h2>Can you name that song?</h2>

        <Link to='/auth'>Sign in to Play</Link>
      </div>
    );
  }

}