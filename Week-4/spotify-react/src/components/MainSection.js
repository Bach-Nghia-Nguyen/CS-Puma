import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const MainSection = () => {
  return (
    <Jumbotron className="jumbotron">
      <div className="hero-img">
        <div className="main-content">
          <h1>Music for everyone.</h1>
          <h4>Millions of songs. No Credit Card Needed</h4>
          <button className="get-spotify-button  btn-success">
            Get Spotify Free
          </button>
        </div>
      </div>
    </Jumbotron>
  );
};

export default MainSection;
