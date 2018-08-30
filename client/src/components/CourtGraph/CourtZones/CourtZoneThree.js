import React from 'react';

const CourtZoneThree = (props) => {
  console.log(props);
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
          fill: 'none',
          }}
        transform = {
          `translate(${props.widthScaleCourt(5.5)},${props.heightScale(25)})`
        }
      ></path>
    </g>
  );
};

export default CourtZoneThree;