import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <ul className="NavList">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/helloworld">Hello World</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
