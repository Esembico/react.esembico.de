import React, { useEffect, useState } from "react";
import TeamMember from "../components/TeamMember";
import { load } from "../helpers/api";

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    document.querySelector("body").className = "team";
    load("/data/team.json").then((json) => {
      setTeamMembers(json);
    });
  }, []);
  return (
    <React.Fragment>
      <div className="row">
        <div className="image">
          <img
            className="responsive-image"
            src="/static/images/team/1.webp"
            alt="team_1"
          />
        </div>
        <div className="image">
          <img
            className="responsive-image"
            src="/static/images/team/2.jpg"
            alt="team_2"
          />
        </div>
      </div>

      {teamMembers.map((teamMember) => {
        return (
          <TeamMember key={teamMember.artistName} teamMember={teamMember} />
        );
      })}
    </React.Fragment>
  );
}
