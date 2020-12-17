import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import GenericPage from "./components/GenericPage";
import MainMenu from "./components/MainMenu";

import Coding from "./pages/Coding";
import Contact from "./pages/Contact";
import DataScienceVsBusinessAnalyst from "./pages/DataScienceVsBusinessAnalyst";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Prototypes from "./pages/Prototypes";
import Recommendations from "./pages/Recommendations";
import Robotics from "./pages/Robotics";
import Team from "./pages/Team";

export default function App() {
  return (
    <Router>
      <MainMenu />
      <div className="container">
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
          <Route exact={true} path="/prototypes">
            <Prototypes />
          </Route>
          <Route path="/prototypes/:name">
            <GenericPage theme="proto" />
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
      </div>

      <footer>
        <h5>
          <Link to="/">&copy; esembico</Link>
        </h5>
      </footer>
    </Router>
  );
}
