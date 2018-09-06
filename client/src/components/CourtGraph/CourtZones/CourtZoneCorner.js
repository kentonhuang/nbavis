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
        fill: 'green',
      }}
      onMouseMove={(e) => {
          props.onMouseMove(e, true, {
            data: props.data,
            dist: props.dist,
            zone: props.zone
          });
        }}
      onMouseLeave = {
        (e) => {
          props.onMouseMove(e, false, {
            data: props.data,
            dist: props.dist,
            zone: props.zone
          });
        }
      }
    ></rect>
  );
};

export default CourtZoneCorner;