import React from 'react';
import GoogleMap from '../Components/GoogleMap';

class ServingHeatMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plot: 'stackedBar'
        }
    }


    render() {
        return (
            <div className="container mb-5 mt-5">
                Container for Serving HeatMap
                <div id="map">
                    <GoogleMap/>
                </div>
            </div>
        );
    }
};

export default ServingHeatMap;