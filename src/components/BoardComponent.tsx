import React, {FC, useEffect, useState} from 'react';
import {Board} from '../models/Board.ts';
import CellComponent from './CellComponent.tsx';
import {Cell} from '../models/Cell.ts';
import {Player} from '../models/Player.ts';
import FigureComponent from './FigureComponent.tsx';

interface BoardProps {
	board: Board,
	setBoard: (board: Board) => void,
	currentPlayer: Player | null,
	swapPlayer: () => void
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
	const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

	function click(cell: Cell) {
		if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
			selectedCell.moveFigure(cell);
			setSelectedCell(null);
			swapPlayer();
		// } else if(true) {
		} else if(cell.figure && cell.figure.color === currentPlayer?.color) {
			setSelectedCell(cell);
		}
	}

	useEffect(() => {
		highlightCells();
	}, [selectedCell]);

	function highlightCells() {
		board.highlightCells(selectedCell);
		updateBoard();
	}

	function updateBoard() {
		const newBoard = board.getCopyBoard();
		setBoard(newBoard);
	}

	return (
		<div className="board">
			<div className="cells">
				{board.cells.map((row) => {
					return row.map(cell =>
						<CellComponent
							currentPlayerColor={currentPlayer.color}
							click={click} key={cell.id} cell={cell}
							selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
						/>);
				})}
			</div>
			<div className="figures">
				{board.figures.map((figure) => <FigureComponent key={figure.id} figure={figure} />)}
			</div>
		</div>
	)
		;
};

export default BoardComponent;
