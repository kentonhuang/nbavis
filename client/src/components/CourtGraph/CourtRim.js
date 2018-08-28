import React from 'react';

const CourtRim = (props) => {
  return (
    <g>
      <defs>
        <clipPath id="restrictedArea">
          <rect
            x={props.widthScaleCourt(11)}
            y={props.heightScale(20)}
            width={props.scaleFeet(5.5)}
            height={props.heightScale(10)}
          ></rect>
        </clipPath>
      </defs>

      <circle 
        clip-path="url(#restrictedArea)"
        cx={props.widthScaleCourt(5.5)}
        cy={props.heightScale(25)}
        r={props.scaleFeet(4)}
        style={{
        strokeWidth: '3px',
        stroke: '#000000',
        fill: 'none'
        }}
      />
      <line
        x1={props.widthScaleCourt(4)}
        x2={props.widthScaleCourt(4)}
        y1={props.heightScale(22)}
        y2={props.heightScale(28)}
        style={{
        strokeWidth: '3px',
        stroke: '#000000',
        fill: 'none'
        }}
      />
      <circle 
        cx={props.widthScaleCourt(5.5)}
        cy={props.heightScale(25)}
        r={props.scaleFeet(1.5)}
        style={{
        strokeWidth: '3px',
        stroke: '#000000',
        fill: 'none'
        }}
      />
      
    </g>
  );
};

export default CourtRim;