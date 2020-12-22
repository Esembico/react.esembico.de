import React, { useEffect, useState } from "react";
import Prototype from "../components/Prototype";

export default function Prototypes() {
  const [prototypes, setPrototypes] = useState([]);
  useEffect(() => {
    document.querySelector("body").className = "proto";
    fetch("http://api.esembico.de/prototypes/?format=json")
      .then((res) => res.json())
      .then((json) => {
        setPrototypes(json.results);
      });
  }, []);
  return (
    <React.Fragment>
      <div className="row">
        <div className="image flex-item-50">
          <img
            className="responsive-image"
            src="/static/images/proto/1.webp"
            alt="proto_1"
          />
        </div>
        <div className="image flex-item-50">
          <img
            className="responsive-image"
            src="/static/images/proto/2.jpg"
            alt="proto_2"
          />
        </div>
      </div>

      {prototypes.map((prototype) => {
        return (
          <React.Fragment>
            <Prototype prototype={prototype} />
            <hr className="hr" />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}
