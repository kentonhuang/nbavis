import React from 'react';
import * as d3 from 'd3';

import CourtZoneArea from '../CourtZoneArea';
import CourtZoneThree from '../CourtZoneThree';

const CourtZoneLeftCenter = (props) => {

  const arc24 = d3.arc()
    .innerRadius(props.scaleFeet(16))
    .outerRadius(props.scaleFeet(23.8))
    .startAngle(Math.PI * -0.16)
    .endAngle(Math.PI * -0.38)

  const arc3pt = d3.arc()
    .innerRadius(props.scaleFeet(23.9))
    .outerRadius(props.scaleFeet(52))
    .startAngle(Math.PI * -0.10)
    .endAngle(Math.PI * -0.40)
  
  return (
  
    <g>
      <CourtZoneArea
        d={arc24}
        widthScaleCourt={props.widthScaleCourt}
        heightScale={props.heightScale}
      />
      <CourtZoneThree 
        scaleFeet={props.scaleFeet}
        d={arc3pt}
        widthScaleCourt={props.widthScaleCourt}
        heightScale={props.heightScale}
      />
    </g>
  );
};

export default CourtZoneLeftCenter;