import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import spotifyLogo from "../images/spotify-logo.png";

const NavigationBar = () => {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      className="nav-bar"
      bg="dark"
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand href="#home">
        <img src={spotifyLogo} alt="Spotify Logo" width="140px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto links">
          <a href="#premium">Premium</a>
          <a href="#help">Help</a>
          <a href="#download">Download</a>

          <span className="hidden-md hidden-sm hidden-xs">|</span>

          <a href="#sign-up">Sign up</a>
          <a eventKey={2} href="#log-in">
            Log in
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
