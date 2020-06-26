import React from "react";

function Nav() {
  return (
    <div className="Nav">
      <ul className="NavList">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/helloworld">Hello World</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
