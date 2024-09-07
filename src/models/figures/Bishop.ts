import {Figure, FiguresNames} from './Figure.ts';
import {Color} from '../Color.ts';
import {Cell} from '../Cell.ts';
import blackLogo from '../../assets/bb.png';
import whiteLogo from '../../assets/wb.png';

// СЛОН

export class Bishop extends Figure {

	constructor(color: Color, cell: Cell) {
		super(color, cell);
		this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
		this.name = FiguresNames.BISHOP;
	}

	canMove(target: Cell): boolean {
		if(!super.canMove(target))
			return false;

		if(this.cell.isAvailableDiagonal(target))
			return true;

		return false;
	}
}

// СЛОН