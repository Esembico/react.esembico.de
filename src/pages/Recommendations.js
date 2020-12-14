import React, { useEffect, useState } from "react";
import MiscRecommendation from "../components/MiscRecommendation";
import MovieRecommendation from "../components/MovieRecommendation";

export default function Recommendations() {
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    document.querySelector("body").className = "rec";
    fetch("/data/recommendations.json")
      .then((res) => res.json())
      .then((json) => {
        setRecommendations(json);
      });
  }, []);
  return (
    <React.Fragment>
      <div className="row">
        <div className="image">
          <img className="rec" src="/static/images/rec/1.webp" alt="rec_1" />
        </div>
        <div className="image">
          <img className="rec" src="/static/images/rec/2.jpg" alt="rec_2" />
        </div>
      </div>

      <div className="row">
        <div className="grid-container">
          <div className="grid-item-header">Misc</div>
          <div className="grid-item-header">Movies</div>
          <div>
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
          <div>
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
    </React.Fragment>
  );
}
