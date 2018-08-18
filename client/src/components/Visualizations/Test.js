import React from "react";
import * as d3 from "d3";
import * as d3Axis from 'd3-axis'
import chroma from "chroma-js";
import styled, {css} from 'styled-components';

const Tooltip = styled.div`
	position: absolute;
	text-align: center;
	width: 60px;
	height: 28px;
	padding: 2px;
	background: lightsteelblue;
	border: 0px;
	border-radius: 8px;
	pointer-events: none;
	opacity: ${props => props.visible ? 0.9: 0}
	transition: opacity 0.5s ease-in;
	left: ${props => props.x + 'px'}
	top: ${props => props.y + 'px'}
`

class BarChart extends React.Component {
  state = {
    widthScale: d3
			// .scaleBand()
			.scaleLinear()
      .domain([0, this.props.domain])
			// .range([0, this.props.width]),
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
	
	componentDidMount() {
    this.renderAxis()
  }

  componentDidUpdate() {
    this.renderAxis()
	}
	
	renderAxis() {

		const xProps = {
			orient: 'Bottom',
			scale: this.state.widthScale,
			translate: `translate(50, ${this.props.height})`,
			tickSize: this.props.height,
		}
		const axis = d3.axisBottom(this.state.widthScale)
		d3.select(this.axisElement).call(axis)
	}


  color = chroma.scale('OrRd').domain([1,0]);

  static getDerivedStateFromProps(nextProps, prevState) {
    let { widthScale, heightScale } = prevState;

    // widthScale.domain(d3.range(0, nextProps.data.length));
		// heightScale.domain([0, d3.max(nextProps.data)]);
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
		console.log(e.pageX);
		this.setState({
			x: e.nativeEvent.offsetX,
			y: e.nativeEvent.offsetY,
		})
	}

  render() {
    const { x, y, title, data, width, height, highlightBar, highlightedBar } = this.props,
			{ widthScale, heightScale } = this.state;

    return (
			// <g transform={`translate(${x}, ${y})`}>
			<g style={{transform: 'translate(0,0)', position: 'relative'}}>
				<g
				>
					{data.map((d, i) => (

							<rect
							x={50}
							y={heightScale(i) + 10}
							// x={widthScale(i)}
							// y={height - heightScale(d)}
							width={widthScale(d)}
							height={heightScale.bandwidth()}
							style={{
								fill: this.state.hover ? 'blue' : 'red'
							}}
							onMouseOver={(e) => {
								this.setHover(true)
								this.moveToolTip(e)
							}}
							onMouseLeave={() => this.setHover(false)}
							onMouseMove={(e) => {
								this.moveToolTip(e)
								this.setHover(true)
							}}
							key={i}
							/>
					))}
				</g>
				<g
					ref={(el) => { this.axisElement = el; }}
					transform= 'translate(50,30)'
      	/>
				<g style={{textAnchor: 'end'}}>
					{data.map((d, i) => (
						<text
							key={i}
							y={height + 10}
							x={40}
						>{title}</text>
					))}
				</g>
				<foreignObject style={{position: 'relative'}}>
					<Tooltip x={this.state.x} y={this.state.y} visible={this.state.hover}>{data[0]}</Tooltip>
				</foreignObject>
			</g>
    );
  }
}

export default BarChart;
