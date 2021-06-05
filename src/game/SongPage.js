import React, { Component } from 'react';

import { getSong, putScores } from '../utils/server-utils';
import { addSongToStorage, checkAnswer } from '../utils/utils';
import './SongPage.css';


export default class SongPage extends Component {
  state = {
    songs: [],
    fetchedSong: null,
    counter: -1,
    userInput: '',
    score: 0,
    volume: .3,
    feedback: '',
    //timer state
    startTime: null,
    allowedTime: 15,
    interval: 0,
    timeRemaining: -1,
  }
  //grabs song queries from local storage for use with api
  async componentDidMount() {
    const parsedSongs = JSON.parse(localStorage.getItem('SONGS'));
    this.setState({ songs: parsedSongs });

    // isn't counter going to be -1 ????
    // doesn't another song get fetched in handleClick???
    // const currentSong = await getSong(this.state.songs[this.state.counter]);
    // this.setState({ fetchedSong: currentSong }, () => this.handleClick());
    this.handleClick();

    this.player.volume = 0.2;
  }
  //Timer Function
  startTimer() {
    const { allowedTime } = this.state;

    //set interval creates the timer
    const interval = setInterval(() => {

      //takes in current date/time and subtracts start time
      const elapsedTime = new Date() - this.state.startTime;
      //converts allowed time into milliseconds, then subtracts elapsed time
      const timeRemaining = Math.round(((allowedTime * 1000) - elapsedTime) / 1000);

      //places time in state
      this.setState({ timeRemaining }, () => {
      //timer end logic
        if (timeRemaining < 0) {
          this.stopTimer();
          alert('Out of Time!');
          this.handleClick();
        }
      });

    }, 1000);
    //places time into state
    this.setState({ interval, startTime: new Date(), timeRemaining: allowedTime });
  }

  stopTimer() {
    clearInterval(this.state.interval);
    this.setState({ interval: 0, startTime: null, timeRemaining: -1 });
  }
  //starts song and timer upon button click
  handlePlay = () => {
    this.player.play();
    this.startTimer();
  };

  handleClick = async () => {
    const { counter } = this.state;
    const { history } = this.props;

    // no, don't do this. you can't make those kind of assumptions.
    // what if another form gets added to the page?
    // also, you know what form you want, so why go fishing in the whole document for it?
    // You could do the same thing as audio with a ref={node => this.form = form}
    // but better choice is to manage the state
    // const form = document.getElementById('form');
    
    if (counter < 9) {
      //increments question number, 
      this.state.counter++;
      //grabs song from api, pushes to local storage
      
      const nextSong = await getSong(this.state.songs[this.state.counter]);
      addSongToStorage(nextSong);
      
      this.stopTimer();

      this.setState({ fetchedSong: nextSong });
    } else {
      
      // putScores(score);
      history.push('/resultspage');
    }
    this.setState({});
    //clears input field
    form.reset();
  };

  //stores user input in state
  handleChange = ({ target }) => {
    this.setState({ userInput: target.value });
  }

  //question guessing logic
  handleSubmit = e => {
    e.preventDefault();
    const { userInput, fetchedSong, score } = this.state;
    const form = document.getElementById('form');

    if (checkAnswer(userInput, fetchedSong[0].title)) {
      let points = score + 100;
      this.setState({ score: points, feedback: 'Correct!' });
      
      putScores(points);
      
      this.handleClick();
    
    
    } else {
      this.setState({ feedback: 'Incorrect!' });
    }
    // this doesn't do anything as there are no keys specified,
    // you need to reset explicitly
    this.setState({
      userInput: '',
      // whatever else needs to be reset
    });
    // form.reset();
  }

  handleVolume = ({ target }) => {
    this.player.volume = Number(target.value);
    // this.setState({ volume: Number(target.value) });
  }

  render() {

    const { userInput, fetchedSong, counter, timeRemaining, volume, score, feedback } = this.state;

    return (
      <div className="SongPage">
        <div className="gameWrapper">
          <img className="stereo-handle" src="stereo-handle.png" alt="stereo handle"/>
          <div className="stereo-base color-backdrop">
            <section className="Score">
              <div>
                <div>Score:</div>
                { score }
              </div>

            </section>

            <section className="SongGame">
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

                <button onClick={this.handlePlay}>Start Song!</button>
          

                <div className="volume">
                  <img src="volume-icon.png" alt="volume" />
                  <input type="range" min="0" max="1" step="0.1" defaultValue="0.2" onChange={this.handleVolume}></input>
                </div>
              </div>
              {/* We need to listen for song onended.*/}
              {/* On onended, load the next song.*/}
              <form className="userInput" onSubmit={this.handleSubmit} id="form">
                <input value={userInput} onChange={this.handleChange} placeholder="Name the Tune" />
                <button className="guessButton">Guess</button>
              </form>

              <p className="timer">Time Remaining: {timeRemaining === -1 || timeRemaining}</p>
              <button onClick={this.handleClick}>Skip It</button>
            
            </section>

            <section className="RightOrWrong">
              <div>
                {feedback}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

}
