import React from 'react';
import Login from './Login';
import { ThemeProvider } from '@material-ui/styles';
import muiTheme from '../../Theme/theme'

export default {
	title: 'Login',
    component: Login,
    decorators: [(Story) => <ThemeProvider theme={muiTheme}><Story/></ThemeProvider>]
};

const Template = (args) => <Login {...args}/>;

export const Primary = Template.bind({});


