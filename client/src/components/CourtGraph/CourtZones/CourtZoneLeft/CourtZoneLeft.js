import React from 'react';
import * as d3 from 'd3';

import CourtZoneArea from '../CourtZoneArea';
import CourtZoneCorner from '../CourtZoneCorner';

const CourtZoneLeft = (props) => {
  const arc15 = d3.arc()
    .innerRadius(props.scaleFeet(8))
    .outerRadius(props.scaleFeet(16))
    .startAngle(Math.PI * 0.5)
    .endAngle(Math.PI * -0.65)

  return (
    <g>
      <CourtZoneArea
        d={arc15}
        widthScaleCourt={props.widthScaleCourt}
        heightScale={props.heightScale}
      />
      <CourtZoneCorner 
        x={props.widthScaleCourt(14.5)}
        y={props.heightScale(0)}
        width={props.scaleFeet(14.5)}
        height={props.heightScale(3)}
      />
    </g>
  );
};

export default CourtZoneLeft;