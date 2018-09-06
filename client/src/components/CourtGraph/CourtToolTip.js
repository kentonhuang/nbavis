import React from 'react';
import styled from 'styled-components';

const Tooltip = styled.div`
  position: absolute;
  text-align: center;
  width: 100px;
  height: 50px;
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

const CourtToolTip = (props) => {
  return (
    // <foreignObject style={{position: 'relative'}}>
      <Tooltip x={props.x} y={props.y} visible={props.visible} style={{top: props.y - 22, left: props.x - 17}}>
        <TopText>
          {props.text1}
        </TopText>
        <TopText>
          {props.text2}
        </TopText>
        <span>
          {props.value}
        </span>
      </Tooltip>
    // </foreignObject>
  );
};

export default CourtToolTip;