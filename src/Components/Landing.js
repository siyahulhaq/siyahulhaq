import React from "react";
import Facebook from "../Assets/SVG/Facebook";
import Instagram from "../Assets/SVG/Instagram";
import LinkedIn from "../Assets/SVG/LinkedIn";
import Twitter from "../Assets/SVG/Twitter";

function Landing() {
  return (
    <div className="landing">
      <div className="landing__left">
        <div className="landing__profile">
          <img
            src="https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/75407813_3091412370977438_3580795328308598472_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=tQ15sz3OqkQAX-7Aj9J&_nc_ht=scontent-maa2-1.xx&oh=4c99c9e8bdc274957750c8cb78149b97&oe=6011C256"
            alt="siyahulhaq"
          />
        </div>
      </div>
      <div className="landing__right">
        <div className="landing__right__title">
          <p>
            MY <span>WORK</span>
          </p>
          <p>Full-Stack Developer</p>
        </div>
        <div className="landing__right__social">
          <p>FOLLOW ME ON:</p>
          <div className="dash" />
          <Facebook
            color={"#3b5998"}
            link="https://www.facebook.com/SiYaHuL.HaQ4697/"
          />
          <Twitter color={"#1DA1F2"} />
          <LinkedIn
            color={"#0e76a8"}
            link={"https://www.linkedin.com/in/siyahul-haq-775ba41b2"}
          />
          <Instagram
            color={"#dd2a7b"}
            link={"https://www.instagram.com/h__o__ll__y__roll__e_rz_h_a_q/"}
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
