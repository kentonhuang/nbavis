import React from 'react';

const ChartLabel = (props) => {
  return (
    <g style={{textAnchor: 'end'}}>
          {data.map((d, i) => (
            <text
              key={i}
              y={height + 10}
              x={40}
            >{title}</text>
          ))}
    </g>
  );
};

export default ChartLabel;