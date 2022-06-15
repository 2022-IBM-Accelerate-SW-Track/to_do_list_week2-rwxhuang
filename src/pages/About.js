import React, { Component } from 'react';
import profile from "../assets/IMG-5087_500x.jpg";
import './About.css';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Roderick Huang</div>
            <div className="brief_description">
              I'm an MIT undergraduate studying mathematics and computer science! A fun fact about me is that I love to swim.
            </div>
          </div>
        </div>
      </div>
    )
  }
}