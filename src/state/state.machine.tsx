import { assign, Machine } from 'xstate';

export interface IGameMachineContext {
	level: number;
	score: number;
}

export interface IGameStateSchema {
	context: IGameMachineContext;
	states: {
		showTopScores: {};
		play: {};
		enterName: {
			// states: { FIXME: shall we use substates ??
			// 	walk: {};
			// 	wait: {};
			// 	stop: {};
		};
	};
}

export type GameEvent =
	| { type: 'START' }
	| { type: 'GAME_OVER' }
	| { type: 'NEXT_LEVEL'; pointsEarned: number }
	| { type: 'NAME_ENTERED' };

// Action to increment the context amount
const levelUp = assign({
	level: (ctx: IGameMachineContext, event: { type: 'NEXT_LEVEL' }) => ctx.level + 1,
});

// Guard to check if the glass is full
function isGameComplete(ctx: IGameMachineContext, event: GameEvent) {
	return ctx.level >= 10;
}

const gameMachine = Machine<IGameMachineContext, IGameStateSchema, GameEvent>(
	{
		initial: 'showTopScores',
		context: { level: 0, score: 0 },
		states: {
			showTopScores: {
				on: {
					START: 'play',
				},
			},
			play: {
				on: {
					'': { target: 'enterName', cond: 'isGameComplete' },
					GAME_OVER: 'enterName',
					NEXT_LEVEL: { target: 'play', actions: 'levelUp' },
				},
			},
			enterName: { on: { NAME_ENTERED: 'showTopScores' } },
		},
	},
	{
		actions: { levelUp },
		guards: { isGameComplete },
	}
);

export default gameMachine;
