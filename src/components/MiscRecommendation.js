import React from "react";
import ExternalInternalLink from "./ExternalInternalLink";

export default function MiscRecommendation({ recommendation }) {
  return (
    <div className="grid-item">
      <ExternalInternalLink
        url={recommendation.url}
        internal={recommendation.internalUrl}
      >
        <img
          src={recommendation.image.url}
          width={recommendation.image.width}
          height={recommendation.image.height}
          alt={recommendation.image.alt}
        />
      </ExternalInternalLink>
      <h5>{recommendation.title}</h5>
      {recommendation.description.split("\n").map((line, index) => {
        return <p key={index}>{line}</p>;
      })}
    </div>
  );
}
