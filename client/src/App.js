import React, { Component } from 'react';
import './App.css';

import PlayerList from './components/PlayerList/PlayerList';
import Visualization from './components/Visualizations/Visualization';
import CourtVisualization from './components/CourtGraph/CourtVisualization';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{
          padding: '10px',
          margin: '10px',
          border: '1px solid black'
        }}>
          <PlayerList></PlayerList>
          <div className="col-md-10">
            <div className="row">
              <div className="col-xl-6">
                <CourtVisualization></CourtVisualization>
              </div>
                <div className="col-xl-6">
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{
          padding: '10px',
          margin: '10px',
          border: '1px solid black'
        }}>
          <PlayerInfo></PlayerInfo>
          <Visualization />
        </div>
      </div>
    );
  }
}

export default App;
