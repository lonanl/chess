import {Color} from './Color.ts';

export class Player {
	color: Color;
	name: string;


	constructor(color: Color, name: string) {
		this.color = color;
		this.name = name;
	}
}
