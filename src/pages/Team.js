import React, { useEffect, useState } from "react";
import Loadable from "../components/Loadable";
import TeamMember from "../components/TeamMember";
import load from "../helpers/load";

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const loadImpl = () => {
    load(
      "http://api.esembico.de/members/?format=json",
      setLoading,
      (json) => {
        setTeamMembers(json.results);
      },
      setError
    );
  };
  useEffect(() => {
    document.querySelector("body").className = "team";
    loadImpl();
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
      <Loadable
        entityName="Team"
        reloadCallback={loadImpl}
        loading={loading}
        error={error}
      >
        {teamMembers.map((teamMember) => {
          return (
            <TeamMember key={teamMember.artist_name} teamMember={teamMember} />
          );
        })}
      </Loadable>
    </React.Fragment>
  );
}
