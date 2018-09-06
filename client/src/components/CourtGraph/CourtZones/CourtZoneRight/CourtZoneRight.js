import React from 'react';
import * as d3 from 'd3';

import CourtZoneArea from '../CourtZoneArea';
import CourtZoneCorner from '../CourtZoneCorner';
import CourtZoneCornerTwo from '../CourtZoneCornerTwo';

const CourtZoneRight = (props) => {
  const arc15 = d3.arc()
    .innerRadius(props.scaleFeet(8))
    .outerRadius(props.scaleFeet(16))
    .startAngle(Math.PI * -0.65)
    .endAngle(Math.PI * -1.35)

  const arc24 = d3.arc()
    .innerRadius(props.scaleFeet(16))
    .outerRadius(props.scaleFeet(23.8))
    .startAngle(Math.PI * -0.84)
    .endAngle(Math.PI * -1.40)

  return (
    <g>
      <CourtZoneArea
        d={arc15}
        widthScaleCourt={props.widthScaleCourt}
        heightScale={props.heightScale}
        zone='Right'
        dist='8-16 Feet'
        data={props.data['8-16']}
        onMouseMove={(e, bool, data) => {
          props.onMouseMove(e, bool, data);
        }}
        onMouseLeave={(e, bool, data) => {
          props.onMouseLeave(e, bool, data);
        }}
      />
      <CourtZoneCorner
        x={props.widthScaleCourt(14.5)}
        y={props.heightScale(47)}
        width={props.scaleFeet(14.5)}
        height={props.heightScale(3)}
        zone='Right'
        dist='24+ Feet'
        data={props.data['24+']}
        onMouseMove={(e, bool, data) => {
          props.onMouseMove(e, bool, data);
        }}
        onMouseLeave={(e, bool, data) => {
          props.onMouseLeave(e, bool, data);
        }}
      />
      <CourtZoneCornerTwo
        d={arc24}
        scaleFeet={props.scaleFeet}
        widthScaleCourt={props.widthScaleCourt}
        heightScale={props.heightScale}
        zone='Right'
        dist='16-24 Feet'
        data={props.data['16-24']}
        onMouseMove={(e, bool, data) => {
          props.onMouseMove(e, bool, data);
        }}
        onMouseLeave={(e, bool, data) => {
          props.onMouseLeave(e, bool, data);
        }}
      />
    </g>
  );
};

export default CourtZoneRight;