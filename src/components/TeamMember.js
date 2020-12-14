import React from "react";
import Description from "./Description";

export default function TeamMember({ teamMember }) {
  return (
    <div className="row">
      <div className="side">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={teamMember.image}
                width="150px"
                height="150px"
                alt={teamMember.artistName}
              />
            </div>
            <div className="flip-card-back">
              <h3>Artist name</h3>
              <h1>{teamMember.artistName}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <h3>{teamMember.name}</h3>
        <h5>{teamMember.titles}</h5>
        <Description>{teamMember.bio}</Description>
      </div>
    </div>
  );
}
