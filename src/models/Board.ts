import {Cell} from './Cell.ts';
import {Color} from './Color.ts';
import {Queen} from './figures/Queen.ts';
import {Bishop} from './figures/Bishop.ts';
import {Knight} from './figures/Knight.ts';
import {Pawn} from './figures/Pawn.ts';
import {King} from './figures/King.ts';
import {Rook} from './figures/Rook.ts';
import {Figure} from './figures/Figure.ts';

export class Board {
	cells: Cell[][] = [];
	lostBlackFigures: Figure[] = [];
	lostWhiteFigures: Figure[] = [];
	figures: Figure[] = []

	public initCells(): void {
		for(let i = 0; i < 8; i++) {
			const row: Cell[] = [];
			for(let j = 0; j < 8; j++) {
				if((i + j) % 2 == 0) {
					row.push(new Cell(this, j, i, Color.WHITE, null)); //Черные яч
				} else {
					row.push(new Cell(this, j, i, Color.BLACK, null));
				}
			}
			this.cells.push(row);
		}
	}

	public getCopyBoard(): Board {
		const newBoard = new Board();
		newBoard.cells = this.cells;
		newBoard.lostBlackFigures = this.lostBlackFigures;
		newBoard.lostWhiteFigures = this.lostWhiteFigures;
		newBoard.figures = this.figures;
		return newBoard;
	}

	public highlightCells(selectedCell: Cell | null): void {
		for(let i = 0; i < this.cells.length; i++) {
			const row = this.cells[i];
			for(let j = 0; j < row.length; j++) {
				const target = row[j];
				target.available = !!selectedCell?.figure?.canMove(target);
			}
		}
	}

	addLostFigure(figure: Figure) {
		if(figure.color === Color.BLACK)
			this.lostBlackFigures.push(figure);
		else
			this.lostWhiteFigures.push(figure);
	}

	public getCell(x: number, y: number): Cell {
		return this.cells[y][x];
	}

	private addPawns(): void {
		for(let i = 0; i < 8; i++) {
			new Pawn(Color.BLACK, this.getCell(i, 1));
			new Pawn(Color.WHITE, this.getCell(i, 6));
		}
	}

	private addKings(): void {
		new King(Color.BLACK, this.getCell(4, 0));
		new King(Color.WHITE, this.getCell(4, 7));
	}

	private addQueens(): void {
		new Queen(Color.BLACK, this.getCell(3, 0));
		new Queen(Color.WHITE, this.getCell(3, 7));
	}

	private addBishops(): void {
		new Bishop(Color.BLACK, this.getCell(2, 0));
		new Bishop(Color.BLACK, this.getCell(5, 0));
		new Bishop(Color.WHITE, this.getCell(2, 7));
		new Bishop(Color.WHITE, this.getCell(5, 7));
	}

	private addKnights(): void {
		new Knight(Color.BLACK, this.getCell(1, 0));
		new Knight(Color.BLACK, this.getCell(6, 0));
		new Knight(Color.WHITE, this.getCell(1, 7));
		new Knight(Color.WHITE, this.getCell(6, 7));
	}

	private addRooks(): void {
		new Rook(Color.BLACK, this.getCell(0, 0));
		new Rook(Color.BLACK, this.getCell(7, 0));
		new Rook(Color.WHITE, this.getCell(0, 7));
		new Rook(Color.WHITE, this.getCell(7, 7));
	}

	public addFigures(): void {
		this.addPawns();
		this.addKnights();
		this.addKings();
		this.addBishops();
		this.addQueens();
		this.addRooks();
		for(const row of this.cells) {
			for(const cell of row) {
				if(cell.figure) {
					this.figures.push(cell.figure)
				}
			}
		}
	}
}
