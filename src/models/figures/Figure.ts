import {Color} from "../Color.ts";
import logo from '../../assets/bb.png';
import {Cell} from "../Cell.ts";

export enum FiguresNames {
	FIGURE = 'Фигура',
	KING = 'Король',
	KNIGHT = 'Конь',
	PAWN = 'Пешка',
	QUEEN = 'Ферзь',
	ROOK = 'Ладья',
	BISHOP = 'Слон'
}

export class Figure {
	color: Color;
	logo: typeof logo | null;
	cell: Cell;
	name: FiguresNames;
	id: number;
	isAlive: boolean;


	constructor(color: Color, cell: Cell) {
		this.color = color;
		this.cell = cell;
		this.cell.figure = this
		this.logo = null
		this.name = FiguresNames.FIGURE
		this.id = Math.random()
		this.isAlive = true
	}

	canMove(target: Cell): boolean {
		if(target.figure?.color === this.color) {
			return false
		}
		if(target.figure?.name === FiguresNames.KING) {
			return false
		}
		return true
	}

	moveFigure(target: Cell): void {

	}
}
