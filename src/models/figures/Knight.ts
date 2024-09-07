import {Figure, FiguresNames} from './Figure.ts';
import {Color} from '../Color.ts';
import {Cell} from '../Cell.ts';
import blackLogo from '../../assets/bn.png';
import whiteLogo from '../../assets/wn.png';

//КОНЬ

export class Knight extends Figure {

	constructor(color: Color, cell: Cell) {
		super(color, cell);
		this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
		this.name = FiguresNames.KNIGHT;
	}

	canMove(target: Cell): boolean {
		if(!super.canMove(target))
			return false

		const absDX = Math.abs(target.x - this.cell.x)
		const absDY = Math.abs(target.y - this.cell.y)
		if((absDX === 2 && absDY === 1) || (absDY === 2 && absDX === 1))
			return true

		return false
	}
}

//КОНЬ