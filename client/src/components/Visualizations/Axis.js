import React, { Component } from 'react';
import * as d3 from 'd3';

class Axis extends Component {

  componentDidMount() {
    this.renderAxis()
  }

  componentDidUpdate() {
    this.renderAxis()
  }
  
  renderAxis() {

    // const xProps = {
    //   orient: 'Bottom',
    //   scale: this.props.widthScale,
    //   translate: `translate(50, ${this.props.height})`,
    //   tickSize: this.props.height,
    // }
    const axis = d3.axisBottom(this.props.widthScale)
    d3.select(this.axisElement).call(axis)
  }

  render() {
    return (
      <g
          ref={(el) => { this.axisElement = el; }}
          transform= 'translate(50,30)'
      />
    );
  }
}

export default Axis;