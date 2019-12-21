import React from 'react';
import { spec } from '../Components/BarChartSpec';
import { LineChartSpec } from '../Components/LineChartSpec';
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
        console.log(servingRate);
        let newData = [];
        servingRate.map(row => {
            let newRow1 = {};
            let newRow2 = {};
            newRow1["x"] = row.Hour;
            newRow1["y"] = row.servedRate;
            newRow1["c"] = 0;
            newRow2["x"] = row.Hour;
            newRow2["y"] = row.overAllServing;
            newRow2["c"] = 1;

            newData.push(newRow1);
            newData.push(newRow2);
            // return newRow1;
        })
        var lineData = {
            table: newData
        }
        return (
            <div>
                <div>
                    <Vega spec={spec} data={barData} signalListeners={this.signalListeners} />
                </div>
                <div>
                    <Vega spec={LineChartSpec} data={lineData} signalListeners={this.signalListeners} />
                </div>
                {/* {console.log(servingRate)} */}
                Container for Plotting serving Rate
            </div>
        );
    }
};

export default ServingRatePlot;