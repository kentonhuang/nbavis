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
    const {courtWidth, courtHeight} = this.props
    
    return (
      <g>
        <CourtZoneCenter
          scaleFeet={scaleFeet}
          widthScaleCourt={widthScaleCourt}
          heightScale={heightScale}
          width={courtWidth}
          height={courtHeight}
        />
        <CourtZoneLeft 
          scaleFeet={scaleFeet}
          widthScaleCourt={widthScaleCourt}
          heightScale={heightScale}
          width={courtWidth}
          height={courtHeight}
        />
        <CourtZoneRight 
          scaleFeet={scaleFeet}
          widthScaleCourt={widthScaleCourt}
          heightScale={heightScale}
          width={courtWidth}
          height={courtHeight}
        />
        <CourtZoneLeftCenter 
          scaleFeet={scaleFeet}
          widthScaleCourt={widthScaleCourt}
          heightScale={heightScale}
          width={courtWidth}
          height={courtHeight}
        />
        <CourtZoneRightCenter 
          scaleFeet={scaleFeet}
          widthScaleCourt={widthScaleCourt}
          heightScale={heightScale}
          width={courtWidth}
          height={courtHeight}
        />
      </g>
    );
  }
}

export default CourtZones;