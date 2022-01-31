
import React from "react";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__made">
      Made with{" "}
      <span role="img" aria-label="heart">
        💜
      </span>{" "}
      by
      <a
        href="www.linkedin.com"
        rel="noopener noreferrer"
        target="_blank"
        className="logo"
      >
        <span className="logo-img">&lt;&gt;</span> <span>Ivette Mery</span>
      </a>
    </div>
    <div className="footer__location">
      CH,
      <span>La Serena</span>, 2022
    </div>
  </footer>
);

export default Footer;