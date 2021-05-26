import React, { Component } from 'react';

import { getPlaylist } from '../utils/server-utils';
import './SongPage.css';


export default class SongPage extends Component {
  state = {
    songs: ['Rudolph,+The+Red-nosed+Reindeer+Gene+Autry',
      'I+Can+Dream,+Can\'t+I+The+Andrew+Sisters',
      'Music!+Music!+Music!+Teresa+Brewer',
      'Mona+Lisa+Nat+King+Cole',
      'Harbor+Lights+Sammy+Kaye',
      'Mr.+Sandman+The+Chordettes',
      'Heartbreak+Hotel+Elvis+Presley',
      'Tequila+The+Champs',
      'Witch+Doctor+David+Seville',
      'The+Purple+People+Eater+Sheb+Wooley'],
    fetchedSongArray: []
  }

  async componentDidMount() {
    const playlist = await getPlaylist(this.state.songs);
    this.setState({ fetchedSongArray: playlist });
  }

  handleSubmit = async e => {
    const { isSignUp } = this.state;
    const { onUser, history } = this.props;

    e.preventDefault();
  }

  handleClick = () => {
    if (this.props.key !== 0) {
      const liStyle = {
        display: 'none'
      };
    }
  }

  render() {
    console.log('fetched song array', this.state.fetchedSongArray);
    const { fetchedSongArray } = this.state;
    return (
      <div>
        {/* This plays our song */}
        <figure>
          <figcaption>What is that song?</figcaption>
          <ul>
            {fetchedSongArray.map(song => (
              <form className="songList" onSubmit={this.handleSubmit}>
                <li key={song}>
                  <audio
                    controls
                    src={song.song}>
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                  <button className="checkAnswer" type="button" onClick={this.handleClick}>Submit</button>
                </li>
              </form>
            ))
            }
          </ul>

        </figure>
        {/* We need to listen for song onended.*/}
        {/* On onended, load the next song.*/}
      </div >
    );
  }

}
