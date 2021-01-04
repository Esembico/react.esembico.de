import React, { useEffect } from "react";
import Loadable from "../components/Loadable";
import TeamMember from "../components/TeamMember";
import useApi from "../hooks/useApi";

export default function Team() {
  const { status, data: teamMembers = [], error } = useApi(
    "http://api.esembico.de/members/?format=json",
    "results"
  );
  useEffect(() => {
    document.querySelector("body").className = "team";
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
      <Loadable entityName="Team" loading={status === "loading"} error={error}>
        {teamMembers.map((teamMember) => {
          return (
            <TeamMember key={teamMember.artist_name} teamMember={teamMember} />
          );
        })}
      </Loadable>
    </React.Fragment>
  );
}
