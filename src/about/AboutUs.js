import React, { Component } from 'react';
import './AboutUs.css';

export default class AboutUs extends Component {

  render() {
    return (
      <div className="AboutUs">
        <h1>About Us</h1><span></span>
        <div className="bios">
          
          <div className="avatar">
            <div className="bio-media">
              <img className="profile" src='./../kalan-avatar.jpg' alt='kalan'/>
              <div className='links'>
                <a href="https://github.com/prudhomk"><img src='./../github-logo.png' alt='github'/></a>
                <a href="https://www.linkedin.com/in/kalanprudhomme/"><img src='./../linkedin-logo.png' alt='linkedin'/></a>
              </div>
            </div>
            <p>Kalan Prudhomme is a tasteful jazz pianist/music sommalier. He likes gorillas.</p>
          </div>
            
        
          <div className="avatar">
            <div className="bio-media">
              <image className="profile"/>
              <div className='links'>
                <a href="https://github.com/katherinemtam"><img src='./../github-logo.png' alt='github'/></a>
                <a href="https://www.linkedin.com/in/katherinemtam/"><img src='./../linkedin-logo.png' alt='linkedin'/></a>
              </div>
            </div>
            <p>Katherine Tam is a distinguished and in-demand piano player, having been invited to the pokemon
            palace to play for Charmander's mom in the age of the Pokepocalypse. She likes cute shiba inus.</p>
          </div>

         
          <div className="avatar">
            <div className="bio-media">
              <img className="profile" src='./../nick-avatar.png' alt='nick'/>
              <div className='links'>
                <a href="https://www.linkedin.com/in/nick-day-fsd/"><img src='./../github-logo.png' alt='github'/></a>
                <a href="https://github.com/NickDayFSD"><img src='./../linkedin-logo.png' alt='linkedin'/></a>
              </div>
            </div>
            <p>Nick Day is a slick musician with an unparalleled shredding ferocity on guitar, and on coding.
             He calls cookies biscuits.</p>
          </div>

          <div className="avatar">
            <div className="bio-media">
              <image className="profile"/>
              <div className='links'>
                <a href="https://github.com/CaseyCameron/"><img src='./../github-logo.png' alt='github'/></a>
                <a href="https://www.linkedin.com/in/casey-cameron/"><img src='./../linkedin-logo.png' alt='linkedin'/></a>
              </div>
            </div>
            <p>Casey Cameron grew up with an ear for music, playing piano since before he could tie his shoes.
          He performs music, composes music for video games, and codes.</p>
          </div>
      
        </div>
      </div>
    );
  }
}
