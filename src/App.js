//Packages
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
//Components
import DiceRoller from "./Components/DiceRoller";
import InititativeTracker from "./Components/InitiativeTracker";
import Spells from "./Components/Spells";
//App

function App() {
  return (
    <div className="App">
      <div className="header">
        Darkwolf's<br></br> Dungeons and Dragons
      </div>
      <Router>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-0">
              <Link to="/">Dice Roller</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              <Link to="/init">Initiative Tracker</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <Link to="/spells">Spells</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Switch>
          <Route path="/init">
            <InititativeTracker />
          </Route>
          <Route path="/spells">
            <Spells />
          </Route>
          <Route path="/">
            <DiceRoller />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
