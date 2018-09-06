import React, { Component } from 'react';
import { connect } from 'react-redux';

import CourtGraph from './CourtGraph';
import CourtZones from './CourtZones/CourtZones';
import CourtToolTip from './CourtToolTip';

import splits from '../../data/shootingsplits.json';
import players from '../../data/players.json';

class CourtVisualization extends Component {

  state = {
    COURT_WIDTH: 611,
    COURT_HEIGHT: 500,
    stats: {
      playerId: 203518,
      shotsTaken: 291,
      shotsMade: 115,
      splits: {
        center: {
          "0-8": {
            "made": 23,
            "shots": 46,
            "percentage": "50.00"
          },
          "8-16": {
            "made": 6,
            "shots": 8,
            "percentage": "75.00"
          },
          "16-24": {
            "made": 0,
            "shots": 2,
            "percentage": "0.00"
          },
          "24+": {
            "made": 13,
            "shots": 40,
            "percentage": "32.50"
          }
        },
        "rightCenter": {
          "16-24": {
            "made": 0,
            "shots": 2,
            "percentage": "0.00"
          },
          "24+": {
            "made": 24,
            "shots": 68,
            "percentage": "35.29"
          }
        },
        "right": {
          "8-16": {
            "made": 0,
            "shots": 1,
            "percentage": "0.00"
          },
          "16-24": {
            "made": 0,
            "shots": 3,
            "percentage": "0.00"
          },
          "24+": {
            "made": 13,
            "shots": 35,
            "percentage": "37.14"
          }
        },
        "leftCenter": {
          "16-24": {
            "made": 0,
            "shots": 3,
            "percentage": "0.00"
          },
          "24+": {
            "made": 24,
            "shots": 51,
            "percentage": "47.06"
          }
        },
        "left": {
          "8-16": {
            "made": 1,
            "shots": 3,
            "percentage": "33.33"
          },
          "16-24": {
            "made": 2,
            "shots": 4,
            "percentage": "50.00"
          },
          "24+": {
            "made": 9,
            "shots": 24,
            "percentage": "37.50"
          }
        },
        "backCourt": {
          "backCourt": {
            "made": 0,
            "shots": 1,
            "percentage": "0.00"
          }
        }
      },
      "percentage": "39.52"
    },

    toolTip: {
      x: 0,
      y: 0,
      data: {
        data: {}
      },
      hover: false
    }
  }

  toolTipCallBack = (e, bool, data) => {
    this.setState({
      toolTip: {
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
        hover: bool,
        data
      }
    })
    console.log(data);
  }

  componentDidUpdate(prevProps, prevState) {
      if (this.props.select.result.playerId !== prevProps.select.result.playerId) {
        for(let i = 0; i < splits.length; i++) {
          if(splits[i].playerId === this.props.select.result.playerId) {
            this.setState({ 
              stats: splits[i]
            })
          }
        }
      }
    }

  render() {
    const {toolTip} = this.state;
    console.log(toolTip.data.data);
    return (
      <div className="col-md-8" style={{padding: '30px', position: 'relative'}}>
        <CourtToolTip
          x={toolTip.x}
          y={toolTip.y}
          visible={toolTip.hover}
          text1={toolTip.data.zone}
          text2={toolTip.data.dist}
          value={`${toolTip.data.data.made}/${toolTip.data.data.shots} (${toolTip.data.data.percentage}%)`}
        />
        <svg style={{width: this.state.COURT_WIDTH, height: this.state.COURT_HEIGHT}}>
        <CourtZones 
          courtWidth={this.state.COURT_WIDTH}
          courtHeight={this.state.COURT_HEIGHT}
          halfCourtLine={Math.round(this.state.COURT_WIDTH * .2308)}
          stats={this.state.stats}
          toolTipCallBack={this.toolTipCallBack}
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

function mapStateToProps(state, ownProps) {
  return {
    select: state.select
  }
}

export default connect(mapStateToProps)(CourtVisualization);