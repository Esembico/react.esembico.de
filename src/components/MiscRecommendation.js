import React from "react";
import Description from "./Description";
import ExternalInternalLink from "./ExternalInternalLink";

export default function MiscRecommendation({ recommendation }) {
  return (
    <div className="grid-item">
      <ExternalInternalLink url={recommendation.url}>
        <img
          src={recommendation.image.url}
          width={recommendation.image.width}
          height={recommendation.image.height}
          alt={recommendation.image.alt}
        />
      </ExternalInternalLink>
      <h5>{recommendation.title}</h5>
      <Description>{recommendation.description}</Description>
    </div>
  );
}
