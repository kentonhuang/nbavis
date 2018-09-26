import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash'

import players from '../../data/players.json';
import PlayerListItem from './PlayerListItem';

const Input = styled.input`
  width: 90%;
  display: block;
  margin: 0 auto;
`

const Ul = styled.ul`
  padding: 0;
`

const Section = styled.section`
  width: 400px;
  height: 450px;
  overflow: auto;
  display: inline-block;
`

class PlayerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      displayed: players,
    }
  }

  loadPlayers(){
    return this.state.displayed.map((player) => {
      return (
        <PlayerListItem key={player.playerId} player={player}></PlayerListItem>
      )
    })
  }

  handleInputChange = (e) => {

    let newDisplay = _.filter(players, (player) => {
      let name = player.firstName + ' ' + player.lastName;
      return name.toLowerCase().includes(e.target.value.toLowerCase());
    })

    this.setState({
      searchTerm: e.target.value,
      displayed: newDisplay,
    })

    console.log(this.state.displayed);
  }

  render() {
    return (
      <Section className="col-2" style={{paddingLeft: '5px'}}>
        <Input
          type="text"
          placeholder="find player" 
          onChange={this.handleInputChange} 
          value={this.state.searchTerm}/>
        <Ul>
          {this.loadPlayers()}
        </Ul>
      </Section>
    );
  }
}

export default PlayerList;