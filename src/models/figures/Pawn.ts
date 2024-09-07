import {Figure, FiguresNames} from './Figure.ts';
import {Color} from '../Color.ts';
import {Cell} from '../Cell.ts';
import blackLogo from '../../assets/bp.png';
import whiteLogo from '../../assets/wp.png';

//ПЕШКА

export class Pawn extends Figure {

	isFirstStep: boolean = true;

	constructor(color: Color, cell: Cell) {
		super(color, cell);
		this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
		this.name = FiguresNames.PAWN;
	}

	canMove(target: Cell): boolean {
		if(!super.canMove(target))
			return false;

		const direction = this.cell.figure?.color === Color.BLACK ? 1 : -1;
		const firstStepDirection = direction * 2;
		const dx = target.x - this.cell.x;
		const dy = target.y - this.cell.y;

		if(dx === 0 && target.isEmpty()) {
			if(dy === direction)
				return true;
			if(this.isFirstStep && dy === firstStepDirection)
				return true;
		}

		if(Math.abs(dx) === 1 && dy === direction && this.cell.isEnemy(target))
			return true;

		return false;
	}

	moveFigure(target: Cell): void {
		super.moveFigure(target);
		this.isFirstStep = false;
	}
}

//ПЕШКА