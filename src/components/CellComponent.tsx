import {Cell} from '../models/Cell.ts';
import {FC} from 'react';
import {Color} from '../models/Color.ts';

interface CellProps {
	cell: Cell,
	selected: boolean,
	click: (cell: Cell) => void
	currentPlayerColor: Color
}

const CellComponent: FC<CellProps> = ({cell, selected, click, currentPlayerColor}) => {
	return (
		<div
			className={[
				'cell',
				cell.color,
				selected ? 'selected' : '',
			].join(' ')}
			// onClick={() => click(cell)}
			onMouseDown={() => click(cell)}
			onTouchStart={() => click(cell)}

		>
			{cell.available && !cell.figure && <div className="empty available"></div>}
			{cell.available && cell.figure  && <div className="with-figure available"></div>}
		</div>
	);
};


export default CellComponent;
