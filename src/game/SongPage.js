import React, { Component } from 'react';
import './SongPage.css';


export default class SongPage extends Component {

  render() {

    const songEnd = console.log('The song has finished playing');
    const { song } = 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/99/7a/6e/997a6e85-9ffe-cf0b-9023-2f59f7ac6fb9/mzaf_7661357641494777861.plus.aac.p.m4a';
    return (
      <div>
        {/* This plays our song */}
        <figure>
          <figcaption>What is that song?</figcaption>
          <audio
            controls
            src={'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/99/7a/6e/997a6e85-9ffe-cf0b-9023-2f59f7ac6fb9/mzaf_7661357641494777861.plus.aac.p.m4a'}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
        {/* We need to listen for song onended.*/}
        {/* On onended, load the next song.*/}
      </div >
    );
  }

}
