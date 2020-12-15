import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.querySelector("body").className = "home";
  }, []);
  return (
    <React.Fragment>
      <div className="row">
        <div className="image imgBx">
          <img
            className="responsive-image"
            src="static/images/home/1.webp"
            alt="home_1"
          />
        </div>
        <div className="image">
          <img
            className="responsive-image"
            src="static/images/home/2.jpg"
            alt="home_2"
          />
        </div>
      </div>

      <div className="row">
        <div className="main-main">
          <h3>We are creating the project esembico</h3>
          <p>The project is about Robotics and Prototyping.</p>
          <p>People of different ages are involved in the project.</p>
          <p>
            The aim is to acquire the knowledge to learn all the needed things
            of hardware, electronics and software to be able to build a
            functional private robot.
          </p>
          <p>
            The acquired knowledge can be applied in the area of creating
            websites, shops, games, apps, etc.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
