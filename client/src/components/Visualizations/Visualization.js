import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, {css} from 'styled-components';

const Section = styled.section `
	width: 400px;
	height: 400px;
	overflow: auto;
	margin-top: 30px;
	margin-left: 40px;
	display: inline-block;
`

class Visualization extends Component {
	render() {
		return (
			<Section>
				{this.props.select.result.firstName} {this.props.select.result.lastName}
			</Section>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		select: state.select
	}
}

export default connect(mapStateToProps)(Visualization);