import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import muiTheme from './Theme/theme';
import Shipping from './screens/ShippingScreen/Shipping';

function App() {
	return (
		<ThemeProvider theme={muiTheme}>
			<CssBaseline />
			<Shipping />
		</ThemeProvider>
	);
}

export default App;
