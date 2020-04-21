import React, { Component } from 'react';

import '../styles/GameScreen.css';

class GameScreen extends Component {
	start = gameLoop => {
		this.interval = setInterval(gameLoop, 20);
	}

	stop = () => {
		clearInterval(this.interval)
	}

	render() {
		return (
			<div className="GameScreen">
				<canvas />
			</div>
		);
	}
}

export default GameScreen;
