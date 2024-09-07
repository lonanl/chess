import React, {useRef} from 'react';
import {Cell} from '../models/Cell.ts';
import {Figure} from '../models/figures/Figure.ts';

interface FigureComponentProps {
	figure: Figure,
}

function FigureComponent({figure}: FigureComponentProps) {
	const top = `${figure.cell.y * 64}px`;
	const left = `${figure.cell.x * 64}px`;

	return (
		<img
			className={['figure', !figure.isAlive ? 'died' : ''].join(' ')}
			src={figure?.logo}
			style={{top: top, left: left}}
			alt=""
		/>
	);
}

export default FigureComponent;
