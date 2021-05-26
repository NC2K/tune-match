import React, { Component } from 'react';
import Timer from '../timer/Timer';

import { getSong } from '../utils/server-utils';
import './SongPage.css';


export default class SongPage extends Component {
  state = {
    songs: [],
    fetchedSong: null,
    counter: 0,
    userInput: '',
    score: 0

  }

  async componentDidMount() {


    const parsedSongs = JSON.parse(localStorage.getItem('SONGS'));
    this.setState({ songs: parsedSongs });
    // console.log(this.state.songs);   
    // setTimeout(async() => {  
    const currentSong = await getSong(this.state.songs, this.state.counter);
    this.setState({ fetchedSong: currentSong });
    // }, 2000);
  }

  handleClick = async () => {
    this.state.counter++;
    const nextSong = await getSong(this.state.songs, this.state.counter);
    this.setState({ fetchedSong: nextSong });
  };

  handleChange = ({ target }) => {
    this.setState({ userInput: target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { userInput, fetchedSong, score } = this.state; 
    if (userInput === fetchedSong[0].title) {
      
      this.setState({ score: score + 100 });
      console.log('Score', score);
      this.handleClick();
    } else {
      console.log('WROOONNNGG');
    }
    this.setState({ });
  }

  render() {

    const { fetchedSong, counter, songs, userInput } = this.state;
    // console.log('songs', songs);
    // console.log('user', userInput);
    // console.log('counter', counter);
    return (
      <div>

        {/* This plays our song */}
        <figure>
          <figcaption>What is that song?</figcaption>

          {fetchedSong &&
            <audio
              controls
              src={fetchedSong[0].song}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>

          }

        </figure>
        {/* We need to listen for song onended.*/}
        {/* On onended, load the next song.*/}
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}/>
          <button>Guess</button>
        </form>
        <button onClick={this.handleClick}>Skip It</button>
        <Timer></Timer>
      </div >
    );
  }

}
