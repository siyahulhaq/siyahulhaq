import React from "react";
import Button from "./Button";

function NavBar() {
  return (
    <div className="nav__container">
      <div className="nav__wrapper">
        <div className="nav__headWrapper">
          <h2>SiyahulHaq</h2>
        </div>
        <div className="nav__navigation">
          <a href="#">ABOUT ME</a>
          <a href="#">PORTFOLIO</a>
          <Button type="rounded" title="Download CV"/>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
