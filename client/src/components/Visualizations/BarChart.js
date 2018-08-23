import React from "react";
import * as d3 from "d3";
import chroma from "chroma-js";
import NodeGroup from 'react-move/NodeGroup';

import BarChartBar from './BarChartBar';
import BarChartAverageBar from './BarChartAverageBar';
import Axis from './Axis';
import BarChartLabel from './BarChartLabel';

class BarChart extends React.Component {

  state = {
    widthScale: d3
			.scaleLinear()
      .domain([0, this.props.domain])
			.range([0, this.props.width]),

    heightScale: d3
      .scaleBand()
      .domain(d3.range(0, this.props.data.length))
			.range([0, this.props.height]),
			
		hover: false,
		hoverAvg: false,
		hoverLeague: false,
		hoverPos: false,
		toolTipData: '0',

		translate: `translate(50, ${this.props.height})`,
		x: 0,
		y: 0,
	};

  static getDerivedStateFromProps(nextProps, prevState) {
    let { widthScale, heightScale } = prevState;

		widthScale.domain([0, nextProps.domain]);
		heightScale.domain(d3.range(0, nextProps.data.length));

    prevState = { ...prevState, widthScale, heightScale };
    return prevState;
	}
	
	setHover(bool) {
		this.setState({
			hover: bool
		})
	}

	setHoverAvg(bool) {
		this.setState({
			hoverAvg: bool
		})
	}

	setHoverLeague(bool) {
		this.setState({
			hoverLeague: bool
		})
	}

	setHoverPos(bool) {
		this.setState({
			hoverPos: bool
		})
	}

	moveToolTip = (e, data, type, bool) => {
		const hover = bool;
		this.props.toolTipCallBack(e, data, type, hover);
	}

  render() {

		const color = chroma.scale('OrRd').domain([1, 0]);
		
    const { title, data, height, leagueHigh } = this.props,
			{ widthScale, heightScale } = this.state;

    return (
			<g style={{transform: 'translate(0,0)', position: 'relative'}}>
			{/* league High */}
				<BarChartAverageBar 
					d={leagueHigh}
					type={'leagueAvg'}
					heightScale={heightScale}
					widthScale={widthScale}
					height={30}
					x={50}
					y={0}
					fillColor={this.state.hoverLeague}
					colors={{color1: '#E8E8E8', color2: '#c7c7c7'}}
					onMouseLeave={(e, data, type, bool) => {
						this.setHoverLeague(false)
						this.moveToolTip(e, data, type, bool)
					}}
					onMouseMove={(e, data, type, bool) => {
						this.setHoverLeague(true)
						this.moveToolTip(e, data, type, bool)
					}}
				/>
				<BarChartAverageBar 
					d={2}
					type={'posAvg'}
					heightScale={heightScale}
					widthScale={widthScale}
					height={30}
					x={50}
					y={0}
					fillColor={this.state.hoverAvg}
					colors={{color1: '#D8D8D8', color2: '#c7c7c7'}}
					onMouseLeave={(e, data, type, bool) => {
						this.setHoverAvg(false)
						this.moveToolTip(e, data, type, bool)
					}}
					onMouseMove={(e, data, type, bool) => {
						this.setHoverAvg(true)
						this.moveToolTip(e, data, type, bool)
					}}
				/>
						<BarChartBar
							d={data}
							type={'playerAvg'}
							heightScale={heightScale}
							widthScale={widthScale}
							x={50}
							y={10}
							fillColor={this.state.hover}
							onMouseLeave={(e, data, type, bool) => {
								this.setHover(false)
								this.moveToolTip(e, data, type, bool)
							}}
							onMouseMove={(e, data, type, bool) => {
								this.setHover(true)
								this.moveToolTip(e, data, type, bool)
							}}
						/>
				<Axis 
					widthScale={widthScale}
				/>
					{data.map((d, i) => (
						<BarChartLabel
							key={i}
							y={height + 10}
							x={40}
							title={title}
						></BarChartLabel>
					))}
				{/* <BarChartToolTip
					x={this.state.x}
					y={this.state.y}
					visible={this.state.hover || this.state.hoverAvg || this.state.hoverLeague}
					value={this.state.toolTipData}
				/> */}
			</g>
    );
  }
}

export default BarChart;
