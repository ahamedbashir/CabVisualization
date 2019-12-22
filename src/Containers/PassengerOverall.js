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
                <button className="iframeTop btn btn-primary" onClick={()=> window.location.reload(false)}>Restart Simulation</button>
            </div>
        );
    }
};

export default PassengerOverall;