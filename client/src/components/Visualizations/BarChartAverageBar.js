import React from 'react';

const BarChartBarAverageBar = (props) => {

	return (
		<g>
			<rect
				x={props.x}
				y={props.y}
				width={props.widthScale(props.d)}
				height={props.height}
				onMouseMove={(e) => props.onMouseMove(e, props.d, props.type, true)}
				onMouseLeave={(e) => props.onMouseLeave(e, props.d, props.type, false)}
				style = {
					{
						fill: props.fillColor ? props.colors.color2 : props.colors.color1
					}
				}
			>
			</rect>
		</g>
	);
};

export default BarChartBarAverageBar;