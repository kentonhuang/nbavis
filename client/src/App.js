import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PlayerList from './components/PlayerList/PlayerList';
import Visualization from './components/Visualizations/Visualization';
import CourtVisualization from './components/CourtGraph/CourtVisualization';

class App extends Component {
  render() {
    return (
			<div className="container-fluid">
				<div className="row">
					<PlayerList></PlayerList>
					<CourtVisualization></CourtVisualization>
				</div>
				<div className="row">
					<Visualization />
				</div>
			</div>
    );
  }
}

export default App;
