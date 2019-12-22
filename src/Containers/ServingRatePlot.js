import React from 'react';
import { spec } from '../Components/BarChartSpec';
import { LineChartSpec } from '../Components/LineChartSpec';
import { Vega, VegaLite } from 'react-vega';
import servingRate from '../data/vehicle_serving.json';

class ServingRatePlot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servedData1: '',
            servedData2: '',
            unservedData1: '',
            unservedData2: '',
            bar: '',
            line: ''
        }
    }

    handleHover = (...args) => {
        console.log(args);
    }
    componentWillMount() {
        let servedPlotData = [];
        let unservedPlotData = [];
        let servedLineData = [];
        let unservedLineData = [];

        servingRate.map(row => {

            servedLineData.push({"x": row.Hour, "y": row.servedRate, "c":1});
            servedLineData.push({"x": row.Hour, "y": (100 - row.overAllServing), "c":0});
            unservedLineData.push({"x": row.Hour, "y": (100- row.servedRate), "c":1});
            unservedLineData.push({"x": row.Hour, "y": row.overAllServing, "c":0});

            servedPlotData.push({ 'Hour': row.Hour, 'servedRate': row.servedRate });
            unservedPlotData.push({ 'Hour': row.Hour, 'servedRate': 100 - row.servedRate });
            console.log(servedPlotData, unservedPlotData);
        })

        this.setState({
            servedData1: servedPlotData,
            servedData2: servedLineData,
            unservedData1: unservedPlotData,
            unservedData2: unservedLineData,
            bar: servedPlotData,
            line: servedLineData
        })
    }

    render() {
        var barData = {
            table: this.state.bar
        };

        
        var lineData = {
            table: this.state.line
        }
        return (
            <div>
                <div className="buttonRight" style={{ top: '5rem' }} ><button className="btn btn-success m-2" onClick={() => this.setState({ bar: this.state.servedData1, line: this.state.servedData2})}>served Rate</button></div>
                <div className = "buttonRight" style={{top:'8rem'}}><button className="btn btn-danger m-2" onClick={ ()=> this.setState({ bar: this.state.unservedData1, line: this.state.unservedData2})}>Unserved Rate</button></div>

                <div className = "plot" style={{top:'1rem', right:"15%"}} >
                    <Vega spec={spec} data={barData} signalListeners={this.signalListeners} />
                    <Vega spec={LineChartSpec} data={lineData} signalListeners={this.signalListeners} />
                </div>
            </div>
        );
    }
};

export default ServingRatePlot;