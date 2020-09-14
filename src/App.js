import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import muiTheme from './Theme/theme';
import FamilyProvider from './global/family';
import Shipping from './screens/Shipping';

function App() {
	return (
		<FamilyProvider>
			<ThemeProvider theme={muiTheme}>
				<CssBaseline />
				<Shipping />
			</ThemeProvider>
		</FamilyProvider>
	);
}

export default App;
