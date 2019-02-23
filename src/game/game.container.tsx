import * as React from 'react';
import GameOfColorsDisplay from './game.display';

interface IGameOfColorsProps {
	isActive: boolean;
}
interface IGameOfColorsState {
	level: number;
}

class GameOfColors extends React.Component<IGameOfColorsProps, IGameOfColorsState> {
	constructor(props: IGameOfColorsProps) {
		super(props);
		this.state = { level: 0 };
	}

	public render() {
		return <GameOfColorsDisplay />;
	}
}

export default GameOfColors;
