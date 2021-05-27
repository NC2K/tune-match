import React, { Component } from 'react';
import './SongResultsLi.css';

export default class SongResultsLi extends Component {

  render() {
    const { song } = this.props; //this probably from local storage instead

    return (
      <li className="SongResultsLi">
        <h3>{song.title}</h3>
        <h5>{song.artist}</h5>
        <img src={song.albumArt} alt={song.title} />
      </li>
    );
  }
}
