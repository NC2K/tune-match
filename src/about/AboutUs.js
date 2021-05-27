import React, { Component } from 'react';
import './AboutUs.css';

export default class AboutUs extends Component {

  render() {
    return (
      <div className="AboutUs">
        <h1>About Us</h1><span></span>
        <div className="bios">
          <div className="avatar">Kalan Avatar</div>
          <div>Kalan Proudmoore is a tasteful jazz pianist, with a repertoire spanning Annie Lennox to Charlie
            and the Chocolate Factory. He likes games.</div>
          <div className="avatar">Katherine Avatar</div>
          <div>Katherine Tam is a distinguished and in-demand piano player, having been invited to the pokemon
            palace to play for Charmander's mom in the age of the Pokepocalypse. She likes cute shiba inus. </div>
          <div className="avatar">Nick Avatar</div>
          <div>Nick Day is a slick musician with an unparalleled shredding ferocity on guitar, and on coding.
             He calls cookies biscuits. </div>
          <div className="avatar">Casey Avatar</div>
          <div>Casey Cameron grew up with an ear for music, playing piano since before he could tie his shoes.
          He performs music, composes music for video games, and codes.
          </div>
        </div>
      </div >
    );
  }
}
