import React from 'react';

class ServingRatePlot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plot: 'stackedBar'
        }
    }

    render() {
        return (
            <div>
                Container for Plotting serving Rate
            </div>
        );
    }
};

export default ServingRatePlot;