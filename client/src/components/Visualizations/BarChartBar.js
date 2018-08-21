import React from 'react';

const BarChartBar = (props) => {

	return (
		<g>
			<rect
				x={props.x}
				y={props.y}
				width={props.widthScale(props.d)}
				height={props.heightScale.bandwidth()}
				onMouseMove={(e) => props.onMouseMove(e)}
				onMouseLeave={() => props.onMouseLeave()}
				style = {
					{
						fill: props.fillColor ? 'blue' : 'red'
					}
				}
			>
			</rect>
		</g>
	);
};

export default BarChartBar;