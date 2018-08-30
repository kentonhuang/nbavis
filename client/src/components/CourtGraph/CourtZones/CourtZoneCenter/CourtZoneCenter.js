import React from 'react';
import * as d3 from 'd3';

import CourtZoneArea from '../CourtZoneArea';
import ZoneCenter0 from './ZoneCenter0';
import CourtZoneThree from '../CourtZoneThree';
import CourtZoneCorner from '../CourtZoneCorner'

const CourtZoneCenter = (props) => {

  const arc15 = d3.arc()
    .innerRadius(props.scaleFeet(8))
    .outerRadius(props.scaleFeet(16))
    .startAngle(Math.PI * -0.35)
    .endAngle(Math.PI * -0.65)

   const arc24 = d3.arc()
    .innerRadius(props.scaleFeet(16))
    .outerRadius(props.scaleFeet(23.8))
    .startAngle(Math.PI * -0.38)
    .endAngle(Math.PI * -0.62) 

  const arc3pt = d3.arc()
    .innerRadius(props.scaleFeet(23.9))
    .outerRadius(props.scaleFeet(52))
    .startAngle(Math.PI * -0.4)
    .endAngle(Math.PI * -0.6)
  
  return (
  
    <g>
      <CourtZoneArea
        d={arc15}
        widthScaleCourt={props.widthScaleCourt}
        heightScale={props.heightScale}
      />
      <ZoneCenter0
        cx={props.widthScaleCourt(5.5)}
        cy={props.heightScale(25)}
        r={props.scaleFeet(8)}
      />
      <CourtZoneArea 
        d={arc24}
        widthScaleCourt={props.widthScaleCourt}
        heightScale={props.heightScale}
      />
      <CourtZoneThree 
        d={arc3pt}
        scaleFeet={props.scaleFeet}
        widthScaleCourt={props.widthScaleCourt}
        heightScale={props.heightScale}
      />
      <CourtZoneCorner 
        x='0'
        y='0'
        width={props.scaleFeet(11.1)}
        height={props.heightScale(50)}
      />
    </g>
  );
};

export default CourtZoneCenter;