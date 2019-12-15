import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plot: 'stackedBar'
        }
    }

    render() {
        return (
            <div>
                Container for Home to list of all the visualizations
            </div>
        );
    }
};

export default Home;