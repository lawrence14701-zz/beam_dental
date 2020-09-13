import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './Theme/theme';
import FamilyProvider from './global/family';
import Test from './screens/test'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<FamilyProvider>
				<Test/>
			</FamilyProvider>
		</ThemeProvider>
	);
}

export default App;
