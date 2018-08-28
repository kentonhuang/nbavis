import React from 'react';

const BarChartBar = (props) => {

  return (
    <g>
      <rect
        x={props.x}
        y={props.y}
        width={props.widthScale(props.d[0].val)}
        height={props.heightScale.bandwidth()}
        onMouseMove={(e) => props.onMouseMove(e, props.d[0].val, props.type, true)}
        onMouseLeave={(e) => props.onMouseLeave(e, props.d[0].val, props.type, false)}
        style = {
          {
            fill: props.fillColor ? '#008ee6' : '#4dbbff'
          }
        }
      >
      </rect>
    </g>
  );
};

export default BarChartBar;