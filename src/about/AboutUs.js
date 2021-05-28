import React, { Component } from 'react';
import './AboutUs.css';

export default class AboutUs extends Component {

  render() {
    return (
      <div className="AboutUs">
        <h1>About Us</h1>
        <div className="bios">
          
          <div className="profile">
            
            <div className="bio-media">
              <img className="avatar" src="./../kalan-avatar.jpg" alt="kalan"/>
            </div>
            <div className="blurb">
              <h2>Kalan Prudhomme</h2>
              <p>A tasteful jazz pianist/music sommalier. He likes gorillas, and drawing gorillas.</p>
              <div className="links">
                <a href="https://github.com/prudhomk"><img src="./../github-logo.png" alt="github"/></a>
                <a href="https://www.linkedin.com/in/kalanprudhomme/"><img src="./../linkedin-logo.png" alt="linkedin"/></a>
              </div>
            </div>
          </div>
            
        
          <div className="profile">
            
            <div className="bio-media">
              <img className="avatar" src="./../kat-avatar.png" alt="katherine"/>
            </div>
            <div className="blurb">
              <h2>Katherine Tam</h2>
              <p>A CSS maestro who jams out to K-Pop. She has a cute shiba inu named Willow.</p>
              <div className="links">
                <a href="https://github.com/katherinemtam"><img src="./../github-logo.png" alt="github"/></a>
                <a href="https://www.linkedin.com/in/katherinemtam/"><img src="./../linkedin-logo.png" alt="linkedin"/></a>
              </div>
            </div>
          </div>

         
          <div className="profile">
            <div className="bio-media">
              <img className="avatar" src="./../nick-avatar.png" alt="nick"/>
            </div>
            <div className="blurb">
              <h2>Nick Day</h2>
              <p>A test-driven developer, with a penchant for synthesizers.</p>
              <div className="links">
                <a href="https://www.linkedin.com/in/nick-day-fsd/"><img src="./../github-logo.png" alt="github"/></a>
                <a href="https://github.com/NickDayFSD"><img src="./../linkedin-logo.png" alt="linkedin"/></a>
              </div>
            </div>
          </div>

          <div className="profile">
            <div className="bio-media">
              <img className="avatar" src="./../casey-avatar.jpg" alt="casey"/>
            </div>
            <div className="blurb">
              <h2>Casey Cameron</h2>
              <p>Playing piano before he could tie his shoes, Casey peforms music and writes scores for videogames.</p>
              <div className="links">
                <a href="https://github.com/CaseyCameron/"><img src="./../github-logo.png" alt="github"/></a>
                <a href="https://www.linkedin.com/in/casey-cameron/"><img src="./../linkedin-logo.png" alt="linkedin"/></a>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    );
  }
}
