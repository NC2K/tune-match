import React, { Component } from 'react';

import { getSong } from '../utils/server-utils';
import './SongPage.css';


export default class SongPage extends Component {
  state = {
    songs: [
      'Rudolph,+The+Red-nosed+Reindeer+Gene+Autry',
      'The+Chipmunk+Song+The+Chipmunks+with+David+Seville',
      'Venus+Frankie+Avalon'
    ],
    fetchedSongArray: {},
    round: 0,
    counter: 0
  }

  async componentDidMount() {
    const playlist = await getSong(this.state.songs, this.state.counter);
    this.setState({ fetchedSongArray: playlist });
  }

  handleClick = async () => {
    this.state.counter++;
    const playlist = await getSong(this.state.songs, this.state.counter);
    this.setState({ fetchedSongArray: playlist });
  };  


  render() {
    
    const { fetchedSongArray, counter } = this.state;
    console.log('looke here', fetchedSongArray[counter]);
    return (
      <div>
        {/* This plays our song */}
        <figure>
          <figcaption>What is that song?</figcaption>
        
           
          <audio
            controls
            src={fetchedSongArray[0]?.song}>
              Your browser does not support the
            <code>audio</code> element.
          </audio>
          
        </figure>
        {/* We need to listen for song onended.*/}
        {/* On onended, load the next song.*/}
        <button onClick={this.handleClick}>GO AWAY</button>
      </div >
    );
  }

}
