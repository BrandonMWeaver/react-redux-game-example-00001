import React, { Component } from 'react';

import Player from './Player';

import '../styles/GameScreen.css';

class GameScreen extends Component {
	render() {
		return (
			<div className="GameScreen">
				<Player />
			</div>
		);
	}
}

export default GameScreen;
