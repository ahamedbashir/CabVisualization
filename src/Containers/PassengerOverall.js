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
                Container to simulate Passengers Overall
            </div>
        );
    }
};

export default PassengerOverall;