import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import MenuToggle from "./components/MenuToggle";
import Coding from "./pages/Coding";
import Contact from "./pages/Contact";
import DataScienceVsBusinessAnalyst from "./pages/DataScienceVsBusinessAnalyst";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Prototype1 from "./pages/Prototype1";
import Prototypes from "./pages/Prototypes";
import Recommendations from "./pages/Recommendations";
import Robotics from "./pages/Robotics";
import Team from "./pages/Team";

export default function App() {
  return (
    <Router>
      <header>
        <div>
          <Link className="logo" to="/">
            ESEMBICO
          </Link>
        </div>
        <MenuToggle target="main-menu" />
        <nav id="main-menu">
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
      <Switch>
        <Route exact={true} path="/team">
          <Team />
        </Route>
        <Route exact={true} path="/robotics">
          <Robotics />
        </Route>
        <Route exact={true} path="/coding">
          <Coding />
        </Route>
        <Route exact={true} path="/prototypes/proto1">
          <Prototype1 />
        </Route>
        <Route exact={true} path="/prototypes">
          <Prototypes />
        </Route>
        <Route exact={true} path="/contact">
          <Contact />
        </Route>
        <Route exact={true} path="/recommendations/dbvsba">
          <DataScienceVsBusinessAnalyst />
        </Route>
        <Route exact={true} path="/recommendations">
          <Recommendations />
        </Route>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      <footer>
        <h5>
          <Link to="/">&copy; esembico</Link>
        </h5>
      </footer>
    </Router>
  );
}
