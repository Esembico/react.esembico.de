import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.querySelector("body").className = "contact";
  }, []);
  return (
    <React.Fragment>
      <div className="row">
        <div className="image flex-item-50">
          <img className="responsive-image" src="/static/images/contact/1.webp" alt="contact_1" />
        </div>
        <div className="image flex-item-50">
          <img className="responsive-image" src="/static/images/contact/2.webp" alt="contact_2" />
        </div>
      </div>

      <div className="row">
        <div className="main-main contact">
          <div className="container-contact">
            <h2>Contact Us</h2>
            <div className="row-100">
              <div className="col">
                <div className="input-box">
                  <input type="text" name="" required="required" />
                  <span className="text">First Name</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="row-100">
              <div className="col">
                <div className="input-box">
                  <input type="text" name="" required="required" />
                  <span className="text">Last Name</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="row-100">
              <div className="col">
                <div className="input-box">
                  <input type="text" name="" required="required" />
                  <span className="text">Email</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="row-100">
              <div className="col">
                <div className="input-box textarea">
                  <textarea required="required"></textarea>
                  <span className="text">Type your message here...</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="row-100">
              <div className="col">
                <input type="submit" value="Send" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
