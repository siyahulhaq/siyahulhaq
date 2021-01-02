import React from "react";
import Button from "./Button";
import Sidebar from "./Sidebar";

function NavBar({ scrolling, toggle, sideBar }) {
  return (
    <div className="nav__container">
      <div className={scrolling ? "nav__wrapper scrolled" : "nav__wrapper"}>
        <div className="nav__headWrapper">
          <div className="nav__head">
            <h2>SiyahulHaq</h2>
            <div className="menu" onClick={toggle}>
              {!sideBar ? (
                <i className="fa fa-bars" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-minus-square-o" aria-hidden="true"></i>
              )}
            </div>
          </div>
        </div>
        <div
          className={
            scrolling ? "nav__navigation scrolledLink" : "nav__navigation"
          }
        >
          <a href="#">ABOUT ME</a>
          <a href="#">PORTFOLIO</a>
          <Button type="rounded" title="Download CV" scrolling={scrolling} />
        </div>
      </div>
      <Sidebar sideBar={sideBar}/>
    </div>
  );
}

export default NavBar;
