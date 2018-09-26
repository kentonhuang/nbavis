import React, { Component } from 'react';
import * as d3 from 'd3';

import CourtZoneCenter from './CourtZoneCenter/CourtZoneCenter';
import CourtZoneLeft from './CourtZoneLeft/CourtZoneLeft';
import CourtZoneRight from './CourtZoneRight/CourtZoneRight';
import CourtZoneRightCenter from './CourtZoneRightCenter/CourtZoneRightCenter';
import CourtZoneLeftCenter from './CourtZoneLeftCenter/CourtZoneLeftCenter';

class CourtZones extends Component {
  state = {
    widthScaleCourt: d3.scaleLinear()
      .domain([0, 47])
      .range([this.props.courtWidth, this.props.halfCourtLine]),

    heightScale: d3.scaleLinear()
      .domain([0, 50])
      .range([0, this.props.courtHeight]),

    scaleFeet: d3.scaleLinear()
      .domain([0, 50])
      .range([0, 500])
  }

  render() {
    const {widthScaleCourt, heightScale, scaleFeet} = this.state
    const {courtWidth, courtHeight, stats, colors, colors2, leagueAvgStats} = this.props

    return (
      <g>
        <CourtZoneCenter
          scaleFeet={scaleFeet}
          widthScaleCourt={widthScaleCourt}
          heightScale={heightScale}
          width={courtWidth}
          height={courtHeight}
          data={stats.splits.center}
          data2={stats.splits.backCourt}
          leagueAvgStats={leagueAvgStats.center}
          colors={colors}
          colors2={colors2}
          onMouseMove={(e, bool, data) => {
            this.props.toolTipCallBack(e, bool, data);
          }}
          onMouseLeave={(e, bool, data) => {
            this.props.toolTipCallBack(e, bool, data);
          }}
        />
        <CourtZoneLeft 
          scaleFeet={scaleFeet}
          widthScaleCourt={widthScaleCourt}
          heightScale={heightScale}
          width={courtWidth}
          height={courtHeight}
          data={stats.splits.left}
          leagueAvgStats={leagueAvgStats.left}
          colors={colors}
          colors2={colors2}
          onMouseMove={(e, bool, data) => {
            this.props.toolTipCallBack(e, bool, data);
          }}
          onMouseLeave={(e, bool, data) => {
            this.props.toolTipCallBack(e, bool, data);
          }}
        />
        <CourtZoneRight 
          scaleFeet={scaleFeet}
          widthScaleCourt={widthScaleCourt}
          heightScale={heightScale}
          width={courtWidth}
          height={courtHeight}
          data={stats.splits.right}
          leagueAvgStats={leagueAvgStats.right}
          colors={colors}
          colors2={colors2}
          onMouseMove={(e, bool, data) => {
            this.props.toolTipCallBack(e, bool, data);
          }}
          onMouseLeave={(e, bool, data) => {
            this.props.toolTipCallBack(e, bool, data);
          }}
        />
        <CourtZoneLeftCenter 
          scaleFeet={scaleFeet}
          widthScaleCourt={widthScaleCourt}
          heightScale={heightScale}
          width={courtWidth}
          height={courtHeight}
          data={stats.splits.leftCenter}
          leagueAvgStats={leagueAvgStats.leftCenter}
          colors={colors}
          colors2={colors2}
          onMouseMove={(e, bool, data) => {
            this.props.toolTipCallBack(e, bool, data);
          }}
          onMouseLeave={(e, bool, data) => {
            this.props.toolTipCallBack(e, bool, data);
          }}
        />
        <CourtZoneRightCenter 
          scaleFeet={scaleFeet}
          widthScaleCourt={widthScaleCourt}
          heightScale={heightScale}
          width={courtWidth}
          height={courtHeight}
          data={stats.splits.rightCenter}
          leagueAvgStats={leagueAvgStats.rightCenter}
          colors={colors}
          colors2={colors2}
          onMouseMove={(e, bool, data) => {
            this.props.toolTipCallBack(e, bool, data);
          }}
          onMouseLeave={(e, bool, data) => {
            this.props.toolTipCallBack(e, bool, data);
          }}
        />
      </g>
    );
  }
}

export default CourtZones;