import React from 'react';
import { spec } from '../Components/BarChartSpec';
import { LineChartSpec } from '../Components/LineChartSpec';
import { Vega } from 'react-vega';
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
            line: '',
            title: '',
            title1: "Served Rate Per Hour",
            title2: "Unserved Rate Per Hour"
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

            servedLineData.push({ "x": row.Hour, "y": row.servedRate, "c": 1 });
            servedLineData.push({ "x": row.Hour, "y": (100 - row.overAllServing), "c": 0 });
            unservedLineData.push({ "x": row.Hour, "y": (100 - row.servedRate), "c": 1 });
            unservedLineData.push({ "x": row.Hour, "y": row.overAllServing, "c": 0 });

            servedPlotData.push({ 'Hour': row.Hour, 'servedRate': row.servedRate });
            unservedPlotData.push({ 'Hour': row.Hour, 'servedRate': 100 - row.servedRate });
            return true;
        })

        this.setState({
            servedData1: servedPlotData,
            servedData2: servedLineData,
            unservedData1: unservedPlotData,
            unservedData2: unservedLineData,
            bar: servedPlotData,
            line: servedLineData,
            title: this.state.title1
        })
    }

    handleData = (bar, line, title) => {
        this.setState({ bar: bar, line: line, title: title });
    }

    render() {
        var barData = {
            table: this.state.bar
        };


        var lineData = {
            table: this.state.line
        }
        return (
            <div className="mt-3">
                <div className="h4">Cab Service Hourly Rate Line Chart and Bar Plot</div>
                <div>
                    <button className="btn btn-success m-2" onClick={() => this.handleData(this.state.servedData1, this.state.servedData2, this.state.title1)}>served Rate</button>
                    <button className="btn btn-danger m-2" onClick={() => this.handleData(this.state.unservedData1, this.state.unservedData2, this.state.title2)}>Unserved Rate</button>
                </div>


                <div className="row">
                    <div className="card col-sm-6">
                        <Vega className="card-body" spec={LineChartSpec} data={lineData} signalListeners={this.signalListeners} />
                        <div className="card-title font-weight-bold">Line Chart for {this.state.title}</div>
                    </div>
                    <div className="card col-sm-6">
                        <Vega className="card-body" spec={spec} data={barData} signalListeners={this.signalListeners} />
                        <div className="card-title font-weight-bold">Bar Plot for {this.state.title}</div>
                    </div>


                </div>
            </div>
        );
    }
};

export default ServingRatePlot;