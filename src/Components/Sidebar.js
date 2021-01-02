import React from "react";
import Button from "./Button";

function Sidebar({ sideBar }) {
  return (
    <div
      className={sideBar ? "nav__sideNav nav__sideNavEnable" : "nav__sideNav"}
    >
      <a href="#">ABOUT ME</a>
      <a href="#">PORTFOLIO</a>
      <div>
      <Button type="rounded" title="Download CV" scrolling={true} />
      </div>
    </div>
  );
}

export default Sidebar;
