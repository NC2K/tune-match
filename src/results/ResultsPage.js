import React, { Component } from 'react';
import SongResultsUl from './SongResultsUl';
import './ResultsPage.css';

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
        <div className="resultsWrapper">
          <h1>Collection Last Played</h1>
          <SongResultsUl fetchedSongArray={fetchedSongArray} />
        </div>
      </div>
    );
  }
}
