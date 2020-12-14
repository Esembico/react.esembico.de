import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function MenuToggle({ target }) {
  const [menuToggleActive, setMenuToggleActive] = useState(false);

  function toggleActiveState() {
    document.getElementById(target).classList.toggle("active");
    setMenuToggleActive(!menuToggleActive);
  }

  return (
    <div className="menu-toggle" onClick={toggleActiveState}>
      {!menuToggleActive && <FontAwesomeIcon icon={faBars} />}
      {menuToggleActive && <FontAwesomeIcon icon={faTimes} />}
    </div>
  );
}
