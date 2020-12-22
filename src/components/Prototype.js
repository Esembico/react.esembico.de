import React from "react";
import Description from "./Description";
import ExternalInternalLink from "./ExternalInternalLink";

export default function Prototype({ prototype }) {
  return (
    <div className="row">
      <div className="main-main">
        <div className="container proto">
          <div className="card">
            <div className="image-box">
              <ExternalInternalLink url={prototype.url}>
                <img src={prototype.image.url} alt={prototype.image.alt} />
              </ExternalInternalLink>
            </div>
            <div className="content-box">
              <div className="content">
                <h3>{prototype.title}</h3>
                <h4>{prototype.subtitle}</h4>
                <p>
                  Challenge: <br />
                  {prototype.challenge}
                </p>
                <p>
                  Solution: <br />
                  {prototype.solution}
                </p>
                <p>
                  Rough details:
                  <br />
                  <Description useBr={true}>
                    {prototype.rough_details}
                  </Description>
                </p>
                <p>Click/Tap the image for more details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
