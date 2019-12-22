import React from 'react';
import './ServingHeatMap.css';

class ServingHeatMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plot: 'stackedBar'
        }
    }


    render() {
        return (
            // <div className="container mb-2 mt-1">
            <iframe
                className="iframe"
                frameborder="0"
                src="https://aham-carto.carto.com/builder/2f72564c-cfb1-42a6-861a-d63174d9b97f/embed"
                allowfullscreen
                webkitallowfullscreen
                mozallowfullscreen
                oallowfullscreen
                msallowfullscreen
            />
            // </div>
        );
    }
};

export default ServingHeatMap;