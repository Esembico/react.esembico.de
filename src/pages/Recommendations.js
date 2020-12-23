import React, { useEffect, useState } from "react";
import MiscRecommendation from "../components/MiscRecommendation";
import MovieRecommendation from "../components/MovieRecommendation";
import load from "../helpers/load";
import Loadable from "../components/Loadable";

export default function Recommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const loadImpl = () => {
    load(
      "http://api.esembico.de/recommendations/?format=json",
      setLoading,
      (json) => {
        setRecommendations(json.results);
      },
      setError
    );
  };
  useEffect(() => {
    document.querySelector("body").className = "rec";
    loadImpl();
  }, []);
  return (
    <React.Fragment>
      <div className="row">
        <div className="image flex-item-50">
          <img
            className="responsive-image"
            src="/static/images/rec/1.webp"
            alt="rec_1"
          />
        </div>
        <div className="image flex-item-50">
          <img
            className="responsive-image"
            src="/static/images/rec/2.jpg"
            alt="rec_2"
          />
        </div>
      </div>
      <Loadable
        entityName="Recommendations"
        reloadCallback={loadImpl}
        loading={loading}
        error={error}
      >
        <div className="row">
          <div className="grid-container flex-container">
            <div className="flex-item-70">
              <div className="grid-item-header">Misc</div>
              {recommendations
                .filter((rec) => rec.type === "misc")
                .map((recommendation, index) => {
                  return (
                    <MiscRecommendation
                      key={index}
                      recommendation={recommendation}
                    />
                  );
                })}
            </div>
            <div className="flex-item-30">
              <div className="grid-item-header">Movies</div>
              {recommendations
                .filter((rec) => rec.type === "movie")
                .map((recommendation, index) => {
                  return (
                    <MovieRecommendation
                      key={index}
                      recommendation={recommendation}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </Loadable>
    </React.Fragment>
  );
}
