import React from 'react';

const CourtZoneCorner = (props) => {
  return (
    <rect
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
      style={{
        strokeWidth: '3px',
        stroke: '#ccc',
        fill: 'none',
      }}
    ></rect>
  );
};

export default CourtZoneCorner;