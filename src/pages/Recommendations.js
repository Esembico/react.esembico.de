import React, { useEffect } from "react";
import MiscRecommendation from "../components/MiscRecommendation";
import MovieRecommendation from "../components/MovieRecommendation";
import Loadable from "../components/Loadable";
import useApi from "../hooks/useApi";

export default function Recommendations() {
  const { status, data: recommendations = [], error } = useApi(
    "https://api.esembico.de/recommendations/",
    "results"
  );
  useEffect(() => {
    document.querySelector("body").className = "rec";
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
        loading={status === "loading"}
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
