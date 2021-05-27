import React, { Component } from 'react';

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
    volume: .3,

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

    this.player.volume = 0.2;
  }

  startTimer() {
    const { allowedTime } = this.state;
    const interval = setInterval(() => {
      const elapsedTime = new Date() - this.state.startTime;
      const timeRemaining = Math.round(((allowedTime * 1000) - elapsedTime) / 1000);
      this.setState({ timeRemaining }, () => {
        if (timeRemaining < 0) {
          this.stopTimer();
          alert('Out of Time!');
          this.handleClick();
        }
      });

    }, 1000);
    this.setState({ interval, startTime: new Date(), timeRemaining: allowedTime });
  }

  stopTimer() {
    clearInterval(this.state.interval);
    this.setState({ interval: 0, startTime: null, timeRemaining: -1 });
  }

  handlePlay = () => {
    this.player.play();
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

  handleVolume = ({ target }) => {
    this.player.volume = Number(target.value);
    // this.setState({ volume: Number(target.value) });
  }

  render() {

    const { fetchedSong, counter, timeRemaining, volume } = this.state;

    return (
      <div className="SongPage color-backdrop">
        <div className="questionCounter">Question {counter + 1}/10</div>
        <div className="audioGroup">

          <p>What is that song?</p>

          {fetchedSong &&
            <audio
              volume={volume}
              ref={player => this.player = player}
              src={fetchedSong[0].song}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>

          }
          <button onClick={this.handlePlay}>Let's do this!</button>
          <div className="volume">
            <img src="volume-icon.png" alt="volume" />
            <input type="range" min="0" max="1" step="0.1" defaultValue="0.2" onChange={this.handleVolume}></input>
          </div>
        </div>
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
