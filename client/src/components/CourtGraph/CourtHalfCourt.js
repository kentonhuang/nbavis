import React from 'react';

const CourtHalfCourt = (props) => {
  return (
    <g>
      <line 
      x1={props.widthScaleCourt(50)} 
      x2={props.widthScaleCourt(50)}
      y1={props.heightScale(0)}
      y2={props.heightScale(50)}
      style={{
        strokeWidth: '3px',
        stroke: '#000000'
      }}
      ></line>

      <circle 
        cx={props.widthScaleCourt(50)}
        cy={props.heightScale(25)}
        r={props.scaleFeet(2)}
        style={{
        strokeWidth: '3px',
        stroke: '#000000',
        fill: 'none'
        }}
      />

      <circle 
        cx={props.widthScaleCourt(50)}
        cy={props.heightScale(25)}
        r={props.scaleFeet(6)}
        style={{
        strokeWidth: '3px',
        stroke: '#000000',
        fill: 'none'
        }}
      />

      <line
        x1={props.widthScaleCourt(28)}
        x2={props.widthScaleCourt(28)}
        y1={props.heightScale(0)}
        y2={props.heightScale(3)}
        style={{
        strokeWidth: '3px',
        stroke: '#000000'
        }}
      />

      <line
        x1={props.widthScaleCourt(28)}
        x2={props.widthScaleCourt(28)}
        y1={props.heightScale(47)}
        y2={props.heightScale(50)}
        style={{
        strokeWidth: '3px',
        stroke: '#000000'
        }}
      />
    </g>
  );
};

export default CourtHalfCourt;