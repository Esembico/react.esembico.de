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
      <p>FSK: {recommendation.ageRating}</p>
      <p>{recommendation.releaseYear}</p>
    </div>
  );
}