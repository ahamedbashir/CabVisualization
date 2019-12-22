import React from 'react';

class SpeedViolation25 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plot: 'stackedBar'
        }
    }
    componentDidMount() {
        // drawPixi();
    }

    render() {
        return (
            <div>
                <iframe
                    className="iframe"
                    frameborder="0"
                    src="https://ahamedbashir.github.io/cabSpeedViolation/"
                    allowfullscreen
                    webkitallowfullscreen
                    mozallowfullscreen
                    oallowfullscreen
                    msallowfullscreen
                />
                <button className="iframeTop btn btn-primary" onClick={() => window.location.reload(false)}>Restart Simulation</button>
                <div className="card visInfoBox bg-semi-transparent" style={{ width: "12rem" }}>
                    <div className="h4 text-info">Speed Violation</div>
                    <div className="text-left text-white bg-semi-transparent p-2 rounded">
                        This Map marks the vehicle as <span className="text-danger">RED </span>
                        When the speed of that car is over 25 Mile/Hour
                    </div>
                </div>
            </div>

        );
    }
};

export default SpeedViolation25;