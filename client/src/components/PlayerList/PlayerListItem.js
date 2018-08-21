import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setSelected } from '../../actions/selectAction';

const List = styled.li `
		font-family: sans-serif;
		text-align: center;
		padding: 8px;	
		list-style: none;
		color: #aaa;
		user-select: none;
		transition: all 150ms ease-in;
		border: 1px solid #F8F8F8

		&:hover{
			background-color: #dddddd;
			color: #777;
		}

		${({active}) => active && `
			background: blue;

			&:hover {
				background: darkblue;
			}
		`}
	`

class PlayerListItem extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			active: false,
		}
	}

	setSelected = () => {
		this.props.dispatch(setSelected(this.props.player))
	}

	changeSelected() {
		if (this.props.select.result.playerId === this.props.player.playerId) {
			this.setState({
				active: true,
			})
		} else {
			this.setState({
				active: false,
			})
		}
	}
	
	componentDidMount() {
		this.changeSelected();
	}

	componentDidUpdate(prevProps, prevState) {
			if (this.props.select.result.playerId !== prevProps.select.result.playerId) {
				this.changeSelected();
			}
		// if(prevProps.select.result) {
		// 	if(this.props.select.result.playerId === this.props.player.playerId) {
		// 		console.log('hey"')
		// 	}
		// }
	}

	render() {
		return (
			<List active={this.state.active} onClick={this.setSelected}>
				{this.props.player.firstName} {this.props.player.lastName}
			</List>
		);
	}

};

function mapStateToProps(state, ownProps) {
	return {
		select: state.select
	}
}

export default connect(mapStateToProps)(PlayerListItem);