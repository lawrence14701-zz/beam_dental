import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './Theme/theme';
import ContextProvider from './contexts/context';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ContextProvider>
				<div>hi</div>
			</ContextProvider>
		</ThemeProvider>
	);
}

export default App;
