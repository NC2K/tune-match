import React, { Component } from 'react';
import SongResultsLi from './SongResultsLi';
import './SongResultsUl.css';

export default class SongResultsUl extends Component {
  render() {
    const songs = this.props.fetchedSongArray; //grabbing from local storage instead?

    return (
      <ul className="SongList">
        {songs.map(song => (
          <SongResultsLi key={song.title} song={song} />
        ))}
      </ul>
    );
  }
}
