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

  render() {
    console.log('fetched song array', this.state.fetchedSongArray);
    const { fetchedSongArray } = this.state;
    return (
      <div>
        {/* This plays our song */}
        <figure>
          <figcaption>What is that song?</figcaption>
          {fetchedSongArray.map(song => (
            <audio
              controls
              src={song.song}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>))
          }
        </figure>
        {/* We need to listen for song onended.*/}
        {/* On onended, load the next song.*/}
      </div >
    );
  }

}
