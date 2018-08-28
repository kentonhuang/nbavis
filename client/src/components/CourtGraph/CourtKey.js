import React from 'react';

const CourtKey = (props) => {
  return (
    <g>
      <defs>
        <clipPath id="rightFreeThrow">
          <rect
            x={props.widthScaleCourt(19)}
            y={props.heightScale(19)}
            width={props.scaleFeet(19)}
            height={props.heightScale(12)}
          ></rect>
        </clipPath>
        <clipPath id="leftFreeThrow">
          <rect
            x={props.widthScaleCourt(38)}
            y={props.heightScale(18)}
            width={props.scaleFeet(19)}
            height={props.heightScale(14)}
          ></rect>
        </clipPath>
      </defs>

      <rect
        x={props.widthScaleCourt(19)}
        y={props.heightScale(19)}
        width={props.scaleFeet(19)}
        height={props.heightScale(12)}
        style={{
        strokeWidth: '3px',
        stroke: '#000000',
        fill: 'none'
        }}
      >
      </rect>
      <rect
        x={props.widthScaleCourt(19)}
        y={props.heightScale(17)}
        width={props.scaleFeet(19)}
        height={props.heightScale(16)}
        style={{
        strokeWidth: '3px',
        stroke: '#000000',
        fill: 'none'
        }}
      >
      </rect>

      <circle
        cx={props.widthScaleCourt(19)}
        cy={props.heightScale(25)}
        r={props.scaleFeet(6)}
        clip-path="url(#rightFreeThrow)"
        stroke-dasharray="10"
        style={{
        strokeWidth: '3px',
        stroke: '#000000',
        fill: 'none'
        }}
      ></circle>

      <circle
        cx={props.widthScaleCourt(19)}
        cy={props.heightScale(25)}
        r={props.scaleFeet(6)}
        clip-path="url(#leftFreeThrow)"
        style={{
        strokeWidth: '3px',
        stroke: '#000000',
        fill: 'none'
        }}
      ></circle>

      <line
        x1={props.widthScaleCourt(7)}
        x2={props.widthScaleCourt(7)}
        y1={props.heightScale(16)}
        y2={props.heightScale(17)}
        style={{
        strokeWidth: '3px',
        stroke: '#000000'
        }}
      />

      <line
        x1={props.widthScaleCourt(7)}
        x2={props.widthScaleCourt(7)}
        y1={props.heightScale(33)}
        y2={props.heightScale(34)}
        style={{
        strokeWidth: '3px',
        stroke: '#000000'
        }}
      />

      <line
        x1={props.widthScaleCourt(8)}
        x2={props.widthScaleCourt(8)}
        y1={props.heightScale(16)}
        y2={props.heightScale(17)}
        style={{
        strokeWidth: '3px',
        stroke: '#000000'
        }}
      />

      <line
        x1={props.widthScaleCourt(8)}
        x2={props.widthScaleCourt(8)}
        y1={props.heightScale(33)}
        y2={props.heightScale(34)}
        style={{
        strokeWidth: '3px',
        stroke: '#000000'
        }}
      />

      <line
        x1={props.widthScaleCourt(11)}
        x2={props.widthScaleCourt(11)}
        y1={props.heightScale(16)}
        y2={props.heightScale(17)}
        style={{
        strokeWidth: '3px',
        stroke: '#000000'
        }}
      />

      <line
        x1={props.widthScaleCourt(11)}
        x2={props.widthScaleCourt(11)}
        y1={props.heightScale(33)}
        y2={props.heightScale(34)}
        style={{
        strokeWidth: '3px',
        stroke: '#000000'
        }}
      />

      <line
        x1={props.widthScaleCourt(14)}
        x2={props.widthScaleCourt(14)}
        y1={props.heightScale(16)}
        y2={props.heightScale(17)}
        style={{
        strokeWidth: '3px',
        stroke: '#000000'
        }}
      />

      <line
        x1={props.widthScaleCourt(14)}
        x2={props.widthScaleCourt(14)}
        y1={props.heightScale(33)}
        y2={props.heightScale(34)}
        style={{
        strokeWidth: '3px',
        stroke: '#000000'
        }}
      />

    </g>
  );
};

export default CourtKey;