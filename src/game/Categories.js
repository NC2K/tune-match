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
        total: 0
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
      <div>
        Choose A Category!
        <form className='selection-form' onSubmit={this.handleSubmit}>
          <ul className='CategoryList'>
            {categories.map((category, i) => (
              <li>
                <label>
                  {category.category}
                  <input type='radio' name='category' value={i} onChange={this.onValueChange} />
                </label>
              </li>
            ))}
          </ul>
          <p>
            <button>Start</button>
          </p>
          {endButton && <p>
            <button type='button'>End Game</button>
          </p>}
        </form>
      </div>
    );
  }
}
