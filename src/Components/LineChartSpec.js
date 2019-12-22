exports.LineChartSpec = {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "width": 400,
    "height": 200,
    "padding": 25,
  
    "signals": [
      {
        "name": "interpolate",
        "value": "basis",
        "bind": {
          "input": "select",
          "options": [
            "basis",
            "cardinal",
            "catmull-rom",
            "linear",
            "monotone",
            "natural",
            "step",
            "step-after",
            "step-before"
          ]
        }
      }
    ],
  
    "data": [
      {
        "name": "table",
      }
    ],
  
    "scales": [
      {
        "name": "x",
        "type": "point",
        "range": "width",
        "domain": {"data": "table", "field": "x"}
      },
      {
        "name": "y",
        "type": "linear",
        "range": "height",
        "nice": true,
        "zero": true,
        "domain": {"data": "table", "field": "y"}
      },
      {
        "name": "color",
        "type": "ordinal",
        "range": "category",
        "domain": {"data": "table", "field": "c"}
      }
    ],
  
    "axes": [
      {"orient": "bottom", "scale": "x", title: "Hour"},
      {"orient": "left", "scale": "y", title: "Service Rate (%)"}
    ],
  
    "marks": [
      {
        "type": "group",
        "from": {
          "facet": {
            "name": "series",
            "data": "table",
            "groupby": "c"
          }
        },
        "marks": [
          {
            "type": "line",
            "from": {"data": "series"},
            "encode": {
              "enter": {
                "x": {"scale": "x", "field": "x"},
                "y": {"scale": "y", "field": "y"},
                "stroke": {"scale": "color", "field": "c"},
                "strokeWidth": {"value": 2}
              },
              "update": {
                "interpolate": {"signal": "interpolate"},
                "fillOpacity": {"value": 1}
              },
              "hover": {
                "fillOpacity": { "value": 0.5 }
              }
            }
          },
        ]
      }
    ]
  }
  