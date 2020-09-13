import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './Theme/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div>hi</div>
		</ThemeProvider>
	);
}

export default App;
