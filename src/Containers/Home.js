import React from 'react';
import { Nav } from 'react-bootstrap'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plot: 'stackedBar'
        }
    }

    render() {
        return (
            <div className="center">
                <div className="display-4 m-5">
                    Welcome!
                    <div className="h4">
                        See the day of Taxi Cabs in Manhattan
                    </div>

                </div>


                <div className="card m-1">
                    <Nav.Link className="" href="/vis/servingRate">Service Rate</Nav.Link>
                </div>
                <div className="card m-1">
                    <Nav.Link className="" href="/vis/servingHeatMap">Service Request Temporal & Spatial</Nav.Link>
                </div>
                <div className="card m-1">
                    <Nav.Link className="" href="/vis/speedViolation25">Speed Violation</Nav.Link>
                </div>
                <div className="card m-1">
                    <Nav.Link className="" href="/vis/passengerOverall">Number of Passenger Over Time</Nav.Link>
                </div>
                <div className="mt-5 card row">
                    <a className="text-info" href="/vis/info"> To learn about the data and Processing steps, Click Here or go to info</a>
                </div>
            </div >
        );
    }
};

export default Home;