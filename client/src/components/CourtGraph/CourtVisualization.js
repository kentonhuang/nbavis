import React, { Component } from 'react';

import CourtGraph from './CourtGraph';

class CourtVisualization extends Component {

  state = {
    COURT_WIDTH: 611,
    COURT_HEIGHT: 500,
  }

  render() {
    return (
      <div className="col-md-8" style={{padding: '30px'}}>
        <CourtGraph
          courtWidth={this.state.COURT_WIDTH}
          courtHeight={this.state.COURT_HEIGHT}
          halfCourtLine={Math.round(this.state.COURT_WIDTH * .2308)}
        >
        </CourtGraph>
      </div>
    );
  }
}

export default CourtVisualization;