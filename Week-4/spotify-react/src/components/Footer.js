import React from "react";

import spotifyLogo from "../images/spotify-logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="upper-part">
        <div className="container">
          <div className="column logo-at-footer">
            <img src={spotifyLogo} alt="Spotify Logo" width="170px" />
          </div>

          <div className="column">
            <h6>Company</h6>
            <p>About</p>
            <p>Jobs</p>
            <p>For the Record</p>
          </div>

          <div className="column">
            <h6>Communities</h6>
            <p>For Artists</p>
            <p>Developers</p>
            <p>Brands</p>
            <p>Investors</p>
            <p>Vendors</p>
          </div>

          <div className="column">
            <h6>Useful Links</h6>
            <p>Help</p>
            <p>Web Player</p>
            <p>Free Mobile App</p>
          </div>

          <div className="column social-logos">
            <FontAwesomeIcon className="social-icon" icon={faInstagram} />
            <FontAwesomeIcon className="social-icon" icon={faFacebook} />
            <FontAwesomeIcon className="social-icon" icon={faTwitter} />
          </div>
        </div>
      </div>

      <div className="lower-part">
        <div className="container">
          <div className="left">
            <p>Legal</p>
            <p>Privacy Center</p>
            <p>Privacy Policy</p>
            <p>Cookies</p>
            <p>About Ads</p>
          </div>

          <div className="right">
            <a href="#vietnam">Vietnam</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
