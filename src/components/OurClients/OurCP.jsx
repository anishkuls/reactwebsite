import React from "react";
import Heading from "../UI/Heading";
import OurClients from "./OurClients";
import OurPartner from "./OurPartner";
import "./ourCP.scss";
import Spacer from "../UI/Spacer";


const OurCP = () => {
  return (
    <>
      <div className="container-fluids our-cp">
        <Spacer/>
        <div className="col-10 col-sm-11 col-md-11 mx-auto">
          <div className="row" id="our-partners">
            <div className="col-12 d-flex justify-content-center tab-heading">
            <ul class="nav nav-pills" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="pill" href="#home">
                  Our Clients
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="pill" href="#menu1">
                  Our Partner
                </a>
              </li>
             
            </ul>
            </div>
            <div class="tab-content">
    <div id="home" class="tab-pane active"><br/>
        <OurClients />
    </div>
    <div id="menu1" class=" tab-pane fade"><br/>
      <OurPartner />
    </div>
   
  </div>
          </div>
         
        </div>

        
      </div>
    </>
  );
};

export default OurCP;
