import React from 'react';
import * as d3 from 'd3';

import CourtZoneArea from '../CourtZoneArea';
import CourtZoneCorner from '../CourtZoneCorner';

const CourtZoneRight = (props) => {
  const arc15 = d3.arc()
    .innerRadius(props.scaleFeet(8))
    .outerRadius(props.scaleFeet(16))
    .startAngle(Math.PI * -0.35)
    .endAngle(Math.PI * -1.35)

  return (
    <g>
      <CourtZoneArea
        d={arc15}
        widthScaleCourt={props.widthScaleCourt}
        heightScale={props.heightScale}
      />
      <CourtZoneCorner 
        x={props.widthScaleCourt(14.5)}
        y={props.heightScale(47)}
        width={props.scaleFeet(14.5)}
        height={props.heightScale(3)}
      />
    </g>
  );
};

export default CourtZoneRight;