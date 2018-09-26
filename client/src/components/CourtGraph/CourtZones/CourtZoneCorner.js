import React from 'react';



const CourtZoneCorner = (props) => {
  const { colors, colors2 } = props;
  let color;

  const percentage = parseInt(props.data.percentage);
  const lgFg = props.leagueAvgStats.fgPct;

  if (props.data.shots > 0) {
    if (percentage === 0) {
      color = colors2(10);
    } else if (percentage < lgFg) {
      color = colors2(lgFg % percentage)
    } else if (percentage > lgFg) {
      color = colors(percentage % lgFg)
    }
  } else {
    color = '#ffffff';
  }


  return (
    <rect
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
      style={{
        strokeWidth: '3px',
        stroke: '#ccc',
        fill: `${color}`
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