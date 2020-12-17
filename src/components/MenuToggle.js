import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function MenuToggle({ target, onClick, active }) {
  return (
    <div className="menu-toggle" onClick={onClick}>
      {!active && <FontAwesomeIcon icon={faBars} />}
      {active && <FontAwesomeIcon icon={faTimes} />}
    </div>
  );
}
