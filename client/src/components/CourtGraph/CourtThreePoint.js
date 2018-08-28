import React from 'react';

const CourtThreePoint = (props) => {
	return (
		<g>
			<defs>
				<clipPath id="3pointArc">
					<rect
						x={props.widthScaleCourt(47)}
						y={props.heightScale(0)}
						width={props.scaleFeet(32.5)}
						height={props.heightScale(50)}
					></rect>
				</clipPath>
			</defs>

			<line
				x1={props.widthScaleCourt(0)}
				x2={props.widthScaleCourt(14.5)}
				y1={props.heightScale(3)}
				y2={props.heightScale(3)}
				style={{
				strokeWidth: '3px',
				stroke: '#000000'
				}}
			>
			</line>
			<line
				x1={props.widthScaleCourt(0)}
				x2={props.widthScaleCourt(14.5)}
				y1={props.heightScale(47)}
				y2={props.heightScale(47)}
				style={{
				strokeWidth: '3px',
				stroke: '#000000'
				}}
			>
			</line>

				<circle 
				clip-path="url(#3pointArc)"
				cx={props.widthScaleCourt(5.5)}
				cy={props.heightScale(25)}
				r={props.scaleFeet(23.75)}
				style={{
				strokeWidth: '3px',
				stroke: '#000000',
				fill: 'none'
				}}
			/>
		</g>
	);
};

export default CourtThreePoint;