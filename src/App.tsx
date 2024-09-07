import './App.css';
import BoardComponent from './components/BoardComponent.tsx';
import {useEffect, useState} from 'react';
import {Board} from './models/Board.ts';
import {Player} from './models/Player.ts';
import {Color} from './models/Color.ts';
import PlayerComponent from './components/PlayerComponent.tsx';
import Timer from './components/Timer.tsx';

export default function App() {
	const [board, setBoard] = useState(new Board());
	const [whitePlayer] = useState(new Player(Color.WHITE, 'Белые'));
	const [blackPlayer] = useState(new Player(Color.BLACK, 'Черные'));
	const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

	useEffect(() => {
		restart();
	}, []);

	function restart() {
		const newBoard = new Board();
		newBoard.initCells();
		newBoard.addFigures();
		setBoard(newBoard);
		setCurrentPlayer(whitePlayer);
	}

	function swapPlayer(): void {
		setCurrentPlayer(currentPlayer?.color === Color.WHITE ? blackPlayer : whitePlayer);
	}

	return (
		<div className="app">
			{/*<Timer currentPlayer={currentPlayer} restart={restart} />*/}
			<div className="game-main">
        <PlayerComponent player={blackPlayer} currentPlayer={currentPlayer} board={board} />
				<BoardComponent
					board={board}
					setBoard={setBoard}
					currentPlayer={currentPlayer}
					swapPlayer={swapPlayer}
				/>
				<PlayerComponent player={whitePlayer} currentPlayer={currentPlayer} board={board} />
      </div>
		</div>
	);
}
