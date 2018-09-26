import React from 'react';

const CourtZoneArea = (props) => {

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
    <path d={props.d()} style={{
        strokeWidth: '3px',
        stroke: '#ccc',
        fill: `${color}`
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