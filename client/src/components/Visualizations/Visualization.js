import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, {css} from 'styled-components';

import Test from "./Test";
import { range as d3Range } from "d3";

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
		currentIndex: null
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

		const { pts, reb, ast, stl, blk, to, currentIndex } = this.state;

		// WILL REFACTOR || TESTING CODE
		return (
			<Section>
				<g style={{display: 'block'}}>
					<svg style={{width: '100%', height:'50px'}}>
            <Test
							data={pts}
							domain={30}
              width={900}
              height={10}
              x={0}
              y={0}
							title={'Pts'}
            />
						</svg>
						<svg style={{width: '100%', height:'50px'}}>
							<Test
							data={reb}
							domain={15}
              width={900}
              height={10}
              x={0}
              y={0}
							title={'Rebs'}
            />
						</svg>
						<svg style={{width: '100%', height:'50px'}}>
							<Test
							data={ast}
							domain={12}
              width={900}
              height={10}
              x={0}
              y={0}
							title={'Ast'}
            />
						</svg>
						<svg style={{width: '100%', height:'50px'}}>
							<Test
							data={stl}
							domain={4}
              width={900}
              height={10}
              x={0}
              y={0}
							title={'Stl'}
            />
						</svg>
						<svg style={{width: '100%', height:'50px'}}>
							<Test
							data={blk}
							domain={4}
              width={900}
              height={10}
              x={0}
              y={0}
							title={'Blk'}
            />
						</svg>
						<svg style={{width: '100%', height:'50px'}}>
							<Test
							data={to}
							domain={4}
              width={900}
              height={10}
              x={0}
              y={0}
							title={'TOs'}
            />
						</svg>
				</g>
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