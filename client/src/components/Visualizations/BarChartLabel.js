import React from 'react';

const BarChartLabel = (props) => {
  return (
    <g style = {{  textAnchor: 'end'}} >
      <text
        y={props.y}
        x={props.x}
      >{props.title}</text>
    </g>
  );
};

export default BarChartLabel;