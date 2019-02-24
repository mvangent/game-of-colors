import * as React from 'react';
import { StateValue } from 'xstate';

import { GameEvent } from './state.machine';

const State = React.createContext({
	gameState: 'showTopScores' as StateValue,
	gameContext: { level: 0, score: 0 },
	transition: (event: GameEvent) => {
		// transition the state
	},
});

export default State;
