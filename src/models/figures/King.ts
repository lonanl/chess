import {Figure, FiguresNames} from './Figure.ts';
import {Color} from '../Color.ts';
import {Cell} from '../Cell.ts';
import blackLogo from '../../assets/bk.png';
import whiteLogo from '../../assets/wk.png';

export class King extends Figure {

	constructor(color: Color, cell: Cell) {
		super(color, cell);
		this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
		this.name = FiguresNames.KING;
	}

	canMove(target: Cell): boolean {
		if(!super.canMove(target))
			return false;

		const absDX = Math.abs(target.x - this.cell.x);
		const absDY = Math.abs(target.y - this.cell.y);

		if(absDX <= 1 && absDY <= 1)
			return true;

		return false;
	}
}