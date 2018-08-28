import React from 'react';
import styled from 'styled-components';

const Tooltip = styled.div`
	position: absolute;
	text-align: center;
	width: 60px;
	height: 30px;
	padding: 2px;
	background: #ff9933;
	border: 0px;
	font-size: 12px;
	font-weight: 700;
	border-radius: 8px;
	pointer-events: none;
	opacity: ${props => props.visible ? 0.9: 0}
	transition: opacity 0.3s ease-in;
`

const TopText = styled.span`
	display: block;
	font-size: 9px;
`

const BarChartToolTip = (props) => {
	return (
		// <foreignObject style={{position: 'relative'}}>
			<Tooltip x={props.x} y={props.y} visible={props.visible} style={{top: props.y - 34 + 'px', left: props.x - 30 + 'px'}}>
				<TopText>
					{props.text}
				</TopText>
				<span>
					{props.value}
				</span>
			</Tooltip>
		// </foreignObject>
	);
};

export default BarChartToolTip;