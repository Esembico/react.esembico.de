import React, { useEffect } from "react";
import Prototype from "../components/Prototype";
import Loadable from "../components/Loadable";
import useApi from "../hooks/useApi";

export default function Prototypes() {
  const { status, data: prototypes = [], error } = useApi(
    "http://api.esembico.de/prototypes/",
    "results"
  );
  useEffect(() => {
    document.querySelector("body").className = "proto";
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
        loading={status === "loading"}
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
