import * as React from 'react';
import { StateValue } from 'xstate';

import GameContext from '../state/state.context';
import gameMachine, { GameEvent, IGameMachineContext } from '../state/state.machine';
import GameOfColorsDisplay from './game.display';

interface IGameOfColorsProps {
	isActive: boolean;
}
interface IGameOfColorsState {
	gameState: StateValue;
	gameContext: IGameMachineContext;
}

class GameOfColors extends React.Component<IGameOfColorsProps, IGameOfColorsState> {
	constructor(props: IGameOfColorsProps) {
		super(props);
		this.state = { gameState: gameMachine.initialState.value, gameContext: gameMachine.context as IGameMachineContext };
	}

	transition(event: GameEvent) {
		const nextGameState = gameMachine.transition(this.state.gameState, event.type);
		this.setState({
			gameState: nextGameState.value,
			gameContext: nextGameState.context,
		});
	}

	render() {
		return (
			<GameContext.Provider value={{ ...this.state, transition: this.transition }}>
				<GameOfColorsDisplay />
			</GameContext.Provider>
		);
	}
}

export default GameOfColors;
