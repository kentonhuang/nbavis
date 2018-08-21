import React from "react";
import * as d3 from "d3";
import chroma from "chroma-js";
import styled from 'styled-components';

import BarChartBar from './BarChartBar';
import Axis from './Axis';
import BarChartLabel from './BarChartLabel';
import BarChartToolTip from './BarChartToolTip';

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

		translate: `translate(50, ${this.props.height})`,
		x: 0,
		y: 0,
	};

  color = chroma.scale('OrRd').domain([1,0]);

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

	moveToolTip(e) {
		this.setState({
			x: e.nativeEvent.offsetX,
			y: e.nativeEvent.offsetY,
		})
	}

  render() {
    const { title, data, height } = this.props,
			{ widthScale, heightScale } = this.state;

    return (
			<g style={{transform: 'translate(0,0)', position: 'relative'}}>
					{data.map((d, i) => (
						<BarChartBar
							d={d}
							heightScale={heightScale}
							widthScale={widthScale}
							x={50}
							y={heightScale(i) + 10}
							fillColor={this.state.hover}
							onMouseLeave={() => this.setHover(false)}
							onMouseMove={(e) => {
								this.moveToolTip(e)
								this.setHover(true)
							}}
							key={i}
						/>
					))}
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
				<BarChartToolTip
					x={this.state.x}
					y={this.state.y}
					visible={this.state.hover}
					value={data[0]}
				/>
			</g>
    );
  }
}

export default BarChart;
