// import React from 'react';
// import { Vega , VegaLite} from 'react-vega';
// import servingRate from '../data/vehicle_serving.json';

exports.spec = {
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  width: 500,
  height: 400,
  padding: { left: 50, right: 50, top: 50, bottom: 50 },

  data: [{ name: 'table' }],

  signals: [
    {
      name: 'tooltip',
      value: {},
      on: [
        { events: 'rect:mouseover', update: 'datum' },
        { events: 'rect:mouseout', update: '{}' },
      ],
    },
  ],

  scales: [
    {
      name: 'xscale',
      type: 'band',
      domain: { data: 'table', field: 'Hour' },
      range: 'width',
    },
    {
      name: 'yscale',
      domain: { data: 'table', field: 'servedRate' },
      nice: true,
      range: 'height',
    },
  ],

  axes: [{ orient: 'bottom', scale: 'xscale' }, { orient: 'left', scale: 'yscale' }],

  marks: [
    {
      type: 'rect',
      tooltip: true,
      from: { data: 'table' },
      encode: {
        enter: {
          x: { scale: 'xscale', field: 'Hour', offset: 1 },
          width: { scale: 'xscale', band: 1, offset: -1 },
          y: { scale: 'yscale', field: 'servedRate' },
          y2: { scale: 'yscale', value: 0 },
        },
        update: {
          fill: { value: 'steelblue' },
        },
        hover: {
          fill: { value: 'red' },
        },
      },
    },
    {
      type: 'text',
      tooltip: true,
      encode: {
        enter: {
          align: { value: 'center' },
          baseline: { value: 'bottom' },
          fill: { value: '#333' },
        },
        update: {
          x: { scale: 'xscale', "signal": 'tooltip.Hour', band: 0.5 },
          y: { scale: 'yscale', "signal": 'tooltip.servedRate', offset: -5 },
          text: { signal: ('tooltip.Hour', 'tooltip.servedRate') },
          fillOpacity: [{ test: 'datum === tooltip', value: 0 }, { value: 1 }],
        },
      },
    },
  ]
}




// function handleHover(...args) {
//     console.log(args);
// }

// const signalListeners = { hover: handleHover };
// class BarChart extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {

//         return <VegaLite spec={spec} data={this.props.barData} signalListeners={signalListeners} />
//     }
// }

// export default BarChart;