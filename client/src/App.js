import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PlayerList from './components/PlayerList/PlayerList';
import Visualization from './components/Visualizations/Visualization';

class App extends Component {
  render() {
    return (
			<div>
				<PlayerList></PlayerList>
				<Visualization />
			</div>
    );
  }
}

export default App;
