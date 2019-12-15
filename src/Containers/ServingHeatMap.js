import React from 'react';

class ServingHeatMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plot: 'stackedBar'
        }
    }

    render() {
        return (
            <div>
                Container for Serving HeatMap
            </div>
        );
    }
};

export default ServingHeatMap;