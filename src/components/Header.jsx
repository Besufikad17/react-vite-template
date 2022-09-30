import React from "react";
import { useUser } from "../store";
import { useNavigate } from "react-router";

function Header(props) {
  const logout = useUser((state) => state.logout);
  const user = useUser((state) => state.user);
  const navigate = useNavigate();

  let i = 0;
  const links = props.links.map((link) => {
    i++;
    return (
      <li className="nav-item" key={i}>
        <a className="nav-link" href={link[1]}>
          {link[0]}
        </a>
      </li>
    );
  });

  const submitLogout = () => {
    logout()
    navigate("/")  
  }

  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-md bg-dark py-3">
        <div className="container">
          {/* Logo section */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
              {props.img ? (
                <img src={props.img} alt="" />
              ) : (
                <span>{props.title}</span>
              )}
            </span>
          </a>

          {/* TODO Hamburger expand functionality */}
          {/* Hamburger */}
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-6"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation links */}
          <div
            className="collapse navbar-collapse flex-grow-0 order-md-first"
            id="navcol-6"
          >
            <ul className="navbar-nav me-auto">
              {user ? (
                <div>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      {user.email}
                    </a>
                  </li>
                  <li className="nav-item">
                    <button className="primary" onClick={() => submitLogout()}>
                      Logout
                    </button>
                  </li>
                </div>
              ) : (
                links
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
