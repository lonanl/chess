import React from 'react';
import {Player} from '../models/Player.ts';
import {Board} from '../models/Board.ts';
import {Color} from '../models/Color.ts';
import whiteKing from '../assets/wk.png';
import blackKing from '../assets/bk.png';

interface PlayerComponentProps {
	player: Player,
	currentPlayer: Player,
	board: Board
}

function PlayerComponent({player, currentPlayer, board}: PlayerComponentProps) {
	const playerLogo = player.color === Color.WHITE ? whiteKing : blackKing;
	const enemyColor = player.color === Color.WHITE ? 'black' : 'white'
	const isCurrentPlayer = currentPlayer === player;
	const figures = player.color === Color.BLACK ? board.lostWhiteFigures : board.lostBlackFigures;

	return (
		<div className={['player', isCurrentPlayer ? 'current' : ''].join(' ')}>
			<div className="player-title">
				<img
					className={player.color} src={playerLogo} alt=""
				/>
				<h3>{player.name}</h3>
			</div>
			<div className="lost-figures">
				{figures.map((figure) =>
					<img className={['lost-figure',enemyColor].join(' ')} key={figure.id} src={figure.logo} alt="" />,
				)}
			</div>
		</div>
	);
}

export default PlayerComponent;
