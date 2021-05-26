import React, { Component } from 'react';
import SongResultsUl from './SongResultsUl';

export default class ResultsPage extends Component {
  state = {
    fetchedSongArray: [{
      title: 'Rudolph',
      artist: 'Santa',
      song: 'rudolphurl url',
      albumArt: 'rudolph art',
      genre: 'xmas'
    },
    {
      title: 'Rudolph2',
      artist: 'Santa2',
      song: 'Num2rudolphurl',
      albumArt: 'rudolph art2',
      genre: 'xmas2'
    },
    ]
  }

  render() {
    return (
      <div className="ResultsPage">
        <SongResultsUl fetchedSongArray={this.state.fetchedSongArray} />
      </div>
    );
  }
}
