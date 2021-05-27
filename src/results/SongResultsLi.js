import React, { Component } from 'react';
import './SongResultsLi.css';

export default class SongResultsLi extends Component {

  render() {
    const { song } = this.props; //this probably from local storage instead

    return (
      <li className="SongResultsLi">
        <div className="songInfo">
          <h3>{song.title}</h3>
          <h5>{song.artist}</h5>
        </div>
        <img src={song.albumArt} alt={song.title} />
        <audio
              controls
              src={song.song}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
      </li>
    );
  }
}
