import React, { Component } from 'react';
import { getScores } from '../utils/server-utils';

import './LeaderboardPage.css';

export default class LeaderboardPage extends Component {
  state = {
    scores: []
  }

  async componentDidMount() {
    //hit the db to get user scores by userId
    const scores = await getScores();
    this.setState({ scores: scores });
  }

  render() {
    const { scores } = this.state;
    //map through the results to print
    return (
      <div className="LeaderboardPage">
        {scores.map(item => (
          <div>
            <div className="cat1">Category: {item.cat1}</div>
            <div className="total">Score: {item.total}</div>
          </div>
        ))}
      </div>
    );
  }
}
