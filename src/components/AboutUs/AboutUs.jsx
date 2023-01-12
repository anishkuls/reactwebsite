import React from "react";
import Button from "../UI/Button";
import aboutUsImage from "./../../images/Image4.png";
import "./aboutus.scss"
import Heading from "../UI/Heading";
import Spacer from "../UI/Spacer";
import BottomSpacer from "../UI/BottomSpacer";


const About = () => {
  return (
    <>
    <div className="container-fluids about-us">
    <Spacer />
      <div className="col-10 col-sm-11 col-md-10 mx-auto">
        <div className="row" id="about-us">
          <Heading text="About us"/>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 text-sm-center col-md-6">
            <img src={aboutUsImage} className="img-fluid" alt="About us" />
          </div>
          <div className="col-12 col-md-6 d-md-flex align-items-md-center about-text">
            <div>
              <h3 className="pt-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam.
              </p>
              <div className="text-center text-md-start">
                <Button text="View More" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Spacer />
    </div>
    </>

  );
};

export default About;
