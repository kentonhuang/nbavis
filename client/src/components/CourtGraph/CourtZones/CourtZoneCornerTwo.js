import React from 'react';

const CourtZoneCornerTwo = (props) => {
  console.log(props);
  const { colors, colors2 } = props;
  let color;

  const percentage = parseInt(props.data.percentage);
  const lgFg = props.leagueAvgStats.fgPct;
  
  console.log(percentage);

  if (props.data.shots > 0) {
    if (percentage === 0) {
      color = colors2(10);
    }
      else if (percentage < lgFg) {
      color = colors2(lgFg % percentage)
    } else if (percentage > lgFg) {
      color = colors(percentage % lgFg)
    } 
  } else {
    color = '#ffffff';
  }

  console.log(color);

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
          fill: `${color}`
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