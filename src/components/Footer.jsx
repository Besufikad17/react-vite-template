import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

function Footer(props) {

  let i = 0;
  const links = props.links.map((link) => {
    i++;
    return (
      <li className="list-inline-item me-4" key={i}>
        <a className="link-secondary" href={link[1]}>
          {link[0]}
        </a>
      </li>
    );
  });

  return (
    <div>
      <footer className="text-center">
        <div className="container text-muted py-4 py-lg-5">
          
          {/* Links */}
          <ul className="list-inline">{links}</ul>

          {/* Social media links */}
          <ul className="list-inline">
            <li className="list-inline-item me-4">
              <FaFacebook />
            </li>
            <li className="list-inline-item me-4">
              <FaTwitter />
            </li>
            <li className="list-inline-item me-4">
              <FaInstagram />
            </li>
            <li className="list-inline-item me-4">
              <FaLinkedin />
            </li>
            <li className="list-inline-item me-4">
              <FaGithub />
            </li>
          </ul>
          <p className="mb-0">Copyright © 2022 Brand</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
