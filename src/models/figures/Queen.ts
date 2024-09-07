import {Figure, FiguresNames} from './Figure.ts';
import {Color} from '../Color.ts';
import {Cell} from '../Cell.ts';
import blackLogo from '../../assets/bq.png';
import whiteLogo from '../../assets/wq.png';

export class Queen extends Figure {

	constructor(color: Color, cell: Cell) {
		super(color, cell);
		this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
		this.name = FiguresNames.QUEEN;
	}

	canMove(target: Cell) {
		if (!super.canMove(target))
			return false;

		if (this.cell.isAvailableVertical(target))
			return true;

		if (this.cell.isAvailableHorizontal(target))
			return true;

		if (this.cell.isAvailableDiagonal(target))
			return true;

		return false;
	}
}