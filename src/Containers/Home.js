import React from 'react';
import {Nav} from 'react-bootstrap'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plot: 'stackedBar'
        }
    }

    render() {
        return (
            <div>
                Welcome to the Taxi Cab Simulation of Manhattan

                <div className="card">
                    <Nav.Link className="" href="/vis/servingRate">Service Rate</Nav.Link>
                </div>
                <div className="card">
                    <Nav.Link className="" href="/vis/servingHeatMap">Service Rate Plot</Nav.Link>
                </div>
                <div className="card">
                    <Nav.Link className="" href="/vis/speedViolation25">Speed Violation</Nav.Link>
                </div>
                <div className="card">
                    <Nav.Link className="" href="/vis/passengerOverall">Number of Passenger Over Time</Nav.Link>
                </div>
            </div >
        );
    }
};

export default Home;