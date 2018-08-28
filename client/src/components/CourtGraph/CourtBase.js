import React from 'react';

const CourtBase = (props) => {
	return (
		<g>
			<rect
				width={props.width}
				height={props.height}
				style={{
					fill: '#E8AD66',
					stroke: 'black',
					strokeWidth: '3px'
				}}
			></rect>

		</g>
	);
};

export default CourtBase;