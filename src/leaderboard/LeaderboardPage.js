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
        <div className="scoresWrapper">
          
          <p>LeaderBoard</p>
          
          {/* This looks like an actual <table> */}
            
          <div className="resultsHeader">
            <div>Category:</div>
            <div>Player:</div>
            <div>Score:</div>
          </div>
          
          {scores.map(item => (
            <div className="resultsWrapper">
              <div className="cat1">{item.cat1}</div>
              <div className="userName">{item.uName}{item.avatar}</div>
              <div className="total">{item.total}</div>
            </div>
          ))}

        </div>
      </div>
    );
  }
}
