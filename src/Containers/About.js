import React from 'react';
import { Nav } from 'react-bootstrap'

class About extends React.Component {
    render() {
        return (

            <div className="">
                <div className="card-body m-5 h4">Most of the dataset are processed using Python</div>
                <div className="card m-4 row container-fluid justify-content-center" >
                    <div className="card-body ">
                        <div className="card-title h5"> Task 1 & Task 2 Data Preparation</div>
                    </div>

                    <ol className="text-left">
                        <li>Timestamp Converted from unix time to normal date</li>
                        <li>For task on service rate, dataset is grouped by Hour</li>
                        <li>Based on the our, total matching service request count per hour is used to calculate the served and unserved rate. </li>
                        <Nav.Link className="h5 text-right" href="/vis/servingRate">See Service Rate</Nav.Link>
                    </ol>
                    
                    <ol className="text-left">
                        <li>For the spatial visualization: data is processed by combining the Manhattan geojson</li>
                        <li>A Boolean column is added to the vehicle_request dataset based on the matched service
                            <ul>
                                <li>True for matched/served Request</li>
                                <li>False for unmatched/unserved Request</li>
                            </ul>
                        </li>

                        <li>For each service Request, the respective location is merged from the Manhattan.geojson</li>
                        <li>To do that, manhattan.geojson is processed into a dictionary with stop id as the key</li>
                        <li>After merging these two dataset, cartodb is used to visualize the time map </li>
                        <li>Based on the value of boolean served, the stops are color:
                            <ul>
                                <li>Green for Served</li>
                                <li>Purple for unserved</li>
                            </ul>
                        </li>
                        <Nav.Link className="h5 text-right" href="/vis/servingHeatMap">See Service Map</Nav.Link>
                    </ol>
                </div>

                <div className="card row m-4 container-fluid justify-content-center">
                    <div className="card-body ">
                        <div className="card-title h5"> Task 3 & 4 & 5 Data Preparation</div>
                    </div>

                    <ol className="text-left">
                        <li>From the vehicle_path, events, a dictionary of vehicle id as key and path as value is created</li>
                        <li>path is is a list/array with all the [Timestamp, Latitude, Longitude, passenger, speed]</li>
                        <li>speed is calculated based on the diffence of Latitude, Longitude and time from the previous stop to next stop</li>
                        <li>On the spatial and temporal map, two color is used
                            <ul>
                                <li>Red color is used only for speed over 25 <Nav.Link className="text-right h5" href="/vis/speedViolation25">See Speed Violations</Nav.Link></li>

                            </ul>
                            <ul>
                                <li>Color scale is used to show number of passenger <Nav.Link className="text-right h5" href="/vis/passengerOverall">See Passenger Count</Nav.Link></li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default About;