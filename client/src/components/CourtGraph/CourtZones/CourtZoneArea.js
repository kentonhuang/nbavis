import React from 'react';

import './zone.css';

const CourtZoneArea = (props) => {

  return (
    <path d={props.d()} style={{
        strokeWidth: '3px',
        stroke: '#ccc',
        fill: 'blue',
        }}
        className="hoverClass"
        transform = {
          `translate(${props.widthScaleCourt(5.5)},${props.heightScale(25)})`
        }
        onMouseMove={(e) => {
          props.onMouseMove(e, true, {
            data: props.data,
            dist: props.dist,
            zone: props.zone
          });
        }}
        onMouseLeave={(e) => {
          props.onMouseMove(e, false, {
            data: props.data,
            dist: props.dist,
            zone: props.zone
          });
        }}
    ></path>
  );
};


export default CourtZoneArea;