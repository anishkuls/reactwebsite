import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Heading from "../UI/Heading";
import Button from "../UI/Button";
import Spacer from "../UI/Spacer";

const ContactUs = () => {
  return (
    <>
      <div className="container-fluid">
        <Spacer />
        <div className="col-10 col-sm-10 col-md-9 col-lg-8 mx-auto">
          <div className="row" id="contact-us">
            <div className="col-12">
              <Heading text="Contact Us" />
            </div>
          </div>
          <div
            className="row full-form g-5"
            style={{ border: "2px solid #e6e6e6", borderRadius: "10px" }}
          >
            <form action="/action_page.php">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-6 ">
                  <label for="firstName" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder="Enter First Name"
                    name="fname"
                  />
                </div>
                <div class="col-12 col-sm-12 col-md-6">
                  <label for="lastName" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder="Enter Last Name"
                    name="lname"
                  />
                </div>
              </div>

              <div class="row my-lg-2">
                <div class="col-12 col-sm-12 col-md-6 ">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                  />
                </div>
                <div class="col-12 col-sm-12 col-md-6">
                  <label for="pwd" class="form-label">
                    Phone
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="pwd"
                    placeholder="Enter password"
                    name="pswd"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <label for="comment">Message</label>
                  <textarea
                    class="form-control"
                    rows="5"
                    id="comment"
                    name="text"
                  ></textarea>
                </div>
              </div>

              <div className="row">
                <div className="col-12 d-flex justify-content-center pt-5">
                  <ReCAPTCHA
                    sitekey="6Lc2BGcjAAAAADPOiFYfFNtnO_MJYbTOp6AuKUJp"
                  />
                </div>
                <div className="col-12 text-center py-5">
                  <Button text="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <Spacer />
      </div>
    </>
  );
};

export default ContactUs;
