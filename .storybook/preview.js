import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../src/Theme/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	options: {
		storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })),
	},
};

export const decotators = [
	(story) => (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Story />
		</ThemeProvider>
	),
];
