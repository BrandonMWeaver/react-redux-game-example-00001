import React, { Component } from 'react';
import { connect } from 'react-redux';

import { playerMove } from '../actions/playerActions';

class Player extends Component {
	componentDidMount() {
		window.addEventListener("keydown", event => {
			event.preventDefault();
			this.respond(event);
		});
	}
	
	respond = event => {
		switch(event.keyCode) {
			case 87:
				this.props.playerMove("UP");
				break;
			case 83:
				this.props.playerMove("DOWN");
				break;
			case 68:
				this.props.playerMove("RIGHT");
				break;
			case 65:
				this.props.playerMove("LEFT");
				break;
			default:
				return console.log(event.keyCode);
		}
	}

	render() {
		return (
			<div className="Player"
				style={{
					position: "relative",
					left: this.props.player.position.x,
					top: this.props.player.position.y,
					width: "40px",
					height: "40px",
					backgroundColor: "#00F"
				}}
			/>
		);
	}
}

export default connect(state => ({ player: state.player }), { playerMove })(Player);
