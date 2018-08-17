import React from "react";
import * as d3 from "d3";
import chroma from "chroma-js";

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
      .range([0, this.props.height])
  };

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

  render() {
    const { x, y, title, data, width, height, highlightBar, highlightedBar } = this.props,
      { widthScale, heightScale } = this.state;

    return (
			// <g transform={`translate(${x}, ${y})`}>
			<g style={{transform: 'translate(0,50%)'}}>
				<g
					onMouseOut={() => highlightBar(null)}
				>
					{data.map((d, i) => (

							<rect
							x={50}
							y={heightScale(i)}
							// x={widthScale(i)}
							// y={height - heightScale(d)}
							width={widthScale(d)}
							height={heightScale.bandwidth()}
							style={{
								fill: 'blue',
							}}
							onMouseOver={() => highlightBar(i)}
							key={i}
							/>
					))}
				</g>
				<g style={{textAnchor: 'end'}}>
					{data.map((d, i) => (
						<text
							y={height}
							x={40}
						>{title}</text>
					))}
				</g>
			</g>
    );
  }
}

export default BarChart;
