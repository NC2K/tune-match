import React, { Component } from 'react';
import './GetScore.css';

export default class GetScore extends Component {
  state = {
    scoreTotal: 0
  }

  //get the points props from SongPage

  //this.setState({ scoreTotal: scoreTotal += 100 });

  render() {
    const { scoreTotal } = this.props;

    return (
      <div>
        <h2>Your Score</h2>
        <span>{scoreTotal}</span>
      </div>
    );
  }
}
