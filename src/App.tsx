import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './design-system/theme/default';
import GameOfColors from './game/game.container';

const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GameOfColors isActive={true} />
		</ThemeProvider>
	);
};

export default App;
