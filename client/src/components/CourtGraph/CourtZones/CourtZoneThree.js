import React from 'react';

const CourtZoneThree = (props) => {
  return (
    < g clipPath="url(#clipThree)">
      <defs>
        <clipPath id="clipThree">
          <rect 
            x={props.widthScaleCourt(50)}
            y={props.heightScale(0)}
            width={props.scaleFeet(35.5)}
            height={props.heightScale(50)}
          />
        </clipPath>  
      </defs>
      <path d={props.d()} 
        style={{
          strokeWidth: '3px',
          stroke: '#ccc',
          fill: 'purple',
          }}
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
    </g>
  );
};

export default CourtZoneThree;