import React from 'react';
import styled from 'styled-components';

const Tooltip = styled.div `
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
	transition: opacity 0.3s ease-in;
	left: ${props => props.x + 'px'}
	top: ${props => props.y + 'px'}
`

const BarChartToolTip = (props) => {
	return (
		<foreignObject style={{position: 'relative'}}>
			<Tooltip x={props.x} y={props.y} visible={props.visible}>{props.value}</Tooltip>
		</foreignObject>
	);
};

export default BarChartToolTip;