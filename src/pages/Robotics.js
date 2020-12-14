import React, { useEffect } from "react";

export default function Robotics() {
  useEffect(() => {
    document.querySelector("body").className = "robotics";
  }, []);
  return (
    <React.Fragment>
      <div className="row">
        <div className="image">
          <img
            src="/static/images/robotics/1.jpg"
            alt="robotics_1"
          />
        </div>
        <div className="image">
          <img
            src="/static/images/robotics/2.webp"
            alt="robotics_2"
          />
        </div>
      </div>

      <div className="row">
        <div className="grid-container">
          <div className="grid-item-header">Beginner</div>
          <div className="grid-item-header">Advanced</div>

          <div className="grid-item">
            <a href="https://www.amazon.de/Clementoni-59109-Clementoni-59109-Galileo-Technologic-Saug-Roboter-Mehrfarben/dp/B07MQFYVYW/ref=sr_1_10?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=galileo+roboter&qid=1601212304&sr=8-10">
              <img
                src="/static/images/robotics/59109.jpg"
                width="130px"
                height="100px"
                alt="59109"
              />
            </a>
            <h5>Built: 30.08.2020</h5>
            <p>Robo No. 1 that vibrates and sucks.</p>
            <p>Click/Tap the image for more details</p>
          </div>
          <div className="grid-item"></div>

          <div className="grid-item">
            <a href="https://www.amazon.de/Clementoni-59054-Galileo-Mein-Roboter/dp/B07998D3PW/ref=sr_1_7?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=galileo+roboter&qid=1601212304&sr=8-7">
              <img
                src="/static/images/robotics/59054.jpg"
                width="130px"
                height="100px"
                alt="59054"
              />
            </a>
            <h5>Built: 16.09.2020</h5>
            <p>
              Robo No. 2 that drives, detects obstacles and can be programmed at
              the touch of a button.
            </p>
          </div>
          <div className="grid-item"></div>

          <div className="grid-item">
            <a href="https://www.amazon.de/Clementoni-59142-Cyber-Roboter-Mehrfarben/dp/B07PKCCTB2/ref=sr_1_5?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=galileo+roboter&qid=1601212866&sr=8-5">
              <img
                src="/static/images/robotics/59142.jpg"
                width="130px"
                height="100px"
                alt="59142"
              />
            </a>
            <h5>Built: 26.09.2020</h5>
            <p>
              Robo No. 3 which can be controlled via app and reacts to noises
              and generates sounds.
            </p>
          </div>
          <div className="grid-item"></div>

          <div className="grid-item">
            <a href="https://www.amazon.de/Clementoni-59031-5-Evolution-Roboter/dp/B06W9NRM2T/ref=pd_bxgy_img_3/262-6839297-0707801?_encoding=UTF8&pd_rd_i=B06W9NRM2T&pd_rd_r=3a8aea12-8584-4bfa-921a-593ab279ba19&pd_rd_w=gARLF&pd_rd_wg=IYUOr&pf_rd_p=4490d326-3239-499b-8c8a-0dd8d6ad582a&pf_rd_r=9FHBAC0NGSA8QMQ6GFGT&psc=1&refRID=9FHBAC0NGSA8QMQ6GFGT">
              <img
                src="/static/images/robotics/59031.jpg"
                width="130px"
                height="100px"
                alt="59031"
              />
            </a>
            <h5>Built: 17.10.2020</h5>
            <p>Robo No. 4 with chain drive that can grip objects.</p>
          </div>
          <div className="grid-item"></div>

          <div className="grid-item">
            <a href="https://www.amazon.de/Clementoni-59078-Robomaker-Mehrfarben/dp/B07D9PL9S3/ref=pd_sbs_21_3/262-6839297-0707801?_encoding=UTF8&pd_rd_i=B07D9PL9S3&pd_rd_r=45f617ea-b191-41a2-9d7d-4bcb7da15256&pd_rd_w=0LCWZ&pd_rd_wg=1My64&pf_rd_p=17269923-e95e-42b2-b8e1-f208b58f5815&pf_rd_r=2V2N26JPRGQGRVH2ZM3V&psc=1&refRID=2V2N26JPRGQGRVH2ZM3V">
              <img
                src="/static/images/robotics/59078.jpg"
                width="130px"
                height="100px"
                alt="59078"
              />
            </a>
            <h5>Built: 08.11.2020</h5>
            <p>
              Robo No. 5 with 5 variants of different robots and 250 components
              including a cybernetic center, 3 electric motors, 2 IR sensors, a
              speaker.
            </p>
          </div>
          <div className="grid-item"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
