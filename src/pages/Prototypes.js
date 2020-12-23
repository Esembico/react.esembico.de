import React, { useEffect, useState } from "react";
import Prototype from "../components/Prototype";
import load from "../helpers/load";
import Loadable from "../components/Loadable";

export default function Prototypes() {
  const [prototypes, setPrototypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const loadImpl = () => {
    load(
      "http://api.esembico.de/prototypes/?format=json",
      setLoading,
      (json) => {
        setPrototypes(json.results);
      },
      setError
    );
  };
  useEffect(() => {
    document.querySelector("body").className = "proto";
    loadImpl();
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
      <Loadable
        entityName="Prototypes"
        reloadCallback={loadImpl}
        loading={loading}
        error={error}
      >
        {prototypes.map((prototype) => {
          return (
            <React.Fragment key={prototype.title}>
              <Prototype prototype={prototype} />
              <hr className="hr" />
            </React.Fragment>
          );
        })}
      </Loadable>
    </React.Fragment>
  );
}
