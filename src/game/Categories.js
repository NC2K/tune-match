import React, { Component } from 'react';
import { categories } from '../data/data.js';
import { makeQueryList } from '../utils/utils';
import { postScores } from '../utils/server-utils';
import './Categories.css';

export default class InitPage extends Component {
  state = {
    catCount: 0,
    endButton: false,
    cat: '',
    songs: [],
    gameId: undefined
  }

  handleSwitch = () => {
    const { catCount } = this.state;
    if (catCount > 0)
      this.setState({ endButton: !this.state.endButton });
  }

  onValueChange = e => {
    this.setState({ cat: e.target.value });
  }

  handleSubmit = async e => {
    try {
      e.preventDefault();
      const { cat } = this.state;
      const { history } = this.props;

      //if additional rounds are included, cat count would allow for a maximum of rounds
      this.setState.catCount++;

      //grab list of search queries based on category selected
      const catQueryList = makeQueryList(categories[cat].songs);

      //push song information into local storage
      const stringyQueryList = JSON.stringify(catQueryList);
      localStorage.setItem('SONGS', stringyQueryList);

      const stringyCat = JSON.stringify(categories[cat].category);
      localStorage.setItem('CATEGORY', stringyCat);

      //intializes data to be pushed to score database
      const score = {
        cat1: categories[cat].category,
        total: 0,
        uName: this.props.uName
      };

      //if user replays game, clears song data from local storage
      localStorage.removeItem('SONGSDATA');

      //posts score to leaderboard based on game instance
      const gameInstance = await postScores(score);

      //pushes game id to local storage
      this.setState({ gameId: gameInstance.id });
      const stringyGameId = JSON.stringify(this.state.gameId);
      localStorage.setItem('GAMEID', stringyGameId);
      history.push('/songpage');
    }

    catch (err) {
      this.setState({ error: err.error });
    }
  }

  render() {
    const { endButton } = this.state;

    return (
      <div className='Categories'>
        <div className="catWrapper">
          <h2>Choose A Category!</h2>
          <p>Think you have an ear for music?  Answer 10 questions based on the tunes provided. <br /> Name the tune within 15 seconds and walk away with 100 points.  Be careful not to run out of time!</p>
          <form className='categoryForm' onSubmit={this.handleSubmit}>
            <ul className='categoryList'>
              {categories.map((category, i) => (
                <li>
                  <label>
                    <input type='radio' name='category' value={i} onChange={this.onValueChange} />
                    <div className="category">
                      {category.category}
                    </div>
                  </label>
                </li>
              ))}
            </ul>
            <button>Start</button>
            {endButton &&
              <button type='button'>End Game</button>}
          </form>
        </div>
      </div>
    );
  }
}
