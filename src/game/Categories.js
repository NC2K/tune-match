import React, { Component } from 'react';
import { categories } from '../data/data.js';
import { makeQueryList } from '../utils/utils';
import './Categories.css';

export default class InitPage extends Component {
  state = {
    catCount: 0,
    endButton: false,
    cat: '',
    songs: []
  }

  handleSwitch = () => {
    const { catCount } = this.state;
    if (catCount > 0)
      this.setState({ endButton: !this.state.endButton });
  }

  onValueChange = e => {
    this.setState({ cat: e.target.value });
  }

  handleSubmit = e => {
    try {
      e.preventDefault();
      const { cat, songs } = this.state;
      const { history, error } = this.props;
      this.state.catCount++;

      const catQueryList = makeQueryList(categories[cat].songs);

      const stringyCat = JSON.stringify(catQueryList);
      localStorage.setItem('SONGS', stringyCat);
      

      console.log('QUERY LIST:', songs);
    

      history.push('/songpage');

    }
    catch (err) {
      this.setState({ error: err.error });
    }
  }

  render() {
    const { endButton, cat } = this.state;

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
