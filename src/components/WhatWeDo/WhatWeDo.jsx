import React from "react";
import Button from "../UI/Button";

import wwdImg from "../../images/wwdImage.png"
import "./whatWeDo.scss"
import Heading from "../UI/Heading";

import BottomSpacer from "../UI/BottomSpacer";

const WhatWeDo = () => {
  return (
    <>
    <div className="container-fluids what-we-do">
    
      <div className="col-10 col-sm-10 col-md-9 mx-auto">
        <div className="row">
          <Heading text="What we do"/>
        </div>
        <div className="row flex-sm-row-reverse">
          <div className="col-12 col-sm-12 text-sm-center col-md-6">
            <img src={wwdImg} className="img-fluid" />
          </div>
          <div className="col-12 col-md-6 d-md-flex align-items-md-center wwd-text">
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
      <BottomSpacer />
    </div>
    </>
  
  )
}

export default WhatWeDo