import React, { useEffect } from "react";

export default function Prototypes() {
  useEffect(() => {
    document.querySelector("body").className = "proto";
  }, []);
  return (
    <React.Fragment>
      <div className="row">
        <div className="image">
          <img src="/static/images/proto/1.webp" alt="proto_1" />
        </div>
        <div className="image">
          <img src="/static/images/proto/2.jpg" alt="proto_2" />
        </div>
      </div>

      <div className="row">
        <div className="main-main">
          <div className="container proto">
            <div className="card">
              <div className="imgBx">
                <a href="proto1.html">
                  <img src="/static/images/proto/proto1a.PNG" alt="proto1" />
                </a>
              </div>
              <div className="contentBx">
                <div className="content">
                  <h3>Proto 1</h3>
                  <h4>VBA Tool</h4>
                  <p>
                    Challenge: <br />A lot of different data from excel files
                    have to be copied, analyzed, formatted and saved.
                  </p>
                  <p>
                    Solution: <br />
                    One file with vba code opens all files, copies the data,
                    analyzes, compares, changes, formats and exports the data as
                    new file(s).
                  </p>
                  <p>
                    Rough details: <br />
                    The whole process is splitted into pieces:
                    <br />
                    1. Open files and copy the needed data
                    <br />
                    2. Analyzing, comparing and changing the data
                    <br />
                    3. Split and format the data and save it
                  </p>
                  <p>Click/Tap the image for more details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />

      <div className="row">
        <div className="main-main">
          <div className="container proto">
            <div className="card">
              <div className="imgBx">
                <a href="https://tixi-chatbot.herokuapp.com/" target="_blank" rel="noreferrer">
                  <img src="/static/images/proto/proto2.jpg" alt="proto2" />
                </a>
              </div>
              <div className="contentBx">
                <div className="content">
                  <h3>Proto 2</h3>
                  <h4>Chatbot (Python)</h4>
                  <p>
                    Challenge: <br />A conversation partner is needed for
                    support/help.
                  </p>
                  <p>
                    Solution: <br />
                    Build and train a chatbot.
                  </p>
                  <p>
                    Rough details:
                    <br />
                    Visit the udemy platform (link in rec) and get the course
                    "Create a Python Powered Chatbot in Under 60 Minutes"
                  </p>
                  <p>Click/Tap the image for more details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />
    </React.Fragment>
  );
}
