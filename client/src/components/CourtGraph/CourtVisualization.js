import React, { Component } from 'react';

import CourtGraph from './CourtGraph';
import CourtZones from './CourtZones/CourtZones';

class CourtVisualization extends Component {

  state = {
    COURT_WIDTH: 611,
    COURT_HEIGHT: 500,
  }

  render() {
    return (
      <div className="col-md-8" style={{padding: '30px'}}>
        <svg style={{width: this.state.COURT_WIDTH, height: this.state.COURT_HEIGHT}}>
        <CourtZones 
          courtWidth={this.state.COURT_WIDTH}
          courtHeight={this.state.COURT_HEIGHT}
          halfCourtLine={Math.round(this.state.COURT_WIDTH * .2308)}
        />
        <CourtGraph
          courtWidth={this.state.COURT_WIDTH}
          courtHeight={this.state.COURT_HEIGHT}
          halfCourtLine={Math.round(this.state.COURT_WIDTH * .2308)}
        >
        </CourtGraph>
        </svg>
      </div>
    );
  }
}

export default CourtVisualization;