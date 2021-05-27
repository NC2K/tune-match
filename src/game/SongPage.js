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
    score: 0,

    startTime: null,
    allowedTime: 15,
    interval: 0,
    timeRemaining: -1
  }

  async componentDidMount() {
    const parsedSongs = JSON.parse(localStorage.getItem('SONGS'));
    this.setState({ songs: parsedSongs });

    const currentSong = await getSong(this.state.songs, this.state.counter);
    this.setState({ fetchedSong: currentSong }, () => this.handleClick());
  }

  startTimer() {
    const { allowedTime } = this.state;
    const interval = setInterval(() => {
      const elapsedTime = new Date() - this.state.startTime;
      const timeRemaining = Math.round(((allowedTime * 1000) - elapsedTime) / 1000);
      this.setState({ timeRemaining });
      if (timeRemaining <= 0) {
        this.stopTimer();
        alert('Out of Time!');
      }
    }, 1000);
    this.setState({ interval, startTime: new Date(), timeRemaining: allowedTime });
  }

  stopTimer() {
    clearInterval(this.state.interval);
    this.setState({ interval: 0, startTime: null, timeRemaining: -1 });
  }

  handlePlay = () => {
    this.startTimer();
  };

  handleClick = async () => {
    const { counter } = this.state;
    const { history } = this.props;

    if (counter < 9) {
      this.state.counter++;
      const nextSong = await getSong(this.state.songs, this.state.counter);
      addSongToStorage(nextSong);

      this.stopTimer();

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

    const { fetchedSong, counter, timeRemaining } = this.state;

    return (
      <div>
        <div>Question {counter + 1}/10</div>
        {/* This plays our song */}
        <figure>
          <figcaption>What is that song?</figcaption>

          {fetchedSong &&
            <audio
              controls
              onPlay={this.handlePlay}
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
        <div>Time Remaining: {timeRemaining === -1 || timeRemaining}</div>
        <button onClick={this.handleClick}>Skip It</button>
      </div >
    );
  }

}
