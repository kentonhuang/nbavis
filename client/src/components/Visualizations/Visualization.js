import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import BarChart from "./BarChart";

const Section = styled.section `
	width: 1000px;
	height: 400px;
	margin-top: 30px;
	margin-left: 40px;
	display: inline-block;
	background-color: #eeeeee
	padding: 50px;
`

class Visualization extends Component {

	state = {
		pts: [(Math.random()* 30).toFixed(1)],
		reb: [(Math.random() * 12).toFixed(1)],
		ast: [(Math.random() * 10).toFixed(1)],
		stl: [(Math.random() * 3).toFixed(1)],
		blk: [(Math.random() * 3).toFixed(1)],
		to: [(Math.random() * 4).toFixed(1)],
		currentIndex: null,

		domain: {
			ptsDomain: 30,
			rebDomain: 12,
			astDomain: 15,
			stlDomain: 4,
			blkDomain: 4,
			toDomain: 4,
		},

		barWidth: 900,
		barHeight: 10,
	};

	
	componentDidUpdate(prevProps, prevState) {
			if (this.props.select.result.playerId !== prevProps.select.result.playerId) {
				this.setState({
					pts: [(Math.random()* 30).toFixed(1)],
					reb: [(Math.random() * 12).toFixed(1)],
					ast: [(Math.random() * 10).toFixed(1)],
					stl: [(Math.random() * 3).toFixed(1)],
					blk: [(Math.random() * 3).toFixed(1)],
					to: [(Math.random() * 4).toFixed(1)],
				})
			}
		// if(prevProps.select.result) {
		// 	if(this.props.select.result.playerId === this.props.player.playerId) {
		// 		console.log('hey"')
		// 	}
		// }
	}

	render() {

		const { pts, reb, ast, stl, blk, to, barHeight, barWidth, domain } = this.state;

		// WILL REFACTOR || TESTING CODE
		return (
			<Section>
					<svg style={{width: '100%', height:'50px'}}>
            <BarChart
							data={pts}
							domain={domain.ptsDomain}
              width={barWidth}
              height={barHeight}
							title={'Pts'}
            />
						</svg>
						<svg style={{width: '100%', height:'50px'}}>
							<BarChart
							data={reb}
							domain={domain.rebDomain}
              width={barWidth}
              height={barHeight}
							title={'Rebs'}
            />
						</svg>
						<svg style={{width: '100%', height:'50px'}}>
							<BarChart
							data={ast}
							domain={domain.astDomain}
              width={barWidth}
              height={barHeight}
							title={'Ast'}
            />
						</svg>
						<svg style={{width: '100%', height:'50px'}}>
							<BarChart
							data={stl}
							domain={domain.stlDomain}
              width={barWidth}
              height={barHeight}
							title={'Stl'}
            />
						</svg>
						<svg style={{width: '100%', height:'50px'}}>
							<BarChart
							data={blk}
							domain={domain.blkDomain}
              width={barWidth}
              height={barHeight}
							title={'Blk'}
            />
						</svg>
						<svg style={{width: '100%', height:'50px'}}>
							<BarChart
							data={to}
							domain={domain.toDomain}
              width={barWidth}
              height={barHeight}
							title={'TOs'}
            />
						</svg>
			</Section>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		select: state.select
	}
}

export default connect(mapStateToProps)(Visualization);