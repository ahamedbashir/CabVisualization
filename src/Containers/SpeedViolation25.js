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
                <button className="iframeTop btn btn-primary" onClick={()=> window.location.reload(false)}>Restart Simulation</button>
            </div>
        );
    }
};

export default SpeedViolation25;