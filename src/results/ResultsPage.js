import React, { Component } from 'react';
import SongResultsUl from './SongResultsUl';

export default class ResultsPage extends Component {
  state = {
    fetchedSongArray: [
    ]
  }

  componentDidMount = () => {
    const fetchedSongArray = JSON.parse(localStorage.getItem('SONGSDATA'));

    this.setState({ fetchedSongArray: fetchedSongArray.flat() });
  }

  render() {
    const { fetchedSongArray } = this.state;

    return (
      <div className="ResultsPage">
        <SongResultsUl fetchedSongArray={fetchedSongArray} />
      </div>
    );
  }
}
