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
  componentDidMount = () => {
    const [fetchedSongArray] = JSON.parse(localStorage.getItem('SONGSDATA'));
    
    this.setState({fetchedSongArray: [fetchedSongArray].flat()})
    console.log(fetchedSongArray);
  }

  render() {
    const {fetchedSongArray} = this.state;
    return (
      <div className="ResultsPage">
        <SongResultsUl fetchedSongArray={fetchedSongArray} />
      </div>
    );
  }
}
