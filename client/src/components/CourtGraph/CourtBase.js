import React from 'react';

const CourtBase = (props) => {
  return (
    <g>
      <rect
        width={props.width}
        height={props.height}
        style={{
          fill: 'none',
          stroke: 'black',
          strokeWidth: '1px'
        }}
      ></rect>

    </g>
  );
};

export default CourtBase;