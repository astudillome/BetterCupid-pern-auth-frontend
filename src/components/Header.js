import React from "react";
import { Link } from "react-router-dom";

// creates header and gives access to other pages in app
const Header = (props) => {
  return (
    <header className="navbar">
      <div>
        <ul>
          <li>
            <Link to={"/"} className="logo">
              BetterCupid
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="about-link">
              About
            </Link>
          </li>
        </ul>
      </div>

      <div className="links">
        <ul>
          {props.currentUser ? (
            <>
              <li>
                <Link to={"/browse"}>Browse</Link>
              </li>
              <li>
                <Link to={"/matches"}>Matches</Link>
              </li>
              <li>
                <Link to={"/profile"}>Profile</Link>
              </li>
              <li>
                <a href="/logout" onClick={props.logout}>
                  Log Out
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={"/browse"}>Browse</Link>
              </li>
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
