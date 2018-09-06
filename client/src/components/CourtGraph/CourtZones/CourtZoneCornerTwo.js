import React from 'react';

const CourtZoneCornerTwo = (props) => {
  return (
    < g clipPath="url(#clipTwo)">
      <defs>
        <clipPath id="clipTwo">
          <rect 
            x={props.widthScaleCourt(17)}
            y={props.heightScale(3)}
            width={props.scaleFeet(17)}
            height={props.heightScale(44)}
          />
        </clipPath>  
      </defs>
      <path d={props.d()} 
        style={{
          strokeWidth: '3px',
          stroke: '#ccc',
          fill: 'red',
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

export default CourtZoneCornerTwo;