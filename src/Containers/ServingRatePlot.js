import React from 'react';
import { spec } from './BarChartSpec';
import { LineChartSpec } from './LineChartSpec';
import { Vega, VegaLite } from 'react-vega';
import servingRate from '../data/vehicle_serving.json';

class ServingRatePlot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plot: 'stackedBar',
            data: ''
        }
    }

    // componentDidMount() {

    //     let servingPerHour = {};
    //     let table = [];
    //     servingRate.map(row => {
    //         let res = {};
    //         res[row.Hour] = (row.servedRate).toFixed(2);
    //         table.push(res);
    //     });
    //     servingPerHour.table = table;
    //     this.setState({data: servingPerHour})
    // }
    handleHover = (...args) => {
        console.log(args);
    }

    render() {
        var barData = {
            table: servingRate
        };
        return (
            <div>
                <div>
                    <Vega spec={spec} data={barData} signalListeners={this.signalListeners} />
                </div>
                <div>
                    <Vega spec={LineChartSpec} signalListeners={this.signalListeners} />
                </div>
                {/* {console.log(servingRate)} */}
                Container for Plotting serving Rate
            </div>
        );
    }
};

export default ServingRatePlot;