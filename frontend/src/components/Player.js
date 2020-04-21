import React from 'react';
import { connect } from 'react-redux';

const Player = props => {
	return (
		<div className="Player"
			style={{
				position: "relative",
				left: props.player.position.x,
				top: props.player.position.y,
				width: "40px",
				height: "40px",
				backgroundColor: "#00F"
			}}
		/>
	);
}

export default connect(state => ({ player: state.player }))(Player);
