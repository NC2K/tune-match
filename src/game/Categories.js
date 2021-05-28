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
      this.setState.catCount++;

      const catQueryList = makeQueryList(categories[cat].songs);

      const stringyQueryList = JSON.stringify(catQueryList);
      localStorage.setItem('SONGS', stringyQueryList);

      const stringyCat = JSON.stringify(categories[cat].category);
      localStorage.setItem('CATEGORY', stringyCat);

      const score = {
        cat1: categories[cat].category,
        total: 0,
        uName: this.props.uName
      };

      localStorage.removeItem('SONGSDATA');

      const gameInstance = await postScores(score);

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
          <p>Think you have an ear for music?  Answer 10 questions based on the tunes provided. <br/> Name the tune within 15 seconds and walk away with 100 points.  Be careful not to run out of time!</p>
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
