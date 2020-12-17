import React, { useRef, useState } from "react";
import MenuToggle from "./MenuToggle";
import { NavLink, Link } from "react-router-dom";
import { useOutsideAlerter } from "../helpers/hooks";

export default function MainMenu() {
  const [menuActive, setMenuActive] = useState(false);
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, () => {
    setMenuActive(false);
  });

  function onMenuToggle() {
    setMenuActive(!menuActive);
  }

  return (
    <header
      className={menuActive ? "active" : ""}
      id="main-menu"
      ref={wrapperRef}
    >
      <div>
        <Link className="logo" to="/">
          ESEMBICO
        </Link>
      </div>
      <MenuToggle
        target="main-menu"
        onClick={onMenuToggle}
        active={menuActive}
      />
      <nav>
        <ul>
          <li>
            <NavLink exact={true} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/team">Team</NavLink>
          </li>
          <li>
            <NavLink to="/robotics">Robotics</NavLink>
          </li>
          <li>
            <NavLink to="/coding">Coding</NavLink>
          </li>
          <li>
            <NavLink to="/prototypes">Proto</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/recommendations">Rec</NavLink>
          </li>
        </ul>
      </nav>
      <div className="clearfix"></div>
    </header>
  );
}
