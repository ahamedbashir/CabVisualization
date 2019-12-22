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
            <div >
                <div className="display-4 m-5">
                    Welcome!
                    <div className="h4">
                        See the day of Taxi Cabs in Manhattan
                    </div>
                    
                </div>
                

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