import React, {useEffect, useRef, useState} from 'react';
import {Player} from '../models/Player.ts';
import {Color} from '../models/Color.ts';

interface TimerProps {
	currentPlayer: Player | null;
	restart: () => void;
}

function Timer({currentPlayer, restart}: TimerProps) {
	const [blackTime, setBlackTime] = useState(300);
	const [whiteTime, setWhiteTime] = useState(300);
	const timer = useRef<null | ReturnType<typeof setInterval>>(null);

	useEffect(() => {
		startTimer()
	}, [currentPlayer]);

	function startTimer() {
		if(timer.current) {
			clearInterval(timer.current)
		}

		const callback = currentPlayer?.color === Color.WHITE ? decrementWhitePlayer : decrementBlackTimer

		timer.current = setInterval(callback, 1000)
	}

	function decrementBlackTimer() {
		setBlackTime(prev => prev - 1);
	}

	function decrementWhitePlayer() {
		setWhiteTime(prev => prev - 1);
	}

	function handleRestart() {
		setWhiteTime(300)
		setBlackTime(300)
		restart()
	}

	return (
		<div>
			<div>
				<button onClick={handleRestart}>Начать сначала</button>
			</div>
			<h2>Черные - {blackTime}</h2>
			<h2>Белые - {whiteTime}</h2>
		</div>
	);
}

export default Timer;
