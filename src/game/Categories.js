import React, { Component } from 'react';

import { categories } from '../data/data.js';
import './Categories.css';

export default class InitPage extends Component {
  state = {
    catCount: 0,
    endButton: false
  }

  handleSwitch = () => {
    const { catCount } = this.state;
    if (catCount > 0)
      this.setState({ endButton: !this.state.endButton });
  }

  handleSubmit = async e => {
    const { catCount } = this.state;
    const { history, error } = this.props;

    e.preventDefault();

    try {

      history.push('/game');
    }
    catch (err) {
      this.setState({ error: err.error });
    }
  }

  render() {
    const { endButton } = this.state;

    return (
      <div>
        Welcome to the game setup page.
        <form className='selection-form'>
          <ul className='CategoryList'>
            {categories.map(category => (
              <li>
                <label>
                  {category.category}
                  <input type='radio' name='category' value={category.category} />
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
