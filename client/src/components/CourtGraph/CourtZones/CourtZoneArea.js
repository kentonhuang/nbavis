import React from 'react';

const CourtZoneArea = (props) => {
  return (
    <path d={props.d()} style={{
        strokeWidth: '3px',
        stroke: '#ccc',
        fill: 'none',
        }}
        transform = {
          `translate(${props.widthScaleCourt(5.5)},${props.heightScale(25)})`
        }
    ></path>
  );
};


export default CourtZoneArea;