import {Figure, FiguresNames} from './Figure.ts';
import {Color} from '../Color.ts';
import {Cell} from '../Cell.ts';
import blackLogo from '../../assets/br.png';
import whiteLogo from '../../assets/wr.png';

//ЛАДЬЯ

export class Rook extends Figure {

	constructor(color: Color, cell: Cell) {
		super(color, cell);
		this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
		this.name = FiguresNames.ROOK;
	}

	canMove(target: Cell) {
		if (!super.canMove(target))
			return false;

		if (this.cell.isAvailableVertical(target))
			return true;

		if (this.cell.isAvailableHorizontal(target))
			return true;

		return false;
	}
}

//ЛАДЬЯ