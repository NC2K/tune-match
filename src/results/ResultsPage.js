import React, { Component } from 'react';
import SongResultsUl from './SongResultsUl';

export default class ResultsPage extends Component {
  state = {
    fetchedSongArray: [
    ]
  }

  componentDidMount = () => {
    const fetchedSongArray = JSON.parse(localStorage.getItem('SONGSDATA'));
    console.log(this.state.fetchedSongArray);
    this.setState({ fetchedSongArray: fetchedSongArray.flat() });
    console.log(fetchedSongArray);
  }

  render() {
    const { fetchedSongArray } = this.state;
    console.log(fetchedSongArray);
    return (
      <div className="ResultsPage">
        <SongResultsUl fetchedSongArray={fetchedSongArray} />
      </div>
    );
  }
}
