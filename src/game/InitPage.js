import React, { Component } from 'react';

import { categories } from '../data/categories.js';
import './InitPage.css';

export default class InitPage extends Component {
  render() {
    return (
      <div>
        Welcome to the game setup page.
        <ul className="CategoryList">
          {categories.map(category => (
            <li>{category}</li>
          ))}
        </ul>
      </div>
    );
  }
}
