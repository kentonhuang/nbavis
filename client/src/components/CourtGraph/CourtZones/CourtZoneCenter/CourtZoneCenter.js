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

  const paint = d3.arc()
    .innerRadius(props.scaleFeet(0))
    .outerRadius(props.scaleFeet(8))
    .startAngle(Math.PI * 0)
    .endAngle(Math.PI * 2)
  
  return (
  
    <g>
      <CourtZoneArea
        d={arc15}
        widthScaleCourt={props.widthScaleCourt}
        heightScale={props.heightScale}
        zone='Center'
        dist='8-16 Feet'
        data={props.data['8-16']}
        leagueAvgStats={props.leagueAvgStats['8-16']}
        colors={props.colors}
        colors2={props.colors2}
        onMouseMove={(e, bool, data) => {
          props.onMouseMove(e, bool, data);
        }}
        onMouseLeave={(e, bool, data) => {
          props.onMouseLeave(e, bool, data);
        }}
      />
      <CourtZoneArea
        d={paint}
        widthScaleCourt={props.widthScaleCourt}
        heightScale={props.heightScale}
        zone='Center'
        dist='0-8 Feet'
        data={props.data['0-8']}
        leagueAvgStats={props.leagueAvgStats['0-8']}
        colors={props.colors}
        colors2={props.colors2}
        onMouseMove={(e, bool, data) => {
          props.onMouseMove(e, bool, data);
        }}
        onMouseLeave={(e, bool, data) => {
          props.onMouseLeave(e, bool, data);
        }}
      />
      <CourtZoneArea 
        d={arc24}
        widthScaleCourt={props.widthScaleCourt}
        heightScale={props.heightScale}
        zone='Center'
        dist='16-24 Feet'
        data={props.data['16-24']}
        leagueAvgStats={props.leagueAvgStats['16-24']}
        colors={props.colors}
        colors2={props.colors2}
        onMouseMove={(e, bool, data) => {
          props.onMouseMove(e, bool, data);
        }}
        onMouseLeave={(e, bool, data) => {
          props.onMouseLeave(e, bool, data);
        }}
      />
      <CourtZoneThree 
        d={arc3pt}
        scaleFeet={props.scaleFeet}
        widthScaleCourt={props.widthScaleCourt}
        heightScale={props.heightScale}
        zone='Center'
        dist='24+ Feet'
        data={props.data['24+']}
        leagueAvgStats={props.leagueAvgStats['24+']}
        colors={props.colors}
        colors2={props.colors2}
        onMouseMove={(e, bool, data) => {
          props.onMouseMove(e, bool, data);
        }}
        onMouseLeave={(e, bool, data) => {
          props.onMouseLeave(e, bool, data);
        }}
      />
      <CourtZoneCorner 
        x='0'
        y='0'
        width={props.scaleFeet(11.1)}
        height={props.heightScale(50)}
        zone='Center'
        dist='47+ Feet'
        data={props.data2.backCourt}
        leagueAvgStats={props.leagueAvgStats['backCourt']}
        colors={props.colors}
        colors2={props.colors2}
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

export default CourtZoneCenter;