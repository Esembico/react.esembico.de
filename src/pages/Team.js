import React, { useEffect, useState } from "react";
import TeamMember from "../components/TeamMember";

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    document.querySelector("body").className = "team";
    fetch("http://api.esembico.de/members/?format=json")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setTeamMembers(json.results);
      });
  }, []);
  return (
    <React.Fragment>
      <div className="row">
        <div className="image flex-item-50">
          <img
            className="responsive-image"
            src="/static/images/team/1.webp"
            alt="team_1"
          />
        </div>
        <div className="image flex-item-50">
          <img
            className="responsive-image"
            src="/static/images/team/2.jpg"
            alt="team_2"
          />
        </div>
      </div>

      {teamMembers.map((teamMember) => {
        return (
          <TeamMember key={teamMember.artist_name} teamMember={teamMember} />
        );
      })}
    </React.Fragment>
  );
}
