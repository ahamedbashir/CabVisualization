import React from 'react';

class PassengerOverall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plot: 'stackedBar'
        }
    }

    render() {
        return (
            <div>
                <iframe
                    className="iframe"
                    frameborder="0"
                    src="https://ahamedbashir.github.io/visualizationFinal/"
                    allowfullscreen
                    webkitallowfullscreen
                    mozallowfullscreen
                    oallowfullscreen
                    msallowfullscreen
                />
                <button className="iframeTop btn btn-primary" onClick={() => window.location.reload(false)}>Restart Simulation</button>
                <div className="card visInfoBox bg-semi-transparent" style={{ width: "12rem" }}>
                    <div className="h4 text-info">Passenger Count</div>
                    <div className="text-left text-white bg-semi-transparent p-2 rounded">
                        Color Hue/Saturation Represents Number of Passenger in a car at that time
                    </div>
                </div>
            </div>
        );
    }
};

export default PassengerOverall;