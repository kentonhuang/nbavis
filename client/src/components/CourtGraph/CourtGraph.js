import React, { Component } from 'react';
import * as d3 from 'd3';

import CourtBase from './CourtBase';
import CourtHalfCourt from './CourtHalfCourt';
import CourtThreePoint from './CourtThreePoint';
import CourtKey from './CourtKey';
import CourtRim from './CourtRim';

class CourtGraph extends Component {

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
			<svg style={{width: courtWidth, height: courtHeight}}>
				<CourtBase
					width={courtWidth}
					height={courtHeight}
				/>
				<CourtHalfCourt
					scaleFeet={scaleFeet}
					widthScaleCourt={widthScaleCourt}
					heightScale={heightScale}
					width={courtWidth}
					height={courtHeight}
				/>
				<CourtThreePoint
					scaleFeet={scaleFeet}
					widthScaleCourt={widthScaleCourt}
					heightScale={heightScale}
					width={courtWidth}
					height={courtHeight}
				/>
				<CourtKey
					scaleFeet={scaleFeet}
					widthScaleCourt={widthScaleCourt}
					heightScale={heightScale}
					width={courtWidth}
					height={courtHeight}
				/>
				<CourtRim
					scaleFeet={scaleFeet}
					widthScaleCourt={widthScaleCourt}
					heightScale={heightScale}
					width={courtWidth}
					height={courtHeight}
				/>
			</svg>
		);
	}
}

export default CourtGraph;