import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import ServingRatePlot from './Containers/ServingRatePlot';
import ServingHeatMap from './Containers/ServingHeatMap';
import SpeedViolation25 from './Containers/SpeedViolation25';
import PassengerViolation4 from './Containers/PassengerViolation4';
import PassengerOverall from './Containers/PassengerOverall';
import Home from './Containers/Home';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation(props) {
  return (

    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/vis"> Cab Visualization</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav nav-right">
        <Nav className="mr-auto">
          <Nav.Link href="/vis/servingRate">Serving Rate</Nav.Link>
          <Nav.Link href="/vis/servingHeatMap">Serving Map</Nav.Link>
          <Nav.Link href="/vis/speedViolation25">Speed Violation</Nav.Link>
          <Nav.Link href="/vis/passengerViolation4">Passenger Violation</Nav.Link>
          <Nav.Link href="/vis/passengerOverall">All Passenger</Nav.Link>
        </Nav>
        <Nav>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            <Switch>
              <Route path="/vis/servingRate" component={ServingRatePlot} />
              <Route path="/vis/servingHeatMap" component={ServingHeatMap} />
              <Route path="/vis/speedViolation25" component={SpeedViolation25} />
              <Route path="/vis/passengerViolation4" component={PassengerViolation4} />
              <Route path="/vis/passengerOverall" component={PassengerOverall} />
              <Route path="/vis/" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
