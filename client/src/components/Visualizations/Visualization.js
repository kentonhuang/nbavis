import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import BarChart from "./BarChart";
import BarChartToolTip from './BarChartToolTip';

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
		pts: [{val:(Math.random()* 30).toFixed(1)}],
		reb: [{val:(Math.random() * 12).toFixed(1)}],
		ast: [{val:(Math.random() * 10).toFixed(1)}],
		stl: [{val:(Math.random() * 3).toFixed(1)}],
		blk: [{val:(Math.random() * 3).toFixed(1)}],
		to: [{val:(Math.random() * 4).toFixed(1)}],

		leagueHigh: {
			pts: 30.4,
			rebs: 16.0,
			ast: 10.3,
			stl: 2.4,
			blk: 2.6,
			to: 5.0,
		},

		domain: {
			ptsDomain: 32,
			rebDomain: 16,
			astDomain: 12,
			stlDomain: 3,
			blkDomain: 3,
			toDomain: 5,
		},

		barWidth: 900,
		barHeight: 10,
		barHeightAvg: 30,

		toolTip: {
			x: 0,
			y: 0,
			data: '',
			hover: false
		}
	};

	
	componentDidUpdate(prevProps, prevState) {
			if (this.props.select.result.playerId !== prevProps.select.result.playerId) {
				this.setState({
					pts: [{val:(Math.random()* 30).toFixed(1)}],
					reb: [{val:(Math.random() * 12).toFixed(1)}],
					ast: [{val:(Math.random() * 10).toFixed(1)}],
					stl: [{val:(Math.random() * 3).toFixed(1)}],
					blk: [{val:(Math.random() * 3).toFixed(1)}],
					to: [{val:(Math.random() * 4).toFixed(1)}],
				})
			}
	}

	toolTipCallBack = (e, data, type, hover) => {
		data = Number(data).toFixed(1);
		let text = ''
		if (type === 'leagueAvg') text = 'League Max'
		else if (type === 'posAvg') text = 'Position Max'
		else text = 'Player Avg'

		this.setState({
			toolTip: {
				x: e.pageX,
				y: e.pageY,
				data: data,
				text: text,
				hover: hover,
			}
		})
	}

	render() {

		const { pts, reb, ast, stl, blk, to, barHeight, barWidth, domain, barHeightAvg, leagueHigh, toolTip } = this.state;

		// WILL REFACTOR || TESTING CODE
		return (
			<Section>
				<BarChartToolTip
					x={toolTip.x}
					y={toolTip.y}
					visible={toolTip.hover}
					text={toolTip.text}
					value={toolTip.data}
				/>
					<svg style={{width: '100%', height:'50px'}}>
            <BarChart
							data={pts}
							leagueHigh={leagueHigh.pts}
							domain={domain.ptsDomain}
              width={barWidth}
							height={barHeight}
							title={'Pts'}
							toolTipCallBack={this.toolTipCallBack}
            />
						</svg>
						<svg style={{width: '100%', height:'50px'}}>
							<BarChart
							data={reb}
							leagueHigh={leagueHigh.rebs}
							domain={domain.rebDomain}
              width={barWidth}
              height={barHeight}
							title={'Rebs'}
							toolTipCallBack={this.toolTipCallBack}
            />
						</svg>
						<svg style={{width: '100%', height:'50px'}}>
							<BarChart
							data={ast}
							leagueHigh={leagueHigh.ast}
							domain={domain.astDomain}
              width={barWidth}
              height={barHeight}
							title={'Ast'}
							toolTipCallBack={this.toolTipCallBack}
            />
						</svg>
						<svg style={{width: '100%', height:'50px'}}>
							<BarChart
							data={stl}
							leagueHigh={leagueHigh.stl}
							domain={domain.stlDomain}
              width={barWidth}
              height={barHeight}
							title={'Stl'}
							toolTipCallBack={this.toolTipCallBack}
            />
						</svg>
						<svg style={{width: '100%', height:'50px'}}>
							<BarChart
							data={blk}
							leagueHigh={leagueHigh.blk}
							domain={domain.blkDomain}
              width={barWidth}
              height={barHeight}
							title={'Blk'}
							toolTipCallBack={this.toolTipCallBack}
            />
						</svg>
						<svg style={{width: '100%', height:'50px'}}>
							<BarChart
							data={to}
							leagueHigh={leagueHigh.to}
							domain={domain.toDomain}
              width={barWidth}
              height={barHeight}
							title={'TOs'}
							toolTipCallBack={this.toolTipCallBack}
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