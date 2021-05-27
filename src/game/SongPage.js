import React, { Component } from 'react';
import Timer from '../timer/Timer';

import { getSong, putScores } from '../utils/server-utils';
import { addSongToStorage } from '../utils/utils';
import './SongPage.css';


export default class SongPage extends Component {
  state = {
    songs: [],
    fetchedSong: null,
    counter: -1,
    userInput: '',
    score: 0
  }

  async componentDidMount() {
    const parsedSongs = JSON.parse(localStorage.getItem('SONGS'));
    this.setState({ songs: parsedSongs });

    const currentSong = await getSong(this.state.songs, this.state.counter);
    this.setState({ fetchedSong: currentSong }, () => this.handleClick());
  }

  handleClick = async () => {
    const { counter } = this.state;
    const { history } = this.props;

    if (counter < 10) {
      this.state.counter++;
      const nextSong = await getSong(this.state.songs, this.state.counter);
      addSongToStorage(nextSong);

      this.setState({ fetchedSong: nextSong });
    } else {
      
      // putScores(score);
      history.push('/resultspage');
    }
  };

  handleChange = ({ target }) => {
    this.setState({ userInput: target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { userInput, fetchedSong, score } = this.state;

    if (userInput === fetchedSong[0].title) {
      let points = score + 100;
      this.setState({ score: points });
      
      putScores(points);
      
      this.handleClick();

    } else {
      console.log('WROOONNNGG');
    }
    this.setState({});
  }

  render() {

    const { fetchedSong, counter } = this.state;

    return (
      <div>
        <div>Question {counter + 1}/10</div>
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
          <input onChange={this.handleChange} />
          <button>Guess</button>
        </form>
        <button onClick={this.handleClick}>Skip It</button>
        <Timer></Timer>
      </div >
    );
  }

}
