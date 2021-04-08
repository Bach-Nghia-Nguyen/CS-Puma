import React, { useState } from "react";
import Modal from "./Modal";

const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <footer className="footer">
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/Bach-Nghia-Nguyen" target="_blank">
            Nguyen Bach Nghia
          </a>
          .
        </div>

        <button className="rules" onClick={toggle}>
          Rules
        </button>
      </footer>

      {modal ? <Modal toggle={toggle} /> : null}
    </>
  );
};

export default Footer;
